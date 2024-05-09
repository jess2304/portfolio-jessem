<script setup lang="ts">
const langues = [
  { nom: "Arabe", niveau: "Langue maternelle" },
  { nom: "Français", niveau: "Courant" },
  { nom: "Anglais", niveau: "Intermédiaire supérieur B2 (TOEIC réussi)" },
]
</script>
<template>
  <section id="langues" class="container my-5">
    <h1 class="mb-4 text-center"><strong>Langues</strong></h1>
    <ul class="list-group">
      <li
        v-for="(langue, index) in langues"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span class="font-weight-bold">{{ langue.nom }}</span>
        <span class="font-italic text-secondary">{{ langue.niveau }}</span>
      </li>
    </ul>
  </section>
</template>
<style scoped></style>
