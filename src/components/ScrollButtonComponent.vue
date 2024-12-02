<script setup lang="ts">
import Button from "primevue/button"
import { ref, onMounted, onUnmounted, computed } from "vue"

const scrollY = ref(window.scrollY)

// Mettre à jour scrollY
const handleScroll = () => {
  scrollY.value = window.scrollY
}
// Propriété calculée pour savoir si on est en haut de la page
const isOnTop = computed(() => scrollY.value === 0)
// Aller en haut de la page
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
  handleScroll()
}

// Ajouter l'écouteur au montage et le retirer au démontage
onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>
<template>
  <Button
    rounded
    severity="contrast"
    icon="pi pi-arrow-up"
    id="scrollToTopBtn"
    @click="scrollToTop"
    :disabled="isOnTop"
  />
</template>
<style>
#scrollToTopBtn {
  position: fixed;
  bottom: 1%;
  right: 1%;
  z-index: 9999;
}
</style>
