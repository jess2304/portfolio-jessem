<script>
import projetsData from '../data/ProjetsData.json'

export default{
  data(){
    return {
      projets: projetsData
    }
  },
  methods:{
    scrollLeft(){
      const container = this.$el.querySelector('.projets-container')
      container.scrollBy({ left: -container.offsetWidth, behavior: 'smooth' })
    },
    scrollRight(){
      const container = this.$el.querySelector('.projets-container')
      container.scrollBy({left: container.offsetWidth, behavior: 'smooth' })
    }
  }
}
</script>


<template>
  <section class="projets" id="projets">
    <h1>Projets Personnels</h1>
    <button @click="scrollLeft" class="scroll-button left"><img src="../assets/fleche_gauche_icon.png"></button>
    <div class="projets-container">
      <div class="projet-item" v-for="(projet, index) in projets" :key="index">
        <h3>{{ projet.titre }}</h3>
        <p>{{ projet.description }}</p>
        <a v-if="projet.lien" v-bind:href="projet.lien">Lien Github  <img src="../assets/github_icon.png" alt="github" id="github-icon"></a>
      </div>
    </div>
    <button @click="scrollRight" class="scroll-button right"><img src="../assets/fleche_droite_icon.png"></button>
  </section>
</template> 

<style scoped>
.projets {
  position: relative;
  width: 90%;
  margin: 5vw auto; 
}

.projets-container {
  display: flex;
  overflow-x: hidden;
  gap: 2vw;
  flex-wrap: nowrap;
  padding: 0 5vw;
  overflow-y: hidden;
}

.scroll-button {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  padding: 0;
  z-index: 30;
  width: 3vw;
  height: 3vw;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
}
.projet-item {
  flex: 0 0 auto;
  width: calc(50% - 1vw);
}

.projet-item:hover {
  transform: scale(1.05);
}

h3, p {
  margin: 0.5vw 0;
  color: #333;
}

p {
  color: #666;
}

a {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  gap: 0.5vw;
}

#github-icon {
  width: 1.5vw;
  height: auto;
}

.scroll-button img {
  width: 100%;
  height: auto;
}
.scroll-button.left {
  left: calc(-4vw - 1em);
}

.scroll-button.right {
  right: calc(-4vw - 1em);
}
</style>