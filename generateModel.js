import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ES Module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define Paths
const dtoFilePath = path.join(__dirname, 'data/dtos.ts'); // Adjusted path
const outputFilePath = path.join(
  path.dirname(dtoFilePath),
  'generatedModels.ts',
);

// Check if `dtos.ts` exists before reading
if (!fs.existsSync(dtoFilePath)) {
  console.error(`Error: The file ${dtoFilePath} does not exist.`);
  process.exit(1); // Stop execution
}

// Read the DTO file
let dtoContent = fs.readFileSync(dtoFilePath, 'utf-8');

// Remove all comments from the file
dtoContent = dtoContent.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '').trim();

// Define regex patterns to match interfaces and enums
const interfaceRegex = /export\s+interface\s+(\w+)\s*{([\s\S]*?)\n}/g;
const enumRegex = /export\s+enum\s+(\w+)\s*{([\s\S]*?\n)}/g;

let match;
const interfaces = [];
const enums = {};
const usedTypes = new Set();

// Extract interfaces
while ((match = interfaceRegex.exec(dtoContent)) !== null) {
  const interfaceName = match[1];
  const interfaceBody = match[2].trim();

  // Skip interfaces containing "Filter", "ResultOk", or "Localization"
  if (
    interfaceName.includes('Filter') ||
    interfaceName.includes('ResultOk') ||
    interfaceName === 'Localization'
  ) {
    continue;
  }

  const properties = interfaceBody
    .split('\n')
    .filter(Boolean)
    .map((prop) => prop.trim());
  interfaces.push({ name: interfaceName, properties });
}

// Extract enums
while ((match = enumRegex.exec(dtoContent)) !== null) {
  const enumName = match[1];
  const enumBody = match[2].trim().replace(/\s+/g, ' ');
  enums[enumName] = enumBody;
}

// Convert to PascalCase
function toPascalCase(str) {
  return str.replace(/(^\w|_\w)/g, (m) => m.replace('_', '').toUpperCase());
}

// Determine if a type is primitive
function isPrimitiveType(type) {
  const primitiveTypes = [
    'string',
    'number',
    'boolean',
    'symbol',
    'bigint',
    'undefined',
    'null',
    'any',
  ];
  return (
    primitiveTypes.includes(type) ||
    (type.endsWith('[]') && primitiveTypes.includes(type.slice(0, -2)))
  );
}

// Collect all used types
interfaces.forEach(({ properties }) => {
  properties.forEach((prop) => {
    let [, type] = prop.split(':').map((p) => p.trim().replace(/;$/, ''));
    if (type && !isPrimitiveType(type) && !enums[type]) {
      type = type.replace(' | null', '').replace('?', '').trim();
      usedTypes.add(type);
    }
  });
});

// Start generating the output content
let outputContent = '/* Generated Models - DO NOT EDIT */\n';
outputContent += "import * as dto from './dtos';\n\n";
outputContent += 'export namespace M {\n';

// Generate the model class content for each interface
interfaces.forEach(({ name: interfaceName, properties }) => {
  const className = `${toPascalCase(interfaceName)}`; // Removed 'Model' suffix
  outputContent += `  export class ${className} {\n`;

  properties.forEach((prop) => {
    let [name, type] = prop.split(':').map((p) => p.trim().replace(/;$/, ''));
    if (!name || !type) return;

    // Preserve optional marker and null types
    const originalType = type;
    name = name.replace('?', '').trim();
    type = type.replace(' | null', '').replace('?', '').trim();

    if (type.endsWith('[]')) {
      const itemType = type.slice(0, -2);
      if (!isPrimitiveType(itemType) && !enums[itemType]) {
        type = `M.${toPascalCase(itemType)}[]`;
        outputContent += `    ${name}: ${type};\n`;
      } else if (enums[itemType]) {
        type = `dto.${itemType}[]`;
        outputContent += `    ${name}: ${type};\n`;
      } else {
        outputContent += `    ${name}: ${type};\n`;
      }
    } else if (!isPrimitiveType(type) && !enums[type]) {
      type = `M.${toPascalCase(type)} | null`;
      outputContent += `    ${name}: ${type};\n`;
    } else if (enums[type]) {
      type = `dto.${type}`;
      outputContent += `    ${name}: ${type};\n`;
    } else {
      outputContent += `    ${name}: ${originalType.replace(' | null', '')};\n`;
    }
  });

  outputContent += `
    constructor(data: any) {
        ${properties
          .map((prop) => {
            let [name, type] = prop
              .split(':')
              .map((p) => p.trim().replace(/;$/, ''));
            if (!name) return '';

            name = name.replace('?', '').trim();
            type = type.replace(' | null', '').replace('?', '').trim();
            const originalType = type;

            if (originalType.endsWith('[]')) {
              const itemType = originalType.slice(0, -2);
              if (!isPrimitiveType(itemType) && !enums[itemType]) {
                return `this.${name} = data?.${name}?.map((item: any) => new M.${toPascalCase(itemType)}(item)) || [];`;
              } else {
                return `this.${name} = data?.${name} ?? [];`;
              }
            } else if (!isPrimitiveType(originalType) && !enums[originalType]) {
              return `this.${name} = data?.${name} ? new M.${toPascalCase(originalType)}(data?.${name}) : null;`;
            } else if (
              originalType === 'string' ||
              originalType === 'string | null'
            ) {
              return `this.${name} = data?.${name} ?? '';`;
            } else {
              return `this.${name} = data?.${name};`;
            }
          })
          .filter((line) => line !== '')
          .join('\n        ')}
    }
  }\n\n`;
});

outputContent += '}\n';

// Write the output content to the file
fs.writeFileSync(outputFilePath, outputContent);

console.log(`Model classes generated successfully at ${outputFilePath}.`);
