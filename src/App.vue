<script setup lang="ts">
import NavBarComponent from "@/components/NavBarComponent.vue"
import AboutView from "@/views/Aboutview.vue"
import ProfessionalView from "@/views/Professionalview.vue"
import FormationView from "@/views/Formationview.vue"
import CompetencesView from "@/views/Competencesview.vue"
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
    </main>
    <footer class="mt-auto bg-light">footer</footer>
  </div>
</template>
<style scoped></style>
