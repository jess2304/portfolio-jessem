<script setup lang="ts">
import type { Profile } from '@/types/content'
defineProps<{ profile: Profile }>()
</script>

<template>
  <section id="about" class="hero-scene" aria-labelledby="hero-title" data-chapter="00">
    <div class="hero-content">
      <p class="eyebrow hero-intro"><span /> Un parcours, au-delà des murs</p>
      <h1 id="hero-title" :aria-label="profile.name"><span>{{ profile.name.split(' ')[0] }}</span><span>{{ profile.name.split(' ').slice(1).join(' ') }}<span class="title-period">.</span></span></h1>
      <div class="hero-profession">
        <span class="profession-rule" />
        <p>{{ profile.title }}<span>{{ profile.specialties.join(' · ') }}</span></p>
      </div>
    </div>
    <div class="hero-bottom">
      <a class="enter-link" href="#passage"><span class="scroll-mark"><i /></span><span>Explorer le parcours<span class="small-caption">SCROLL POUR ENTRER</span></span></a>
      <p class="hero-note"><span>PROLOGUE — 00</span>Tout commence<br />par la curiosité.</p>
    </div>
    <span class="hero-side-note" aria-hidden="true">CONCEVOIR · APPRENDRE · ALLER PLUS LOIN</span>
  </section>
</template>

<style scoped>
.hero-scene { position: relative; min-height: 780px; height: 100svh; display: flex; align-items: center; padding: 110px var(--gutter) 150px; }
.hero-content { width: 100%; }
.hero-intro { display: flex; gap: 15px; align-items: center; color: #e0d6b8; margin-bottom: 28px; }
.hero-intro > span { height: 5px; width: 5px; background: var(--accent); transform: rotate(45deg); }
h1 { display: flex; flex-direction: column; font: 400 clamp(80px, 10.6vw, 170px)/.79 var(--display); letter-spacing: -.055em; margin: 0 0 35px -6px; text-shadow: 0 3px 30px rgb(0 0 0 / 10%); }
h1 > span + span { margin-top: 8px; }
.title-period { color: var(--accent); }
.hero-profession { display: flex; gap: 20px; align-items: flex-start; margin-top: 38px; }
.profession-rule { width: 43px; height: 1px; background: var(--accent); margin-top: 12px; }
.hero-profession p { font-size: 17px; line-height: 1.6; margin: 0; }
.hero-profession p > span { display: block; color: #cdcbbb; font-size: 11px; letter-spacing: .08em; margin-top: 4px; }
.hero-profession b { color: var(--accent); font-weight: 400; padding-inline: 8px; }
.hero-bottom { position: absolute; bottom: 78px; left: var(--gutter); right: var(--gutter); display: flex; justify-content: space-between; align-items: end; }
.enter-link { display: flex; align-items: center; gap: 17px; font-size: 11px; }
.small-caption { display: block; color: #bcbdaa; font-size: 8px; letter-spacing: .16em; margin-top: 6px; }
.scroll-mark { display: flex; justify-content: center; width: 23px; height: 36px; border: 1px solid #a7a88f; border-radius: 20px; }
.scroll-mark i { width: 1px; height: 9px; background: var(--accent); margin-top: 7px; transition: transform .25s; }
.enter-link:hover i { transform: translateY(10px); }
.hero-note { font: 400 25px/1.1 var(--display); margin: 0; }
.hero-note > span { display: block; font: 9px 'DM Sans', sans-serif; letter-spacing: .2em; color: var(--accent); margin-bottom: 12px; }
.hero-side-note { position: absolute; right: 30px; top: 36%; writing-mode: vertical-rl; font-size: 8px; letter-spacing: .28em; color: #c9cbbb; }
@media (max-width: 700px) {
  .hero-scene { min-height: 680px; padding-top: 100px; padding-bottom: 160px; }
  h1 { font-size: clamp(66px, 15vw, 105px); margin-left: -3px; }
  .hero-intro { font-size: 8px; letter-spacing: .15em; }
  .hero-profession { gap: 12px; }
  .profession-rule { width: 26px; }
  .hero-profession p { font-size: 15px; }
  .hero-profession p > span { font-size: 10px; }
  .hero-bottom { bottom: 74px; }
  .hero-note { font-size: 21px; }
  .hero-note > span { font-size: 7px; }
  .hero-side-note { display: none; }
}
@media (max-width: 380px) { .hero-note { display: none; } }
@media (min-width: 701px) and (max-height: 750px) { .hero-scene { min-height: 660px; } h1 { font-size: 110px; } }
</style>
