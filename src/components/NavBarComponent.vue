<script setup lang="ts">
import data from "@/data/NavBarData.json"

const scrollToSection = (selector) => {
  const section = document.querySelector(selector)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a
        class="navbar-brand"
        href="#"
        @click.prevent="scrollToSection('#about')"
        >It's Jessem Ettaghouti !</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navBarContent"
        aria-controls="navBarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navBarContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li v-for="item in data" :key="item.id" class="nav-item">
            <a
              class="nav-link cursor-pointer"
              href="#"
              @click.prevent="scrollToSection(item.id)"
              aria-current="page"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped></style>
