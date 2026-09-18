<script setup lang="ts">
import type { Experience } from '@/types/content'

defineProps<{ experiences: readonly Experience[] }>()
</script>

<template>
  <section id="profil" class="experience-scene chapter-section" data-chapter="01" aria-labelledby="experience-title">
    <div class="section-shell">
      <header class="chapter-intro reveal">
        <div class="chapter-kicker">
          <span class="section-number">01 / MISSIONS</span>
          <span class="eyebrow">Expérience professionnelle</span>
        </div>
        <h2 id="experience-title" class="section-heading">L’expérience<br />du terrain.</h2>
        <p class="chapter-caption">Du développement logiciel à l’intelligence artificielle.</p>
      </header>

      <div class="experience-list">
        <article v-for="(experience, index) in experiences" :key="experience.id" class="experience-entry reveal">
          <div class="experience-meta">
            <span class="dossier-number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="experience-date">{{ experience.date }}</span>
            <a class="company-link" :href="experience.companyUrl" target="_blank" rel="noopener noreferrer">
              {{ experience.company }} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div class="experience-body">
            <p class="entry-label">{{ experience.date.toLowerCase().includes('présent') ? 'Poste actuel' : 'Parcours' }}</p>
            <h3>{{ experience.title }}</h3>
            <p class="experience-description">{{ experience.description }}</p>
            <div class="missions">
              <div v-for="mission in experience.missions" :key="mission.id" class="mission">
                <h4 v-if="mission.client">
                  <a v-if="mission.clientUrl" :href="mission.clientUrl" target="_blank" rel="noopener noreferrer">
                    {{ mission.client }} <span aria-hidden="true">↗</span>
                  </a>
                  <template v-else>{{ mission.client }}</template>
                </h4>
                <p>{{ mission.description }}</p>
                <ul class="tags" aria-label="Technologies et méthodes utilisées">
                  <li v-for="technology in mission.technologies" :key="technology">{{ technology }}</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-scene {
  padding-block: 1rem;
}

.chapter-intro {
  max-width: 49rem;
  margin-bottom: 4.5rem;
}

.chapter-kicker {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.3rem;
  margin-bottom: 1.8rem;
}

.chapter-caption {
  margin-top: 1.6rem;
  color: var(--muted);
  font-size: 1rem;
}

.experience-entry {
  display: grid;
  grid-template-columns: minmax(10rem, 0.85fr) minmax(0, 2.1fr);
  gap: clamp(2rem, 6vw, 6rem);
  padding-block: 3.2rem;
  border-top: 1px solid var(--line);
}

.experience-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
}

.dossier-number {
  font-family: var(--font-display, Georgia, serif);
  font-size: clamp(3.2rem, 6vw, 5.2rem);
  line-height: 1;
  color: var(--accent);
  opacity: 0.7;
  font-weight: 400;
}

.experience-date,
.entry-label {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  line-height: 1.7;
}

.experience-date {
  margin-top: 0.5rem;
  color: var(--muted);
}

.company-link {
  max-width: 13rem;
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--ink);
  text-decoration: none;
}

.company-link span {
  color: var(--accent);
  padding-left: 0.35rem;
}

.company-link:hover,
.mission a:hover {
  color: var(--accent);
}

.entry-label {
  color: var(--accent);
  margin: 0 0 0.9rem;
}

h3 {
  font-family: var(--font-display, Georgia, serif);
  font-weight: 400;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  line-height: 1.2;
  margin: 0 0 1.2rem;
}

.experience-description {
  margin: 0 0 1.8rem;
  color: var(--muted);
  line-height: 1.8;
}

.missions {
  display: grid;
  gap: 1.1rem;
}

.mission {
  padding: clamp(1.25rem, 3vw, 1.8rem);
  border-left: 1px solid rgba(185, 170, 122, 0.4);
  background: linear-gradient(110deg, rgba(30, 35, 29, 0.94), rgba(24, 28, 25, 0.67));
}

.mission h4 {
  font-size: 0.91rem;
  line-height: 1.6;
  font-weight: 500;
  color: var(--ink);
  margin: 0 0 0.7rem;
}

.mission a {
  color: inherit;
  text-decoration: none;
}

.mission p {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.9;
  color: var(--muted);
}

.mission .tags {
  margin-top: 1.3rem;
}

@media (max-width: 650px) {
  .chapter-intro {
    margin-bottom: 2.5rem;
  }

  .experience-entry {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.6rem;
    padding-block: 2.4rem;
  }

  .experience-meta {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    column-gap: 1.3rem;
    row-gap: 0.2rem;
    align-items: center;
  }

  .dossier-number {
    grid-row: span 2;
    font-size: 3.4rem;
  }

  .experience-date {
    margin-top: 0;
  }

  .company-link {
    max-width: none;
  }
}
</style>
