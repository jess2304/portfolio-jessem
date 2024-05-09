<script setup lang="ts">
import { ref } from "vue"
import projetsData from "@/data/ProjetsData.json"

const projets = ref(projetsData)
</script>

<template>
  <section>
    <h1 class="text-center my-4"><strong>Projets Personnels</strong></h1>
    <div
      id="carouselExampleControls"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(projet, index) in projets"
          :key="index"
          :class="{ active: index === 0 }"
        >
          <div class="d-flex justify-content-center">
            <div class="bg-light p-3 rounded shadow">
              <h3>{{ projet.titre }}</h3>
              <p>{{ projet.description }}</p>
              <a
                v-if="projet.lien"
                :href="projet.lien"
                class="btn btn-secondary"
                >Lien Github <i class="bi bi-github"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <button
        class="btn"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <i class="bi bi-arrow-left-circle-fill"></i>
      </button>
      <button
        class="btn"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <i class="bi bi-arrow-right-circle-fill"></i>
      </button>
    </div>
  </section>
</template>
<style scoped></style>
