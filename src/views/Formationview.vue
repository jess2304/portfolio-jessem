<script setup lang="ts">
import formationData from "@/data/FormationData.json"
import { ref } from "vue"
import Card from "primevue/card"
import Fieldset from "primevue/fieldset"
const formations = ref(formationData)
</script>
<template>
  <Card class="shadow-5">
    <template #title>
      <h1 class="text-center"><strong>Formations</strong></h1>
    </template>
    <template #content>
      <Fieldset
        v-for="(formation, index) in formations"
        :key="index"
        :legend="formation.diplome"
        toggleable
        collapsed
      >
        <ul>
          <li
            v-for="(matiere, index) in formation.matieres"
            :key="index"
            class="flex items-center space-x-2 p-2 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors duration-300"
          >
            <i class="pi pi-check-circle"></i>
            <span class="text-surface-700 dark:text-surface-200">{{
              matiere
            }}</span>
          </li>
        </ul>
      </Fieldset>
    </template>
  </Card>
</template>
<style></style>
