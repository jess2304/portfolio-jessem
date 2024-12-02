<script setup lang="ts">
import NavBarComponent from "@/components/NavBarComponent.vue"
import AboutView from "@/views/Aboutview.vue"
import ProfessionalView from "@/views/Professionalview.vue"
import FormationView from "@/views/Formationview.vue"
import CompetencesView from "@/views/Competencesview.vue"
import ProjetsView from "@/views/Projetsview.vue"
import ArticlesdeRechercheView from "@/views/ArticlesdeRechercheview.vue"
import CertificationsView from "@/views/Certificationsview.vue"
import ScrollButtonComponent from "@/components/ScrollButtonComponent.vue"
</script>
<template>
  <div class="min-h-screen flex flex-column">
    <header>
      <NavBarComponent />
    </header>
    <main class="flex-grow-1 flex flex-column p-4">
      <AboutView id="about" class="mb-5" />
      <ProfessionalView id="profil" class="mb-5" />
      <FormationView id="formations" class="mb-5" />
      <CompetencesView id="competences" class="mb-5" />
      <ProjetsView id="projets" class="mb-5" />
      <ArticlesdeRechercheView id="articles" class="mb-5" />
      <CertificationsView id="certifications" />
      <ScrollButtonComponent />
    </main>
    <footer class="text-center p-1">
      <p class="text-sm">© 2024 Jessem Ettaghouti. Tous droits réservés.</p>
    </footer>
  </div>
</template>
<style>
footer {
  background-color: var(--p-menubar-background);
  color: var(--p-menubar-color);
}
</style>
