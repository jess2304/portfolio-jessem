<script setup lang="ts">
import articlesData from "../data/ArticlesData.json"
import { ref } from "vue"
const articles = ref(articlesData)
</script>
<template>
  <section class="articles text-center mt-5 mb-3" id="articles">
    <h1 class="text-center my-4">
      <strong>Articles de Recherche publiés (en Data Science)</strong>
    </h1>
    <div class="container">
      <div class="row g-4">
        <div class="col-md-6" v-for="(article, index) in articles" :key="index">
          <div class="article-item bg-white p-3 rounded shadow-sm">
            <h3 class="mb-2 text-primary">
              {{ article.annee }} : {{ article.type }}
            </h3>
            <p class="authors text-secondary mb-2">{{ article.authors }}</p>
            <p class="title text-dark font-weight-bold mb-3">
              {{ article.description }}
            </p>
            <a v-if="article.lien" :href="article.lien" class="btn btn-primary"
              >Cliquez ici</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.article-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
</style>
