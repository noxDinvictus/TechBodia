<template>
  <div class="relative w-full">
    <input
      :id="name"
      :type="type"
      :value="localValue"
      @input="handleInput"
      class="peer w-full rounded-md border border-gray-300 p-2 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      :required="required"
      placeholder=" "
    />
    <label
      :for="name"
      class="absolute left-2 top-[-5px] z-20 bg-white px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-focus:left-2 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500"
      :class="{ 'left-2 top-[-5px] text-xs text-blue-500': localValue }"
    >
      {{ label }}
    </label>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  label: string;
  modelValue: string;
  type?: string;
  name?: string;
  required?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);

const localValue = ref(props.modelValue);
let timeout: ReturnType<typeof setTimeout> | null = null;

// Properly debounce the input changes
const handleInput = (event: Event) => {
  const newValue = (event.target as HTMLInputElement).value;
  localValue.value = newValue;

  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(() => {
    emit('update:modelValue', newValue);
  }, 500);
};

// Sync localValue with external modelValue
watch(
  () => props.modelValue,
  (newValue) => {
    localValue.value = newValue;
  },
);
</script>
