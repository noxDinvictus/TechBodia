import{d as se,r as ge,o as Ae,t as J,a4 as Ie,v as te,I as he,E as Re,$ as Ge,B as Pe,x as j,y as xe,a1 as Te}from"./4eUdFAPE.js";const Ee=Symbol.for("nuxt:client-only"),At=se({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:o,attrs:n}){const s=ge(!1);return Ae(()=>{s.value=!0}),Ie(Ee,!0),l=>{var a;if(s.value)return(a=o.default)==null?void 0:a.call(o);const c=o.fallback||o.placeholder;if(c)return c();const i=l.fallback||l.placeholder||"",d=l.fallbackTag||l.placeholderTag||"span";return J(d,n,i)}}}),le="-",Ve=e=>{const o=Ne(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:s}=e;return{getClassGroupId:i=>{const d=i.split(le);return d[0]===""&&d.length!==1&&d.shift(),we(d,o)||_e(i)},getConflictingClassGroupIds:(i,d)=>{const a=n[i]||[];return d&&s[i]?[...a,...s[i]]:a}}},we=(e,o)=>{var i;if(e.length===0)return o.classGroupId;const n=e[0],s=o.nextPart.get(n),l=s?we(e.slice(1),s):void 0;if(l)return l;if(o.validators.length===0)return;const c=e.join(le);return(i=o.validators.find(({validator:d})=>d(c)))==null?void 0:i.classGroupId},be=/^\[(.+)\]$/,_e=e=>{if(be.test(e)){const o=be.exec(e)[1],n=o==null?void 0:o.substring(0,o.indexOf(":"));if(n)return"arbitrary.."+n}},Ne=e=>{const{theme:o,classGroups:n}=e,s={nextPart:new Map,validators:[]};for(const l in n)re(n[l],s,l,o);return s},re=(e,o,n,s)=>{e.forEach(l=>{if(typeof l=="string"){const c=l===""?o:fe(o,l);c.classGroupId=n;return}if(typeof l=="function"){if(Le(l)){re(l(s),o,n,s);return}o.validators.push({validator:l,classGroupId:n});return}Object.entries(l).forEach(([c,i])=>{re(i,fe(o,c),n,s)})})},fe=(e,o)=>{let n=e;return o.split(le).forEach(s=>{n.nextPart.has(s)||n.nextPart.set(s,{nextPart:new Map,validators:[]}),n=n.nextPart.get(s)}),n},Le=e=>e.isThemeGetter,Be=e=>{if(e<1)return{get:()=>{},set:()=>{}};let o=0,n=new Map,s=new Map;const l=(c,i)=>{n.set(c,i),o++,o>e&&(o=0,s=n,n=new Map)};return{get(c){let i=n.get(c);if(i!==void 0)return i;if((i=s.get(c))!==void 0)return l(c,i),i},set(c,i){n.has(c)?n.set(c,i):l(c,i)}}},oe="!",ne=":",Oe=ne.length,$e=e=>{const{prefix:o,experimentalParseClassName:n}=e;let s=l=>{const c=[];let i=0,d=0,a=0,m;for(let y=0;y<l.length;y++){let v=l[y];if(i===0&&d===0){if(v===ne){c.push(l.slice(a,y)),a=y+Oe;continue}if(v==="/"){m=y;continue}}v==="["?i++:v==="]"?i--:v==="("?d++:v===")"&&d--}const g=c.length===0?l:l.substring(a),z=je(g),L=z!==g,B=m&&m>a?m-a:void 0;return{modifiers:c,hasImportantModifier:L,baseClassName:z,maybePostfixModifierPosition:B}};if(o){const l=o+ne,c=s;s=i=>i.startsWith(l)?c(i.substring(l.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:i,maybePostfixModifierPosition:void 0}}if(n){const l=s;s=c=>n({className:c,parseClassName:l})}return s},je=e=>e.endsWith(oe)?e.substring(0,e.length-1):e.startsWith(oe)?e.substring(1):e,Fe=e=>{const o=Object.fromEntries(e.orderSensitiveModifiers.map(s=>[s,!0]));return s=>{if(s.length<=1)return s;const l=[];let c=[];return s.forEach(i=>{i[0]==="["||o[i]?(l.push(...c.sort(),i),c=[]):c.push(i)}),l.push(...c.sort()),l}},We=e=>({cache:Be(e.cacheSize),parseClassName:$e(e),sortModifiers:Fe(e),...Ve(e)}),qe=/\s+/,Ue=(e,o)=>{const{parseClassName:n,getClassGroupId:s,getConflictingClassGroupIds:l,sortModifiers:c}=o,i=[],d=e.trim().split(qe);let a="";for(let m=d.length-1;m>=0;m-=1){const g=d[m],{isExternal:z,modifiers:L,hasImportantModifier:B,baseClassName:y,maybePostfixModifierPosition:v}=n(g);if(z){a=g+(a.length>0?" "+a:a);continue}let G=!!v,S=s(G?y.substring(0,v):y);if(!S){if(!G){a=g+(a.length>0?" "+a:a);continue}if(S=s(y),!S){a=g+(a.length>0?" "+a:a);continue}G=!1}const O=c(L).join(":"),$=B?O+oe:O,P=$+S;if(i.includes(P))continue;i.push(P);const T=l(S,G);for(let x=0;x<T.length;++x){const F=T[x];i.push($+F)}a=g+(a.length>0?" "+a:a)}return a};function Ze(){let e=0,o,n,s="";for(;e<arguments.length;)(o=arguments[e++])&&(n=ye(o))&&(s&&(s+=" "),s+=n);return s}const ye=e=>{if(typeof e=="string")return e;let o,n="";for(let s=0;s<e.length;s++)e[s]&&(o=ye(e[s]))&&(n&&(n+=" "),n+=o);return n};function De(e,...o){let n,s,l,c=i;function i(a){const m=o.reduce((g,z)=>z(g),e());return n=We(m),s=n.cache.get,l=n.cache.set,c=d,d(a)}function d(a){const m=s(a);if(m)return m;const g=Ue(a,n);return l(a,g),g}return function(){return c(Ze.apply(null,arguments))}}const f=e=>{const o=n=>n[e]||[];return o.isThemeGetter=!0,o},ve=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,ke=/^\((?:(\w[\w-]*):)?(.+)\)$/i,He=/^\d+\/\d+$/,Je=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Xe=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ke=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Qe=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ye=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,V=e=>He.test(e),u=e=>!!e&&!Number.isNaN(Number(e)),I=e=>!!e&&Number.isInteger(Number(e)),me=e=>e.endsWith("%")&&u(e.slice(0,-1)),M=e=>Je.test(e),et=()=>!0,tt=e=>Xe.test(e)&&!Ke.test(e),ae=()=>!1,rt=e=>Qe.test(e),ot=e=>Ye.test(e),nt=e=>!t(e)&&!r(e),st=e=>_(e,Me,ae),t=e=>ve.test(e),R=e=>_(e,Se,tt),ee=e=>_(e,gt,u),lt=e=>_(e,Ce,ae),at=e=>_(e,ze,ot),it=e=>_(e,ae,rt),r=e=>ke.test(e),H=e=>N(e,Se),ct=e=>N(e,ht),dt=e=>N(e,Ce),ut=e=>N(e,Me),pt=e=>N(e,ze),bt=e=>N(e,xt,!0),_=(e,o,n)=>{const s=ve.exec(e);return s?s[1]?o(s[1]):n(s[2]):!1},N=(e,o,n=!1)=>{const s=ke.exec(e);return s?s[1]?o(s[1]):n:!1},Ce=e=>e==="position",ft=new Set(["image","url"]),ze=e=>ft.has(e),mt=new Set(["length","size","percentage"]),Me=e=>mt.has(e),Se=e=>e==="length",gt=e=>e==="number",ht=e=>e==="family-name",xt=e=>e==="shadow",wt=()=>{const e=f("color"),o=f("font"),n=f("text"),s=f("font-weight"),l=f("tracking"),c=f("leading"),i=f("breakpoint"),d=f("container"),a=f("spacing"),m=f("radius"),g=f("shadow"),z=f("inset-shadow"),L=f("drop-shadow"),B=f("blur"),y=f("perspective"),v=f("aspect"),G=f("ease"),S=f("animate"),O=()=>["auto","avoid","all","avoid-page","page","left","right","column"],$=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],P=()=>["auto","hidden","clip","visible","scroll"],T=()=>["auto","contain","none"],x=()=>[V,"px","full","auto",r,t,a],F=()=>[I,"none","subgrid",r,t],ie=()=>["auto",{span:["full",I,r,t]},r,t],W=()=>[I,"auto",r,t],ce=()=>["auto","min","max","fr",r,t],X=()=>[r,t,a],K=()=>["start","end","center","between","around","evenly","stretch","baseline"],E=()=>["start","end","center","stretch"],p=()=>[r,t,a],k=()=>["px",...p()],C=()=>["px","auto",...p()],A=()=>[V,"auto","px","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",r,t,a],b=()=>[e,r,t],Q=()=>[me,R],h=()=>["","none","full",m,r,t],w=()=>["",u,H,R],q=()=>["solid","dashed","dotted","double"],de=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ue=()=>["","none",B,r,t],pe=()=>["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",r,t],U=()=>["none",u,r,t],Z=()=>["none",u,r,t],Y=()=>[u,r,t],D=()=>[V,"full","px",r,t,a];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[M],breakpoint:[M],color:[et],container:[M],"drop-shadow":[M],ease:["in","out","in-out"],font:[nt],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[M],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[M],shadow:[M],spacing:[u],text:[M],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",V,t,r,v]}],container:["container"],columns:[{columns:[u,t,r,d]}],"break-after":[{"break-after":O()}],"break-before":[{"break-before":O()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...$(),t,r]}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:x()}],"inset-x":[{"inset-x":x()}],"inset-y":[{"inset-y":x()}],start:[{start:x()}],end:[{end:x()}],top:[{top:x()}],right:[{right:x()}],bottom:[{bottom:x()}],left:[{left:x()}],visibility:["visible","invisible","collapse"],z:[{z:[I,"auto",r,t]}],basis:[{basis:[V,"full","auto",r,t,d,a]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[u,V,"auto","initial","none",t]}],grow:[{grow:["",u,r,t]}],shrink:[{shrink:["",u,r,t]}],order:[{order:[I,"first","last","none",r,t]}],"grid-cols":[{"grid-cols":F()}],"col-start-end":[{col:ie()}],"col-start":[{"col-start":W()}],"col-end":[{"col-end":W()}],"grid-rows":[{"grid-rows":F()}],"row-start-end":[{row:ie()}],"row-start":[{"row-start":W()}],"row-end":[{"row-end":W()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ce()}],"auto-rows":[{"auto-rows":ce()}],gap:[{gap:X()}],"gap-x":[{"gap-x":X()}],"gap-y":[{"gap-y":X()}],"justify-content":[{justify:[...K(),"normal"]}],"justify-items":[{"justify-items":[...E(),"normal"]}],"justify-self":[{"justify-self":["auto",...E()]}],"align-content":[{content:["normal",...K()]}],"align-items":[{items:[...E(),"baseline"]}],"align-self":[{self:["auto",...E(),"baseline"]}],"place-content":[{"place-content":K()}],"place-items":[{"place-items":[...E(),"baseline"]}],"place-self":[{"place-self":["auto",...E()]}],p:[{p:k()}],px:[{px:k()}],py:[{py:k()}],ps:[{ps:k()}],pe:[{pe:k()}],pt:[{pt:k()}],pr:[{pr:k()}],pb:[{pb:k()}],pl:[{pl:k()}],m:[{m:C()}],mx:[{mx:C()}],my:[{my:C()}],ms:[{ms:C()}],me:[{me:C()}],mt:[{mt:C()}],mr:[{mr:C()}],mb:[{mb:C()}],ml:[{ml:C()}],"space-x":[{"space-x":p()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":p()}],"space-y-reverse":["space-y-reverse"],size:[{size:A()}],w:[{w:[d,"screen",...A()]}],"min-w":[{"min-w":[d,"screen","none",...A()]}],"max-w":[{"max-w":[d,"screen","none","prose",{screen:[i]},...A()]}],h:[{h:["screen",...A()]}],"min-h":[{"min-h":["screen","none",...A()]}],"max-h":[{"max-h":["screen",...A()]}],"font-size":[{text:["base",n,H,R]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[s,r,ee]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",me,t]}],"font-family":[{font:[ct,t,o]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,r,t]}],"line-clamp":[{"line-clamp":[u,"none",r,ee]}],leading:[{leading:[r,t,c,a]}],"list-image":[{"list-image":["none",r,t]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",r,t]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:b()}],"text-color":[{text:b()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...q(),"wavy"]}],"text-decoration-thickness":[{decoration:[u,"from-font","auto",r,R]}],"text-decoration-color":[{decoration:b()}],"underline-offset":[{"underline-offset":[u,"auto",r,t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:["px",...p()]}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",r,t]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",r,t]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...$(),dt,lt]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","space","round"]}]}],"bg-size":[{bg:["auto","cover","contain",ut,st]}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},I,r,t],radial:["",r,t],conic:[I,r,t]},pt,at]}],"bg-color":[{bg:b()}],"gradient-from-pos":[{from:Q()}],"gradient-via-pos":[{via:Q()}],"gradient-to-pos":[{to:Q()}],"gradient-from":[{from:b()}],"gradient-via":[{via:b()}],"gradient-to":[{to:b()}],rounded:[{rounded:h()}],"rounded-s":[{"rounded-s":h()}],"rounded-e":[{"rounded-e":h()}],"rounded-t":[{"rounded-t":h()}],"rounded-r":[{"rounded-r":h()}],"rounded-b":[{"rounded-b":h()}],"rounded-l":[{"rounded-l":h()}],"rounded-ss":[{"rounded-ss":h()}],"rounded-se":[{"rounded-se":h()}],"rounded-ee":[{"rounded-ee":h()}],"rounded-es":[{"rounded-es":h()}],"rounded-tl":[{"rounded-tl":h()}],"rounded-tr":[{"rounded-tr":h()}],"rounded-br":[{"rounded-br":h()}],"rounded-bl":[{"rounded-bl":h()}],"border-w":[{border:w()}],"border-w-x":[{"border-x":w()}],"border-w-y":[{"border-y":w()}],"border-w-s":[{"border-s":w()}],"border-w-e":[{"border-e":w()}],"border-w-t":[{"border-t":w()}],"border-w-r":[{"border-r":w()}],"border-w-b":[{"border-b":w()}],"border-w-l":[{"border-l":w()}],"divide-x":[{"divide-x":w()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":w()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...q(),"hidden","none"]}],"divide-style":[{divide:[...q(),"hidden","none"]}],"border-color":[{border:b()}],"border-color-x":[{"border-x":b()}],"border-color-y":[{"border-y":b()}],"border-color-s":[{"border-s":b()}],"border-color-e":[{"border-e":b()}],"border-color-t":[{"border-t":b()}],"border-color-r":[{"border-r":b()}],"border-color-b":[{"border-b":b()}],"border-color-l":[{"border-l":b()}],"divide-color":[{divide:b()}],"outline-style":[{outline:[...q(),"none","hidden"]}],"outline-offset":[{"outline-offset":[u,r,t]}],"outline-w":[{outline:["",u,H,R]}],"outline-color":[{outline:[e]}],shadow:[{shadow:["","none",g,bt,it]}],"shadow-color":[{shadow:b()}],"inset-shadow":[{"inset-shadow":["none",r,t,z]}],"inset-shadow-color":[{"inset-shadow":b()}],"ring-w":[{ring:w()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:b()}],"ring-offset-w":[{"ring-offset":[u,R]}],"ring-offset-color":[{"ring-offset":b()}],"inset-ring-w":[{"inset-ring":w()}],"inset-ring-color":[{"inset-ring":b()}],opacity:[{opacity:[u,r,t]}],"mix-blend":[{"mix-blend":[...de(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":de()}],filter:[{filter:["","none",r,t]}],blur:[{blur:ue()}],brightness:[{brightness:[u,r,t]}],contrast:[{contrast:[u,r,t]}],"drop-shadow":[{"drop-shadow":["","none",L,r,t]}],grayscale:[{grayscale:["",u,r,t]}],"hue-rotate":[{"hue-rotate":[u,r,t]}],invert:[{invert:["",u,r,t]}],saturate:[{saturate:[u,r,t]}],sepia:[{sepia:["",u,r,t]}],"backdrop-filter":[{"backdrop-filter":["","none",r,t]}],"backdrop-blur":[{"backdrop-blur":ue()}],"backdrop-brightness":[{"backdrop-brightness":[u,r,t]}],"backdrop-contrast":[{"backdrop-contrast":[u,r,t]}],"backdrop-grayscale":[{"backdrop-grayscale":["",u,r,t]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u,r,t]}],"backdrop-invert":[{"backdrop-invert":["",u,r,t]}],"backdrop-opacity":[{"backdrop-opacity":[u,r,t]}],"backdrop-saturate":[{"backdrop-saturate":[u,r,t]}],"backdrop-sepia":[{"backdrop-sepia":["",u,r,t]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":p()}],"border-spacing-x":[{"border-spacing-x":p()}],"border-spacing-y":[{"border-spacing-y":p()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",r,t]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[u,"initial",r,t]}],ease:[{ease:["linear","initial",G,r,t]}],delay:[{delay:[u,r,t]}],animate:[{animate:["none",S,r,t]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[y,r,t]}],"perspective-origin":[{"perspective-origin":pe()}],rotate:[{rotate:U()}],"rotate-x":[{"rotate-x":U()}],"rotate-y":[{"rotate-y":U()}],"rotate-z":[{"rotate-z":U()}],scale:[{scale:Z()}],"scale-x":[{"scale-x":Z()}],"scale-y":[{"scale-y":Z()}],"scale-z":[{"scale-z":Z()}],"scale-3d":["scale-3d"],skew:[{skew:Y()}],"skew-x":[{"skew-x":Y()}],"skew-y":[{"skew-y":Y()}],transform:[{transform:[r,t,"","none","gpu","cpu"]}],"transform-origin":[{origin:pe()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:D()}],"translate-x":[{"translate-x":D()}],"translate-y":[{"translate-y":D()}],"translate-z":[{"translate-z":D()}],"translate-none":["translate-none"],accent:[{accent:b()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:b()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",r,t]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",r,t]}],fill:[{fill:["none",...b()]}],"stroke-w":[{stroke:[u,H,R,ee]}],stroke:[{stroke:["none",...b()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["before","after","placeholder","file","marker","selection","first-line","first-letter","backdrop","*","**"]}},yt=De(wt),vt=["type"],kt={key:0,class:"mr-3 inline h-4 w-4"},It=se({__name:"Button",props:{loading:{type:Boolean},title:{},type:{},className:{}},emits:["click"],setup(e){return(o,n)=>(te(),J("button",{type:o.type,class:he(Re(yt)("flex-center rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600",o.className)),onClick:n[0]||(n[0]=s=>o.$emit("click"))},[o.loading?(te(),J("output",kt,n[1]||(n[1]=[j("svg",{"aria-live":"polite",class:"animate-spin text-white",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[j("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"#E5E7EB"}),j("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentColor"})],-1)]))):Ge("",!0),Pe(" "+xe(o.loading?"Loading...":o.title),1)],10,vt))}}),Ct={class:"relative w-full"},zt=["id","type","value","required"],Mt=["for"],Rt=se({__name:"Input",props:{label:{},modelValue:{},type:{},name:{},required:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:o}){const n=e,s=o,l=ge(n.modelValue);let c=null;const i=d=>{const a=d.target.value;l.value=a,c&&clearTimeout(c),c=setTimeout(()=>{s("update:modelValue",a)},500)};return Te(()=>n.modelValue,d=>{l.value=d}),(d,a)=>(te(),J("div",Ct,[j("input",{id:d.name,type:d.type,value:l.value,onInput:i,class:"peer w-full rounded-md border border-gray-300 p-2 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500",required:d.required,placeholder:" "},null,40,zt),j("label",{for:d.name,class:he(["absolute left-2 top-[-5px] z-20 bg-white px-1 text-sm text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-focus:left-2 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500",{"left-2 top-[-5px] text-xs text-blue-500":l.value}])},xe(d.label),11,Mt)]))}});export{Rt as _,It as a,At as b};
