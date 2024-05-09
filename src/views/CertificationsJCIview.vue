<script setup lang="ts">
import certifications from "@/data/CertificationsJCIData.json"
</script>
<template>
  <section id="jci" class="container mt-5">
    <h1 class="text-center mb-4"><strong>Certifications JCI</strong></h1>
    <ul class="list-group">
      <li
        class="list-group-item shadow-sm p-3 mb-2 bg-white rounded"
        v-for="certification in certifications"
        :key="certification.name"
      >
        <strong>{{ certification.name }}</strong> -
        {{ certification.organizer }}
        <p class="mb-0">Formateur : {{ certification.trainer }}</p>
        <small class="text-muted">{{ certification.date }}</small>
      </li>
    </ul>
  </section>
</template>
<style scoped>
.list-group-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
</style>
