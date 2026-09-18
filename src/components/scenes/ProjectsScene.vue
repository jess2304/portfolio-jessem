<script setup lang="ts">
import type { Project } from '@/types/content'
import ProjectVisual from '@/components/ui/ProjectVisual.vue'
defineProps<{ projects: readonly Project[] }>()
</script>

<template>
  <section id="projets" class="section-shell projects-scene" aria-labelledby="projects-title" data-chapter="03">
    <header class="projects-heading reveal"><div><p class="eyebrow">03 — Expéditions / Projets personnels</p><h2 id="projects-title" class="section-heading">Des idées.<br /><em>Du code. Du concret.</em></h2></div><p>Explorer, expérimenter,<br />et donner forme aux idées.</p></header>
    <div class="projects-list">
      <article v-for="(project, index) in projects" :key="project.id" class="project-card reveal" :aria-labelledby="`project-title-${project.id}`">
        <div class="project-artwork"><img v-if="project.screenshot" :src="project.screenshot.src" :alt="project.screenshot.alt" loading="lazy" width="800" height="600" /><ProjectVisual v-else :index="index" /><span class="project-ref" aria-hidden="true">EXPÉDITION / {{ String(index + 1).padStart(2, '0') }}</span></div>
        <div class="project-copy"><span class="eyebrow">Projet {{ String(index + 1).padStart(2, '0') }}</span><h3 :id="`project-title-${project.id}`">{{ project.title }}</h3><p>{{ project.description }}</p><ul v-if="project.stack?.length" class="tags"><li v-for="tech in project.stack" :key="tech">{{ tech }}</li></ul><p v-if="project.architecture" class="project-architecture">{{ project.architecture }}</p><div class="project-links"><a v-if="project.githubUrl" class="text-link" :href="project.githubUrl" target="_blank" rel="noopener noreferrer">Explorer le code <span aria-hidden="true">↗</span><span class="sr-only"> — {{ project.title }}</span></a><a v-if="project.demoUrl" class="text-link" :href="project.demoUrl" target="_blank" rel="noopener noreferrer">Voir la démo <span aria-hidden="true">↗</span></a></div></div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects-heading { display: flex; justify-content: space-between; align-items: end; gap: 36px; }
.projects-heading > p { color: var(--muted); font-size: 12px; margin-bottom: 60px; }
.section-heading em { font-weight: 400; color: #c7ba96; }
.projects-list { display: grid; gap: 50px; }
.project-card { display: grid; grid-template-columns: 1.1fr 1fr; min-height: 360px; border: 1px solid var(--line); background: #181e19; }
.project-card:nth-child(even) { grid-template-columns: 1fr 1.1fr; }
.project-card:nth-child(even) .project-artwork { order: 2; }
.project-artwork { position: relative; overflow: hidden; min-height: 320px; background: #293026; }
.project-artwork > img { width: 100%; height: 100%; object-fit: cover; }
.project-ref { position: absolute; top: 24px; left: 26px; color: #b9bd9f; font-size: 8px; letter-spacing: .18em; }
.project-copy { align-self: center; padding: clamp(28px, 3.3vw, 48px); }
.project-copy > .eyebrow { font-size: 8px; }
h3 { font: 400 clamp(29px, 2.6vw, 40px)/1.08 var(--display); margin-block: 20px; letter-spacing: -.02em; }
.project-copy > p { font-size: 12px; color: var(--muted); }
.project-links { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 23px; }
.project-links a { font-size: 10px; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
@media (max-width: 700px) { .projects-heading { display: block; } .projects-heading > p { margin-bottom: 30px; } .project-card, .project-card:nth-child(even) { grid-template-columns: 1fr; } .project-card:nth-child(even) .project-artwork { order: 0; } .project-artwork { min-height: 260px; } .projects-list { gap: 30px; } }
</style>
