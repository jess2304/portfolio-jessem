<script>
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import ProProfileView from './views/ProProfilePathView.vue'
import Formations from './components/Formation.vue'
import Competences from './components/Competences.vue'
import Projets from './components/Projets.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    About,
    ProProfileView,
    Formations,
    Competences,
    Projets,
  }
}
</script>


<template>
  <div id="app">
    <Navbar />
    <About />
    <ProProfileView />
    <Formations></Formations>
    <Competences></Competences>
    <Projets></Projets>
  </div>
</template>
