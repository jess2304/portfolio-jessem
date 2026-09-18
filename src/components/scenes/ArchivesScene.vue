<script setup lang="ts">
import type { Certification, Education, Publication } from '@/types/content'

defineProps<{
  education: readonly Education[]
  certifications: readonly Certification[]
  publications: readonly Publication[]
}>()
</script>

<template>
  <section id="archives" class="archives-scene chapter-section" data-chapter="04" aria-labelledby="archives-title">
    <div class="section-shell">
      <header class="archive-intro reveal">
        <div class="chapter-kicker">
          <span class="section-number">04 / ARCHIVES</span>
          <span class="eyebrow">Formation · Certifications · Recherche</span>
        </div>
        <h2 id="archives-title" class="section-heading">Le savoir<br />en héritage.</h2>
      </header>

      <div id="formations" class="archive-group education-group reveal">
        <div class="archive-label">
          <span aria-hidden="true">A.01</span>
          <h3>Formation</h3>
        </div>
        <div class="education-list">
          <details v-for="item in education" :key="item.id" class="education-entry">
            <summary>
              <span class="education-heading">
                <span class="institution">{{ item.institution }}</span>
                <span class="degree">{{ item.degree }}</span>
              </span>
              <span class="expand-mark" aria-hidden="true"></span>
            </summary>
            <div class="education-detail">
              <p class="detail-label">Enseignements</p>
              <ul>
                <li v-for="subject in item.subjects" :key="subject">{{ subject }}</li>
              </ul>
            </div>
          </details>
        </div>
      </div>

      <div id="certifications" class="archive-group reveal">
        <div class="archive-label">
          <span aria-hidden="true">A.02</span>
          <h3>Certifications techniques</h3>
        </div>
        <ul class="certification-list">
          <li v-for="certification in certifications" :key="certification.id">
            <a :href="certification.url" target="_blank" rel="noopener noreferrer" class="certification-link">
              <span class="certification-text">
                <span class="certification-title">{{ certification.name }}</span>
                <span class="archive-meta">{{ certification.organizer }} <span aria-hidden="true">/</span> {{ certification.date }}</span>
              </span>
              <span class="external-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </div>

      <div id="articles" class="archive-group reveal">
        <div class="archive-label">
          <span aria-hidden="true">A.03</span>
          <h3>Publications de recherche</h3>
        </div>
        <div class="publication-list">
          <article v-for="publication in publications" :key="publication.id" class="publication-entry">
            <div class="publication-topline">
              <span class="publication-type">{{ publication.type }}</span>
              <span class="publication-year">{{ publication.year }}</span>
            </div>
            <h4>
              <a :href="publication.url" target="_blank" rel="noopener noreferrer">
                {{ publication.title }} <span aria-hidden="true">↗</span>
              </a>
            </h4>
            <p class="publication-authors">{{ publication.authors }}</p>
            <a class="text-link publication-link" :href="publication.url" target="_blank" rel="noopener noreferrer" :aria-label="`Lire la publication ${publication.type} sur HAL`">
              Lire sur HAL <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.archives-scene {
  padding-block: 1rem;
  background: linear-gradient(180deg, transparent, rgba(18, 20, 17, 0.92) 20%, rgba(18, 20, 17, 0.92) 80%, transparent);
}

.archive-intro {
  margin-bottom: 4.5rem;
}

.chapter-kicker {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.3rem;
  margin-bottom: 1.8rem;
}

.archive-group {
  display: grid;
  grid-template-columns: minmax(10rem, 0.85fr) minmax(0, 2.1fr);
  gap: clamp(2rem, 6vw, 6rem);
  border-top: 1px solid var(--line);
  padding-block: 2.5rem 3.5rem;
  scroll-margin-top: 0;
}

.archive-label > span,
.publication-type,
.publication-year,
.detail-label {
  font-size: 0.64rem;
  letter-spacing: 0.12em;
  line-height: 1.7;
  text-transform: uppercase;
  color: var(--accent);
}

.archive-label h3 {
  max-width: 12rem;
  font-family: var(--font-display, Georgia, serif);
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.25;
  margin: 1rem 0 0;
}

.education-entry + .education-entry,
.certification-list li + li,
.publication-entry + .publication-entry {
  border-top: 1px solid var(--line);
}

.education-entry summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  list-style: none;
  padding-block: 1.5rem;
}

.education-entry summary::-webkit-details-marker {
  display: none;
}

.education-heading {
  display: grid;
  gap: 0.6rem;
}

.institution {
  font-size: 0.69rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1.65;
  color: var(--accent);
}

.degree,
.certification-title {
  font-size: 0.94rem;
  font-weight: 400;
  line-height: 1.8;
  color: var(--ink);
}

.expand-mark {
  position: relative;
  flex: 0 0 1.8rem;
  height: 1.8rem;
  border: 1px solid var(--line);
  border-radius: 50%;
}

.expand-mark::before,
.expand-mark::after {
  position: absolute;
  content: '';
  width: 0.55rem;
  height: 1px;
  left: 50%;
  top: 50%;
  background: var(--accent);
  transform: translate(-50%, -50%);
}

.expand-mark::after {
  transform: translate(-50%, -50%) rotate(90deg);
}

.education-entry[open] .expand-mark::after {
  display: none;
}

.education-entry summary:hover .degree,
.certification-link:hover .certification-title,
.publication-entry h4 a:hover {
  color: var(--accent);
}

.education-detail {
  padding: 0 2.6rem 1.8rem 0;
}

.detail-label {
  margin: 0 0 1rem;
}

.education-detail ul {
  display: grid;
  gap: 0.75rem;
  padding-left: 1rem;
  color: var(--muted);
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.9;
}

.education-detail li::marker {
  color: var(--accent);
}

.certification-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.certification-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding-block: 1.4rem;
  text-decoration: none;
}

.certification-text {
  display: grid;
  gap: 0.5rem;
}

.archive-meta {
  font-size: 0.75rem;
  color: var(--muted);
  line-height: 1.8;
}

.archive-meta > span {
  padding-inline: 0.4rem;
  color: var(--accent);
}

.external-arrow {
  color: var(--accent);
  font-size: 1.15rem;
}

.publication-entry {
  padding-block: 1.5rem 2rem;
}

.publication-topline {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1.3rem;
}

.publication-year {
  flex-shrink: 0;
  color: var(--muted);
}

.publication-entry h4 {
  font-family: var(--font-display, Georgia, serif);
  font-size: clamp(1.35rem, 2vw, 1.75rem);
  line-height: 1.45;
  font-weight: 400;
  margin: 1.1rem 0 0.9rem;
}

.publication-entry h4 a {
  color: var(--ink);
  text-decoration: none;
}

.publication-entry h4 span {
  font-size: 0.85em;
  color: var(--accent);
}

.publication-authors {
  font-size: 0.76rem;
  line-height: 1.9;
  color: var(--muted);
  margin: 0 0 1.1rem;
}

.publication-link {
  font-size: 0.74rem;
}

@media (max-width: 650px) {
  .archive-intro {
    margin-bottom: 2.5rem;
  }

  .archive-group {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
    padding-block: 2rem;
  }

  .archive-label {
    display: flex;
    align-items: baseline;
    gap: 1.2rem;
  }

  .archive-label h3 {
    margin: 0;
    font-size: 1.45rem;
    max-width: none;
  }

  .education-detail {
    padding-right: 0;
  }

  .degree,
  .certification-title {
    font-size: 0.9rem;
  }
}
</style>
