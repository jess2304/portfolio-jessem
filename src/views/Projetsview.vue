<script setup lang="ts">
import { ref } from "vue"
import Card from "primevue/card"
import Carousel from "primevue/carousel"
import projetsData from "@/data/ProjetsData.json"
const projets = ref(projetsData)
</script>

<template>
  <Card class="w-full md:w-10/12 shadow-5">
    <template #title>
      <h1 class="text-center text-2xl font-bold">Projets Personnels</h1>
    </template>
    <template #content>
      <Carousel
        :value="projets"
        :numVisible="1"
        :numScroll="1"
        :autoplayInterval="10000"
      >
        <template #item="slotProps">
          <div class="flex justify-center">
            <div class="bg-gray-100 p-5 rounded-lg w-full">
              <h3 class="text-xl font-bold mb-3 text-center">
                {{ slotProps.data.titre }}
              </h3>
              <p class="text-gray-700 mb-4 text-center">
                {{ slotProps.data.description }}
              </p>
              <div class="flex justify-center">
                <Button v-if="slotProps.data.lien" severity="secondary">
                  <a
                    :href="slotProps.data.lien"
                    target="_blank"
                    class="flex items-center"
                    >Lien GitHub <i class="pi pi-github ml-2"></i
                  ></a>
                </Button>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </template>
  </Card>
</template>
<style></style>
