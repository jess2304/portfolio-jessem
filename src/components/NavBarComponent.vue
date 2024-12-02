<script setup lang="ts">
import { ref } from "vue"
import Menubar from "primevue/menubar"
import data from "@/data/NavBarData.json"
import Button from "primevue/button"
const scrollToSection = (selector: string) => {
  const section = document.querySelector(selector)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}

// Structure des items pour PrimeVue Menubar
const menuItems = ref(
  data.map((item: Record<string, any>) => ({
    label: item.name,
    command: () => scrollToSection(item.id),
  }))
)
</script>
<template>
  <Menubar :model="menuItems" class="p-0">
    <template #start>
      <Button
        text
        label="It's Jessem Ettaghouti !"
        class="text-2xl font-bold no-hover"
        @click.prevent="scrollToSection('#about')"
      />
    </template>
  </Menubar>
</template>
<style>
.no-hover:hover {
  background-color: inherit !important;
}
</style>
