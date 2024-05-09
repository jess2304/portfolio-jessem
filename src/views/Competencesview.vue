<script setup lang="ts">
import competencesData from "@/data/CompetencesData.json"
import { ref } from "vue"
const competences = ref(competencesData)
</script>

<template>
  <section class="d-flex flex-column align-items-center">
    <h1>Compétences</h1>
    <div class="competences-container">
      <div
        class="competence-item"
        v-for="(competence, index) in competences"
        :key="index"
      >
        <img :src="competence.icone" alt="Icone" class="competence-icone" />
        <h3>{{ competence.categorie }}</h3>
        <p class="m-1" v-for="comp in competence.competences" :key="comp">
          {{ comp }}
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.competences-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
  width: 80%;
  margin-top: 2vw;
  background: rgba(255, 255, 255, 0.8);
}

.competence-item {
  padding: 1.5vw;
  border-radius: 1vw;
  box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
}

.competence-icone {
  height: 5vw;
}

.competence-item:hover {
  transform: translateY(-1vw);
}
</style>
