<script setup lang="ts">
import certifications from "@/data/CertificationsData.json"
import Card from "primevue/card"
import Button from "primevue/button"
</script>
<template>
  <Card class="shadow-5">
    <template #title>
      <h1 class="text-center text-2xl font-bold mb-5">
        Certifications techniques
      </h1>
    </template>
    <template #content>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto"
      >
        <Card
          v-for="(certification, index) in certifications"
          :key="index"
          class="p-4 hover:shadow-2xl transition-transform transform hover:-translate-y-2 custom-card-background"
        >
          <template #title>
            <div class="flex flex-col gap-2">
              <div class="flex justify-center">
                <Button
                  v-if="certification.url"
                  severity="secondary"
                  class="text-sm w-full sm:w-auto"
                >
                  <a
                    :href="certification.url"
                    target="_blank"
                    class="flex items-center justify-center w-full"
                  >
                    Voir la certification
                    <i class="pi pi-external-link ml-2"></i>
                  </a>
                </Button>
              </div>
              <h3 class="text-lg font-semibold text-center">
                {{ certification.name }}
              </h3>
            </div>
          </template>
          <template #content>
            <p class="text-gray-700 text-center">
              {{ certification.organizer }}
            </p>
            <small class="text-gray-500 block text-center mt-2">{{
              certification.date
            }}</small>
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
