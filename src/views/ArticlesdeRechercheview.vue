<script setup lang="ts">
import articlesData from "@/data/ArticlesData.json"
import Card from "primevue/card"
import { ref } from "vue"
const articles = ref(articlesData)
</script>
<template>
  <Card class="shadow-5">
    <template #title>
      <h1 class="text-center text-2xl font-bold mb-5">
        Articles de Recherche publiés (en Data Science)
      </h1>
    </template>
    <template #content>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          v-for="(article, index) in articles"
          :key="index"
          class="shadow-5 transition-transform transform hover:-translate-y-2 custom-card-background"
        >
          <template #title>
            <h3 class="text-xl font-bold text-primary text-center">
              {{ article.annee }} : {{ article.type }}
            </h3>
          </template>
          <template #content>
            <p class="text-gray-600 text-sm mb-2 text-center">
              {{ article.authors }}
            </p>
            <p class="text-center text-dark font-semibold mb-4">
              {{ article.description }}
            </p>
            <div class="flex justify-center">
              <Button v-if="article.lien" severity="secondary">
                <a
                  :href="article.lien"
                  target="_blank"
                  class="flex items-center"
                  >Cliquez ici <i class="pi pi-external-link ml-2"></i
                ></a>
              </Button>
            </div>
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
