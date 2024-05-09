<script setup lang="ts">
import NavBarComponent from "@/components/NavBarComponent.vue"
import AboutView from "@/views/Aboutview.vue"
import ProfessionalView from "@/views/Professionalview.vue"
import FormationView from "@/views/Formationview.vue"
import CompetencesView from "@/views/Competencesview.vue"
import ProjetsView from "@/views/Projetsview.vue"
import ArticlesdeRechercheView from "@/views/ArticlesdeRechercheview.vue"
import CertificationsJCIView from "@/views/CertificationsJCIview.vue"
import LanguesView from "@/views/Languesview.vue"
</script>
<template>
  <div class="container-fluid d-flex flex-column vh-100 p-0">
    <header class="mt-0">
      <NavBarComponent />
    </header>
    <main class="flex-grow-1 overflow-auto">
      <AboutView id="about" />
      <ProfessionalView id="profil" />
      <FormationView id="formations" />
      <CompetencesView id="competences" />
      <ProjetsView id="projets" />
      <ArticlesdeRechercheView id="articles" />
      <CertificationsJCIView id="jci" />
      <LanguesView id="langues" />
    </main>
    <footer class="mt-auto bg-light">
      © 2024 Jessem Ettaghouti. Tous droits réservés.
    </footer>
  </div>
</template>
<style scoped></style>
