<script>
import competencesData from '../data/CompetencesData.json'

export default {
  data() {
    return {
      competences: competencesData
    }
  }
}
</script>


<template>
  <section class="competences" id="competences">
    <h1>Compétences</h1>
    <div class="competences-container">
      <div class="competence-item" v-for="(competence, index) in competences" :key="index">
        <img :src="competence.icone" alt="Icone" class="competence-icone">
        <h3>{{ competence.categorie }}</h3>
        <p v-for="comp in competence.competences" :key="comp">{{ comp }}</p>
      </div>
    </div>
  </section>
</template>

  
<style scoped>
.competences {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2vw 0;
}

.competences-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
  width: 80%;
  margin-top: 2vw;
  background: rgba(255, 255, 255, 0.8);
}

.competence-item {
  padding: 1.5vw;
  border-radius: 1vw;
  box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
}

.competence-icone {
  width: auto;
  height: 5vw;
  margin-bottom: 1vw;
  object-fit: contain;
}

.competence-item:hover {
  transform: translateY(-1vw);
}

h2, h3 {
  color: #333;
}

p {
  color: #666;
  margin: 0.5vw 0;
}
</style>
