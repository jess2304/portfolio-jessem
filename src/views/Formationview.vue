<script setup lang="ts">
import formationData from "@/data/FormationData.json"
import { ref } from "vue"

const formations = ref(formationData)
const toggleFormation = (index: number) => {
  formations.value[index].detailsVisible =
    !formations.value[index].detailsVisible
  formations.value.forEach((f: any, i: any) => {
    if (i !== index) f.detailsVisible = false
  })
}
</script>
<template>
  <div class="container mt-5">
    <h1 class="mb-4">Formations</h1>
    <div
      v-for="(formation, index) in formations"
      :key="index"
      class="p-4 mb-3 bg-light rounded shadow-sm border-start border-primary border-4"
      @click="toggleFormation(index)"
      style="
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      "
    >
      <h2 class="text-dark">{{ formation.diplome }}</h2>
      <h3 class="text-secondary">{{ formation.nom }}</h3>
      <p class="text-muted">{{ formation.periode }}</p>
      <button
        class="btn btn-outline-primary mb-2"
        @click.stop="toggleFormation(index)"
      >
        Matières étudiées
      </button>
      <ul
        v-if="formation.detailsVisible"
        class="list-unstyled ps-4 mt-3"
        style="transition: all 0.5s ease"
      >
        <li
          v-for="matiere in formation.matieres"
          :key="matiere"
          class="text-muted mb-1"
        >
          {{ matiere }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>
