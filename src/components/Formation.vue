<script>
import formationData from "../data/FormationData.json"
export default {
  data() {
    return {
      formations: formationData,
    }
  },
  methods: {
    toggleFormation(index) {
      this.formations[index].detailsVisible =
        !this.formations[index].detailsVisible
      this.formations.forEach((f, i) => {
        if (i !== index) f.detailsVisible = false
      })
    },
  },
}
</script>

<template>
  <div class="formations-container" id="formations">
    <h1>Formations</h1>
    <div
      v-for="(formation, index) in formations"
      :key="index"
      class="formation"
      :data-aos="'fade-up'"
      :data-aos-delay="index * 100"
    >
      <h2>{{ formation.diplome }}</h2>
      <h3>{{ formation.nom }}</h3>
      <p>{{ formation.periode }}</p>
      <button @click="toggleFormation(index)">Matières étudiées</button>
      <ul v-if="formation.detailsVisible">
        <li v-for="matiere in formation.matieres" :key="matiere">
          {{ matiere }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.formations-container {
  display: flex;
  flex-direction: column;
  gap: 2vw;
  margin-top: 2vw;
}

.formation {
  cursor: pointer;
  transition: all 0.3s ease;
  background: linear-gradient(145deg, #e6e9f0, #eef1f5);
  border-radius: 1vw;
  padding: 2vw;
  box-shadow: 0 0.4vw 0.8vw rgba(0, 0, 0, 0.1);
  border-left: 0.5vw solid #007bff;
}

.formation:hover {
  transform: translateY(-0.5vw);
  box-shadow: 0 0.6vw 1.2vw rgba(0, 0, 0, 0.15);
}

.formation h1 .formation h2,
.formation h3 {
  color: #333;
  transition: color 0.3s ease;
}

.formation:hover h2,
.formation:hover h3 {
  color: #007bff;
}

ul {
  list-style: inside square;
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease;
  margin-top: 1vw;
  padding-left: 2vw;
}

.formation:hover ul {
  opacity: 1;
  max-height: 100vw;
}

ul li {
  margin: 0.5vw 0;
  color: #555;
  transition: color 0.3s ease;
}

.formation:hover ul li {
  color: #007bff;
}
</style>
