<script setup lang="ts">
defineProps<{ index: number }>()
</script>

<template>
  <div class="project-visual" :class="`visual-${index % 4}`" aria-hidden="true">
    <svg v-if="index % 4 === 0" viewBox="0 0 500 360" fill="none">
      <path class="grid-line" d="M40 80H460M40 140H460M40 200H460M40 260H460M100 40V320M200 40V320M300 40V320M400 40V320" />
      <rect x="75" y="65" width="350" height="230" rx="7" fill="#1e2920" stroke="#7b8b6b" stroke-opacity=".5" transform="rotate(-6 250 180)" />
      <g transform="rotate(-6 250 180)"><circle cx="192" cy="182" r="64" stroke="#35452f" stroke-width="9" /><circle cx="192" cy="182" r="64" stroke="#b4bf8d" stroke-width="9" stroke-dasharray="290 402" stroke-linecap="round" transform="rotate(-90 192 182)" /><path d="M177 185l12 12 25-32" stroke="#d2d6b5" stroke-width="2" /><path d="M290 147h76M290 165h42M290 210h63M290 228h32" stroke="#7f916a" stroke-width="4" /><path d="M294 250l13-19 15 5 17-35 23-9" stroke="#b8c79a" stroke-width="2" /></g>
      <text x="250" y="336" text-anchor="middle">NEXTSHAPE — SUIVI &amp; PROGRESSION</text>
    </svg>
    <svg v-else-if="index % 4 === 1" viewBox="0 0 500 360" fill="none">
      <path class="grid-line" d="M40 80H460M40 140H460M40 200H460M40 260H460M100 40V320M200 40V320M300 40V320M400 40V320" />
      <rect x="62" y="83" width="148" height="178" rx="3" fill="#252e26" stroke="#7b8b6b" />
      <path d="M97 191c-23-42 5-60 23-41 9-27 34-30 36-4 27-12 45 10 24 30 27 29-3 48-24 29-18 30-44 18-38-7-8 6-15 1-21-7z" stroke="#d6d3b6" stroke-width="2" stroke-linecap="round" />
      <path d="M229 175h54m-10-7 10 7-10 7" stroke="#c4b382" />
      <g stroke="#a6b287"><circle cx="319" cy="130" r="7" /><circle cx="319" cy="175" r="7" /><circle cx="319" cy="220" r="7" /><circle cx="368" cy="151" r="7" /><circle cx="368" cy="196" r="7" /><circle cx="415" cy="175" r="7" /><path opacity=".45" d="m326 130 35 21m-35 24 35-24m-35 69 35-69m-35-21 35 66m-35-21 35 21m-35 24 35-24m14-45 33 24m-33 21 33-21" /></g>
      <text x="250" y="320" text-anchor="middle">DU DESSIN À LA PRÉDICTION</text>
    </svg>
    <svg v-else-if="index % 4 === 2" viewBox="0 0 500 360" fill="none">
      <g transform="translate(50 45)" stroke="#9baa83" stroke-width=".8"><path d="M10 219 58 148 70 73 149 22 219 51 301 13 351 92 390 170 326 257 229 239 151 274 80 240Z" /><path d="m10 219 105-38-57-33 102-17L70 73l145 45 4-67 52 80 30-118 5 167 45-88-80 39 119 39-84 10 20 77-97-18-14-121-55 13-45 50 36 93 78-35 77-59-35-49-56-13-100 63-35 59 80-109 69 108-114-58 100-63-66-96 11 109-102 17 12-75" /></g>
      <g fill="#ccd1ac"><circle cx="265" cy="163" r="3" /><circle cx="165" cy="226" r="3" /><circle cx="321" cy="176" r="3" /><circle cx="210" cy="176" r="3" /><circle cx="356" cy="225" r="3" /></g>
      <text x="250" y="341" text-anchor="middle">KMG2D — MAILLAGE &amp; MODÉLISATION</text>
    </svg>
    <svg v-else viewBox="0 0 500 360" fill="none">
      <rect x="65" y="65" width="370" height="240" rx="4" fill="#1e2920" stroke="#859577" />
      <path d="M65 90h370" stroke="#52634b" /><circle cx="81" cy="78" r="2" fill="#c4b382" /><circle cx="90" cy="78" r="2" fill="#8b9b72" /><circle cx="99" cy="78" r="2" fill="#657655" />
      <path d="M85 274 145 195 201 223 262 154 325 210 397 139 417 273Z" fill="#334530" /><path d="M85 274 168 226 223 249 284 212 345 240 417 209V285H85Z" fill="#56634a" />
      <text class="visual-monogram" x="99" y="186">JE.</text><path d="M101 204h76M101 215h44" stroke="#b3b895" />
      <text x="250" y="338" text-anchor="middle">UN PARCOURS À EXPLORER</text>
    </svg>
  </div>
</template>

<style scoped>
.project-visual { width: 100%; height: 100%; min-height: inherit; display: grid; place-items: center; background: radial-gradient(ellipse at 50% 50%, #384232, #242d23 75%); }
svg { width: 100%; max-width: 590px; }
.grid-line { stroke: #a4ab8c; opacity: .07; }
text { font-family: 'DM Sans', sans-serif; font-size: 8px; letter-spacing: 2px; fill: #a4ad90; }
.visual-monogram { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 68px; fill: #dfd9be; letter-spacing: -5px; }
.visual-1 { background: radial-gradient(ellipse at 50% 50%, #3a3c2c, #292d23 75%); }
.visual-2 { background: radial-gradient(ellipse at 50% 50%, #344139, #202d28 75%); }
</style>
