<script setup lang="ts">
import competencesData from "@/data/CompetencesData.json"
import Card from "primevue/card"
</script>
<template>
  <Card class="shadow-5">
    <template #title>
      <h1 class="text-center text-2xl font-bold mb-5">Compétences</h1>
    </template>
    <template #content>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 md:w-10/12 mx-auto place-items-stretch"
      >
        <Card
          v-for="(competence, index) in competencesData"
          :key="index"
          class="h-full flex flex-col shadow-5 transition-transform transform hover:-translate-y-2 custom-card-background"
        >
          <template #header>
            <i
              :class="competence.icone"
              class="pi text-3xl p-2 block text-center"
            ></i>
          </template>
          <template #title>
            <h2 class="text-xl font-bold text-center">
              {{ competence.categorie }}
            </h2>
          </template>
          <template #content>
            <ul class="list-none p-0 flex-grow">
              <li
                v-for="(comp, compIndex) in competence.competences"
                :key="compIndex"
                class="text-sm my-1"
              >
                <i class="pi pi-check-circle mr-2 text-green-500"></i>
                {{ comp }}
              </li>
            </ul>
          </template>
        </Card>
      </div>
    </template>
  </Card>
</template>
<style scoped>
.custom-card-background {
  background: linear-gradient(to right, #f5f5f5, #e0e0e0);
  color: black;
  transition: background 0.3s ease, color 0.3s ease;
}

@media (prefers-color-scheme: dark) {
  .custom-card-background {
    background: linear-gradient(to right, #2c3e50, #1a252f);
    color: white;
  }
}
</style>
