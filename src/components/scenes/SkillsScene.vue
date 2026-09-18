<script setup lang="ts">
import type { SkillGroup } from '@/types/content'

defineProps<{ groups: readonly SkillGroup[] }>()
</script>

<template>
  <section id="competences" class="skills-scene chapter-section" data-chapter="02" aria-labelledby="skills-title">
    <div class="section-shell">
      <header class="skills-intro reveal">
        <div class="chapter-kicker">
          <span class="section-number">02 / ARSENAL</span>
          <span class="eyebrow">Compétences</span>
        </div>
        <h2 id="skills-title" class="section-heading">Les outils,<br />au service des idées.</h2>
      </header>

      <div class="skills-grid">
        <article v-for="(group, index) in groups" :key="group.id" class="skill-group reveal">
          <div class="group-topline" aria-hidden="true">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="registration-mark">+</span>
          </div>
          <h3>{{ group.category }}</h3>
          <ul>
            <li v-for="skill in group.skills" :key="skill.name">
              <span class="skill-marker" aria-hidden="true"></span>
              <span>{{ skill.name }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-scene {
  padding-block: 1rem;
  background: linear-gradient(180deg, transparent, rgba(17, 23, 19, 0.6) 30%, transparent);
}

.skills-intro {
  margin-bottom: 4rem;
}

.chapter-kicker {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.3rem;
  margin-bottom: 1.8rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
}

.skill-group {
  position: relative;
  padding: clamp(1.6rem, 4vw, 3rem);
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(21, 27, 23, 0.8);
  transition: background 220ms ease;
}

@media (hover: hover) {
  .skill-group:hover {
    background: rgba(38, 43, 32, 0.9);
  }
}

.group-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--accent);
  font-family: ui-monospace, monospace;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
}

.registration-mark {
  font-size: 1.1rem;
  font-weight: 300;
  opacity: 0.6;
}

h3 {
  max-width: 23rem;
  margin: 0 0 1.8rem;
  font-family: var(--font-display, Georgia, serif);
  font-weight: 400;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  line-height: 1.3;
  text-wrap: balance;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.85rem;
}

li {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.8;
}

.skill-marker {
  width: 0.3rem;
  height: 0.3rem;
  margin-top: 0.62rem;
  flex-shrink: 0;
  background: var(--accent);
  opacity: 0.75;
  transform: rotate(45deg);
}

@media (max-width: 650px) {
  .skills-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .skills-intro {
    margin-bottom: 2.5rem;
  }

  .group-topline {
    margin-bottom: 1.3rem;
  }

  h3 {
    max-width: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .skill-group {
    transition: none;
  }
}
</style>
