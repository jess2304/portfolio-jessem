<script setup lang="ts">
import type { Profile } from '@/types/content'
defineProps<{ profile: Profile }>()
</script>

<template>
  <section id="passage" class="gate-scene" aria-labelledby="gate-title">
    <div class="gate-intro">
      <span class="gate-line" aria-hidden="true" />
      <p class="eyebrow">Franchir le premier mur</p>
      <h2 id="gate-title">La curiosité en guide.<br /><em>Le code pour avancer.</em></h2>
    </div>
    <div class="gate-profile section-shell">
      <div class="profile-label"><img :src="profile.portrait.src" :alt="profile.portrait.alt" width="76" height="76" loading="lazy" /><div><p class="eyebrow">Derrière le parcours</p><p>{{ profile.name }}</p></div></div>
      <p class="profile-bio">{{ profile.bio }}</p>
    </div>
  </section>
</template>

<style scoped>
.gate-scene { min-height: 130svh; display: flex; flex-direction: column; justify-content: space-between; padding-top: 17svh; }
.gate-intro { text-align: center; padding-inline: 24px; }
.gate-line { display: block; width: 1px; height: 70px; margin: 0 auto 30px; background: linear-gradient(transparent, var(--accent)); }
h2 { font: 400 clamp(42px, 5.4vw, 78px)/1.1 var(--display); letter-spacing: -.02em; text-shadow: 0 2px 24px #101610; }
h2 em { color: #d1c4a0; }
.gate-profile { display: grid; grid-template-columns: .85fr 1.15fr; gap: 65px; border-bottom: 1px solid var(--line); padding-top: 140px; padding-bottom: 90px; }
.profile-label { display: flex; gap: 20px; align-items: start; }
.profile-label img { width: 76px; height: 76px; object-fit: cover; border-radius: 50%; filter: saturate(.45); }
.profile-label .eyebrow { margin: 8px 0 4px; font-size: 11px; }
.profile-label p:last-child { font: 25px var(--display); }
.profile-bio { color: var(--muted); font-size: 16px; margin-bottom: 0; }
@media (max-width: 700px) { .gate-scene { min-height: 110svh; padding-top: 10svh; } .gate-profile { grid-template-columns: 1fr; gap: 24px; padding-block: 110px 70px; } .gate-intro h2 { font-size: 40px; } }
@media (prefers-reduced-motion: reduce) { .gate-scene { min-height: auto; padding-top: 90px; } }
</style>
