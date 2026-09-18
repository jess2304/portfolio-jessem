<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { cinematicAssets as assets } from '@/config/cinematicAssets'

const cityReady = ref(false)
const finaleReady = ref(false)
let observer: IntersectionObserver | undefined
onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      if (entry.target.id === 'passage') cityReady.value = true
      if (entry.target.id === 'contact') finaleReady.value = true
      observer?.unobserve(entry.target)
    })
  }, { rootMargin: '100% 0px' })
  for (const id of ['passage', 'contact']) {
    const target = document.getElementById(id)
    if (target) observer.observe(target)
  }
})
onUnmounted(() => observer?.disconnect())
</script>

<template>
  <div class="cinematic-backdrop" aria-hidden="true">
    <picture class="environment environment-exterior">
      <source media="(max-width: 700px)" :srcset="assets.heroMobile" />
      <img :src="assets.heroExterior" alt="" width="1672" height="941" fetchpriority="high" />
    </picture>
    <div class="environment environment-city"><picture v-if="cityReady"><source media="(max-width: 700px)" :srcset="assets.cityMobile" /><img :src="assets.shiganshina" alt="" width="1280" height="720" decoding="async" /></picture></div>
    <div class="environment environment-finale"><picture v-if="finaleReady"><source media="(max-width: 700px)" :srcset="assets.finaleMobile" /><img :src="assets.finale" alt="" width="1672" height="941" decoding="async" /></picture></div>
    <div class="environment-grade" />
    <div class="environment-shade" />
    <div class="environment-fog"><img v-if="cityReady" :src="assets.fog" alt="" width="1672" height="941" decoding="async" /></div>
    <img class="environment-texture" :src="assets.texture" alt="" width="1672" height="941" decoding="async" />
  </div>
</template>

<style scoped>
.cinematic-backdrop { position: fixed; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; background: #171d18; }
.environment, .environment picture, .environment img { position: absolute; width: 100%; height: 100%; inset: 0; }
.environment img { object-fit: cover; object-position: 50% 50%; }
.environment-city, .environment-finale { opacity: 0; }
.environment-city img { object-position: 50% 42%; }
.environment-grade { position: absolute; inset: 0; background: linear-gradient(90deg, rgb(11 20 15 / 67%), rgb(18 25 16 / 19%) 74%), linear-gradient(0deg, rgb(12 19 13 / 88%), transparent 50%, rgb(9 19 15 / 28%)); }
.environment-shade { position: absolute; inset: 0; background: #111713; opacity: 0; }
.environment-fog { position: absolute; inset: -10%; opacity: 0; }
.environment-fog img { width: 100%; height: 100%; object-fit: cover; }
.environment-texture { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: .035; }
@media (max-width: 700px) { .environment-grade { background: linear-gradient(90deg, rgb(11 20 15 / 58%), rgb(18 25 16 / 25%)), linear-gradient(0deg, rgb(12 19 13 / 95%), transparent 65%, rgb(9 19 15 / 40%)); } .environment-exterior img { object-position: 52% center; } }
</style>
