<script setup>
import { ref } from "vue"
import Timeline from "primevue/timeline"
import Card from "primevue/card"
import experiencesData from "@/data/ExperiencesData.json"
const experiences = ref(experiencesData)
</script>
<template>
  <Card class="shadow-5">
    <template #title>
      <h1 class="text-center">
        <strong>Expérience Professionnelle</strong>
      </h1>
    </template>
    <template #content>
      <Timeline
        :value="experiences"
        align="alternate"
        class="customized-timeline"
      >
        <template #marker="slotProps">
          <span
            class="flex items-center shadow-sm p-2 text-white"
            :style="{
              backgroundColor: slotProps.item.color,
              borderRadius: '50%',
            }"
          >
            <i :class="slotProps.item.icon"></i>
          </span>
        </template>
        <template #content="slotProps">
          <Card class="mt-2 shadow-5 p-4 custom-card-background">
            <template #title>
              <div class="">
                <strong>{{ slotProps.item.title }}</strong>
              </div>
            </template>
            <template #subtitle>
              <strong>{{ slotProps.item.date }}</strong>
            </template>
            <template #content>
              <p class="mb-2">
                <a
                  :href="slotProps.item.linkCompany"
                  class="no-underline text-primary font-bold"
                  target="_blank"
                >
                  {{ slotProps.item.company }}
                </a>
              </p>
              <p>{{ slotProps.item.description }}</p>
              <span
                v-for="(mission, index) in slotProps.item.missions"
                :key="index"
              >
                <a
                  :href="mission.linkClient"
                  class="no-underline text-primary font-bold"
                  target="_blank"
                >
                  {{ mission.client }}
                </a>
                ({{ mission.period }})
                <br />
                {{ mission.description }}
              </span>
            </template>
          </Card>
        </template>
      </Timeline>
    </template>
  </Card>
</template>
<style scoped lang="scss">
@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row;
      .p-timeline-event-content {
        text-align: left;
      }
    }
    .p-timeline-event-opposite {
      flex: 0;
    }
  }
}
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
