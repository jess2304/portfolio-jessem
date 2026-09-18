<script setup lang="ts">
import { ref } from 'vue'
import { getContent } from '@/services/content'
import { useJourney } from '@/composables/useJourney'
import CinematicBackdrop from '@/components/cinematic/CinematicBackdrop.vue'
import WalkingCharacter from '@/components/cinematic/WalkingCharacter.vue'
import JourneyNavigation from '@/components/layout/JourneyNavigation.vue'
import HeroScene from '@/components/scenes/HeroScene.vue'
import GateScene from '@/components/scenes/GateScene.vue'
import ExperienceScene from '@/components/scenes/ExperienceScene.vue'
import SkillsScene from '@/components/scenes/SkillsScene.vue'
import ProjectsScene from '@/components/scenes/ProjectsScene.vue'
import ArchivesScene from '@/components/scenes/ArchivesScene.vue'
import FinaleScene from '@/components/scenes/FinaleScene.vue'

const content = getContent()
const shell = ref<HTMLElement | null>(null)
const { progress, chapter, reducedMotion } = useJourney(shell)
</script>

<template>
  <div ref="shell" class="cinematic-shell">
    <a class="skip-link" href="#profil">Aller au contenu professionnel</a>
    <CinematicBackdrop />
    <JourneyNavigation :progress="progress" :chapter="chapter" />
    <WalkingCharacter :progress="progress" :reduced-motion="reducedMotion" />
    <main id="main-content">
      <HeroScene :profile="content.profile" />
      <GateScene :profile="content.profile" />
      <div class="dossier-world">
        <ExperienceScene :experiences="content.experiences" />
        <SkillsScene :groups="content.skillGroups" />
        <ProjectsScene :projects="content.projects" />
        <ArchivesScene :education="content.education" :certifications="content.certifications" :publications="content.publications" />
      </div>
      <FinaleScene :profile="content.profile" />
    </main>
  </div>
</template>
