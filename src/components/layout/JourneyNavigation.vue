<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const props = defineProps<{ progress: number; chapter: string }>()
const open = ref(false)
const menuButton = ref<HTMLButtonElement | null>(null)
const links = [
  { href: '#profil', label: 'Expérience', chapter: '01' },
  { href: '#competences', label: 'Compétences', chapter: '02' },
  { href: '#projets', label: 'Projets', chapter: '03' },
  { href: '#archives', label: 'Archives', chapter: '04' },
  { href: '#contact', label: 'Contact', chapter: '05' },
]
const current = computed(() => links.find((link) => link.chapter === props.chapter)?.label ?? 'Le départ')
const close = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && open.value) { open.value = false; menuButton.value?.focus() }
}
const navigate = (event: MouseEvent) => {
  open.value = false
  const href = (event.currentTarget as HTMLAnchorElement).hash
  const target = document.querySelector<HTMLElement>(href)
  if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }) }
}
onMounted(() => window.addEventListener('keydown', close))
onUnmounted(() => window.removeEventListener('keydown', close))
</script>

<template>
  <header class="journey-header" :class="{ 'has-scrolled': progress > .012, 'menu-open': open }">
    <a href="#about" class="wordmark" aria-label="Jessem Ettaghouti — retour au début"><span>JE<span class="wordmark-dot">.</span></span><span class="wordmark-label">JESSEM ETTAGHOUTI<br /><span>INGÉNIEUR LOGICIEL</span></span></a>
    <button ref="menuButton" class="menu-toggle" type="button" aria-controls="journey-menu" :aria-expanded="open" @click="open = !open"><span>{{ open ? 'Fermer' : 'Menu' }}</span><span class="menu-lines" aria-hidden="true"><i /><i /></span></button>
    <nav id="journey-menu" aria-label="Navigation principale" :class="{ open }">
      <a v-for="link in links" :key="link.href" :href="link.href" :class="{ 'contact-link': link.chapter === '05' }" :aria-current="chapter === link.chapter ? 'location' : undefined" @click="navigate">{{ link.label }}<span v-if="link.chapter === '05'" aria-hidden="true">↗</span></a>
    </nav>
  </header>
  <aside class="journey-status" aria-label="Progression du parcours">
    <span><span class="status-diamond" aria-hidden="true">◇</span><span class="current-chapter">{{ chapter }}</span><span class="chapter-divider" />{{ current }}</span>
    <div class="progress-track" role="progressbar" aria-label="Progression de lecture" :aria-valuenow="Math.round(progress * 100)" :aria-valuemin="0" :aria-valuemax="100"><span :style="{ transform: `scaleX(${progress})` }" /></div>
    <span class="progress-value">{{ String(Math.round(progress * 100)).padStart(2, '0') }}<span> / 100</span></span>
  </aside>
</template>

<style scoped>
.journey-header { position: fixed; inset: 0 0 auto; z-index: 30; height: 98px; margin-inline: var(--gutter); display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgb(231 228 207 / 24%); transition: height .3s; }
.journey-header::before { content: ''; position: absolute; inset: 0 calc(-1 * var(--gutter)); z-index: -1; background: linear-gradient(rgb(11 19 14 / 75%), rgb(11 19 14 / 0%)); transition: background .3s; }
.journey-header.has-scrolled { height: 76px; }
.journey-header.has-scrolled::before { background: rgb(17 23 19 / 96%); border-bottom: 1px solid var(--line); }
.wordmark { display: flex; gap: 20px; align-items: center; }
.wordmark > span:first-child { font: 400 45px/.9 var(--display); letter-spacing: -.07em; }
.wordmark-dot { color: var(--accent); }
.wordmark-label { font-size: 10px; letter-spacing: .15em; line-height: 1.7; }
.wordmark-label > span { font-size: 9px; letter-spacing: .1em; color: #bec1b0; }
nav { display: flex; align-items: center; gap: clamp(20px, 2.5vw, 43px); }
nav a { position: relative; font-size: 14px; padding-block: 12px; color: #d4d4c7; transition: color .2s; }
nav a:hover, nav a[aria-current] { color: var(--accent); }
nav a[aria-current]::after { content: ''; position: absolute; left: 0; right: 0; bottom: 4px; height: 1px; background: var(--accent); }
nav .contact-link { border: 1px solid rgb(230 224 203 / 50%); padding: 11px 18px; display: flex; gap: 24px; color: var(--ink); }
nav .contact-link[aria-current]::after { display: none; }
.contact-link span { font-size: 15px; }
.menu-toggle { display: none; }
.journey-status { position: fixed; z-index: 25; bottom: 0; left: 0; right: 0; height: 34px; padding-inline: var(--gutter); display: flex; align-items: center; gap: 32px; background: rgb(14 20 15 / 93%); border-top: 1px solid var(--line); font-size: 10px; letter-spacing: .1em; }
.journey-status > span:first-child { display: flex; align-items: center; min-width: 170px; }
.status-diamond { color: var(--accent); font-size: 15px; margin-right: 12px; }
.current-chapter { color: var(--accent); }
.chapter-divider { width: 18px; height: 1px; background: var(--line); margin-inline: 11px; }
.progress-track { height: 1px; background: var(--line); flex: 1; }
.progress-track > span { display: block; width: 100%; height: 1px; background: var(--accent); transform-origin: left; }
.progress-value { min-width: 54px; text-align: right; color: var(--accent); font-variant-numeric: tabular-nums; }
.progress-value > span { color: #9da38e; }
@media (max-width: 900px) {
  .wordmark-label { display: none; }
  nav { gap: 20px; }
}
@media (max-width: 700px) {
  .journey-header, .journey-header.has-scrolled { height: 76px; }
  .wordmark > span:first-child { font-size: 39px; }
  .wordmark-label { display: block; font-size: 9px; }
  .wordmark-label > span { font-size: 8px; }
  .menu-toggle { display: flex; gap: 12px; align-items: center; font-size: 14px; padding: 12px 0 12px 12px; }
  .menu-lines { width: 18px; display: grid; gap: 5px; }
  .menu-lines i { height: 1px; background: var(--ink); }
  nav { display: none; position: absolute; top: 76px; left: calc(-1 * var(--gutter)); right: calc(-1 * var(--gutter)); background: #151d17; padding: 20px var(--gutter) 35px; border-bottom: 1px solid var(--line); }
  nav.open { display: flex; flex-direction: column; align-items: stretch; gap: 4px; }
  nav a { font-size: 16px; padding-block: 13px; }
  nav .contact-link { margin-top: 12px; justify-content: space-between; }
  .menu-open::before { background: #151d17; }
  .journey-status { height: 30px; gap: 12px; font-size: 9px; letter-spacing: .06em; }
  .journey-status > span:first-child { min-width: 140px; }
  .progress-value { min-width: 48px; }
}
</style>
