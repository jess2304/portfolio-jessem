<script setup lang="ts">
import { computed } from 'vue'
import { cinematicAssets } from '@/config/cinematicAssets'

const props = defineProps<{ progress: number; reducedMotion: boolean }>()
// A deterministic distance-based cycle reverses with scroll and never ticks at rest.
const frame = computed(() => props.reducedMotion ? 0 : Math.floor(props.progress * 240) % 4)
const visibility = computed(() => props.reducedMotion ? 0 : Math.min(1, props.progress * 45))
const position = computed(() => ({
  transform: `translate3d(calc(${4 + props.progress * 85}vw - ${props.progress * 36}px), 0, 0)`,
  opacity: visibility.value,
}))
</script>

<template>
  <div class="character-track" aria-hidden="true">
    <div class="walking-character" :style="position" :data-frame="frame" :data-progress="progress.toFixed(4)">
      <img v-for="(src, index) in cinematicAssets.walkFrames" :key="src" :src="src" alt="" width="540" height="960" decoding="async" :style="{ opacity: index === frame ? 1 : 0 }" />
    </div>
  </div>
</template>

<style scoped>
.character-track { position: fixed; inset: auto 0 33px; height: 142px; pointer-events: none; z-index: 2; }
.walking-character { width: 80px; height: 142px; position: relative; transform-origin: bottom center; }
.walking-character::after { content: ''; position: absolute; width: 70%; height: 4px; border-radius: 50%; bottom: 4px; left: 20%; background: rgb(0 0 0 / 35%); }
.walking-character img { width: 100%; height: 100%; position: absolute; inset: 0; object-fit: contain; }
@media (max-width: 700px) { .character-track { height: 100px; bottom: 29px; } .walking-character { width: 56px; height: 100px; } }
@media (prefers-reduced-motion: reduce) { .character-track { display: none; } }
</style>
