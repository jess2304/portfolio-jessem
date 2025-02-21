<script setup lang="ts">
import Card from "primevue/card"
import Button from "primevue/button"

// Aller vers un lien externe
const goToLink = (link: string) => {
  window.open(link, "_blank")
}
</script>
<template>
  <div>
    <div
      class="flex flex-column md:flex-row align-items-start justify-content-center w-full gap-4"
    >
      <div class="w-full md:w-full order-2 md:order-1">
        <Card class="shadow-2 p-0">
          <template #title>
            <div class="flex justify-content-between">
              <div>
                <p class="text-2xl font-bold mb-0">Jessem Ettaghouti</p>
              </div>
              <div class="flex">
                <Button
                  severity="secondary"
                  text
                  icon="pi pi-linkedin"
                  class="no-hover cursor-pointer"
                  @click="
                    goToLink(
                      'https://www.linkedin.com/in/jessem-ettaghouti-38142320a/'
                    )
                  "
                />
                <Button
                  severity="secondary"
                  text
                  icon="pi pi-facebook"
                  class="no-hover"
                  @click="
                    goToLink('https://www.facebook.com/jessem.ettaghouti.9')
                  "
                />
              </div>
            </div>
          </template>
          <template #subtitle>
            <p class="text-lg font-semibold mt-0">
              Data Scientist & Développeur Full Stack
            </p>
          </template>
          <template #content>
            <div>
              <p class="m-0">
                Je suis Data Scientist et Développeur Full Stack. J'aime
                travailler sur des projets qui mêlent analyse de données, IA et
                développement web. Toujours à la recherche de nouvelles idées et
                de nouveaux challenges, je m'efforce d'apprendre et de créer des
                solutions utiles, efficaces et performantes.
              </p>
              <div>
                <div
                  class="flex flex-wrap justify-content-around align-items-center gap-3"
                >
                  <div class="inline-flex align-items-center">
                    <p class="font-bold mr-1">Email:</p>
                    <a
                      href="mailto:jessemettaghouti@gmail.com"
                      class="text-primary font-semibold"
                      >jessemettaghouti@gmail.com</a
                    >
                  </div>
                  <div class="inline-flex align-items-center">
                    <p class="font-bold mr-1">Tél:</p>
                    <a
                      href="tel:+33671090148"
                      class="text-primary font-semibold"
                      >+33 6 71 09 01 48</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <!-- Section de l'image de profil -->
      <div
        class="w-full md:w-6 order-1 md:order-2 flex justify-center md:justify-end"
      >
        <img
          src="/assets/profile_photo.jpg"
          alt="Ettaghouti"
          class="w-full h-auto border-500"
        />
      </div>
    </div>
  </div>
</template>
<style></style>
