<script setup lang="ts">
import type { Profile } from '@/types/content'
defineProps<{ profile: Profile }>()
</script>

<template>
  <section id="contact" class="finale-scene" aria-labelledby="finale-title" data-chapter="05">
    <div class="finale-content section-shell">
      <p class="eyebrow">05 — Au-delà des murs</p>
      <h2 id="finale-title">Et si on écrivait<br /><em>la suite ?</em></h2>
      <p class="finale-message">Une idée, un projet, une conversation.<br />Le prochain chapitre commence ici.</p>
      <a class="email-link" :href="`mailto:${profile.email}`">Parlons de votre projet <span aria-hidden="true">↗</span></a>
      <a class="email-address" :href="`mailto:${profile.email}`">{{ profile.email }}</a>
      <div class="finale-links">
        <a v-for="link in profile.links" :key="link.url" :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.label }} <span aria-hidden="true">↗</span></a>
        <a v-if="profile.cvUrl" :href="profile.cvUrl" target="_blank" rel="noopener noreferrer">CV <span aria-hidden="true">↗</span></a>
        <a :href="profile.phoneHref">{{ profile.phone }}</a>
      </div>
    </div>
    <footer><span>{{ profile.name }} <span class="footer-year">© {{ new Date().getFullYear() }}</span></span><a href="#about">Retour au départ <span aria-hidden="true">↑</span></a></footer>
  </section>
</template>

<style scoped>
.finale-scene { min-height: 110svh; position: relative; display: flex; flex-direction: column; justify-content: center; padding-top: 70px; }
.finale-content { padding-top: 70px; padding-bottom: 170px; }
h2 { font: 400 clamp(70px, 8.5vw, 132px)/.91 var(--display); letter-spacing: -.035em; margin: 26px 0 30px; text-shadow: 0 4px 35px rgb(12 21 11 / 45%); }
h2 em { color: #e1cfa2; font-weight: 400; }
.finale-message { color: #dbd9ca; font-size: 13px; line-height: 1.8; }
.email-link { display: inline-flex; align-items: center; justify-content: space-between; gap: 55px; border: 1px solid #d9d0ae; padding: 16px 24px; font-size: 12px; margin-top: 18px; background: rgb(14 22 14 / 45%); transition: background .2s; }
.email-link:hover { background: rgb(42 50 28 / 85%); }
.email-link span { font-size: 21px; }
.email-address { display: block; width: fit-content; font-size: 10px; letter-spacing: .05em; margin-top: 15px; color: #d6d5c1; }
.finale-links { display: flex; flex-wrap: wrap; gap: 24px; margin-top: 35px; font-size: 10px; }
.finale-links a { padding-block: 7px; border-bottom: 1px solid #9fa186; }
.finale-links span { margin-left: 10px; color: var(--accent); }
footer { position: absolute; bottom: 72px; left: var(--gutter); right: var(--gutter); border-top: 1px solid var(--line); padding-top: 24px; display: flex; justify-content: space-between; gap: 20px; font-size: 9px; }
.footer-year { color: #b5b9a6; margin-left: 15px; }
footer a { color: #d2d5c4; }
footer a span { margin-left: 15px; }
@media (max-width: 700px) { .finale-scene { min-height: 960px; } h2 { font-size: clamp(62px, 13vw, 90px); } .finale-links { gap: 16px; } footer { font-size: 8px; } .footer-year { display: block; margin: 6px 0 0; } .email-link { gap: 24px; } }
</style>
