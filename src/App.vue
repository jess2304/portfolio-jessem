<script setup lang="ts">
import NavBarComponent from "@/components/NavBarComponent.vue"
import Aboutview from "@/views/Aboutview.vue"
import ProfessionalView from "@/views/Professionalview.vue"
</script>
<template>
  <div class="container-fluid d-flex flex-column vh-100 p-0">
    <header class="mt-0">
      <NavBarComponent />
    </header>
    <main class="flex-grow-1 overflow-auto">
      <Aboutview id="about" />
      <ProfessionalView id="profil" />
    </main>
    <footer class="mt-auto bg-light">footer</footer>
  </div>
</template>
<style scoped></style>
