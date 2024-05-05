<script setup lang="ts">
import data from "@/data/NavBarData.json"
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">It's Jessem Ettaghouti !</a>
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
            <a class="nav-link" aria-current="page" :href="item.id">{{
              item.name
            }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped></style>
