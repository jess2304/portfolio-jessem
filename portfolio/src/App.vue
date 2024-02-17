<script>
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import ProProfileView from './views/ProProfilePathView.vue'
import Formations from './components/Formation.vue'
import Competences from './components/Competences.vue'
import Projets from './components/Projets.vue'
import Articles from './components/ArticlesdeRecherche.vue'
import CertificationsJCI from './components/CertificationsJCI.vue'
import Langues from './components/Langues.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    About,
    ProProfileView,
    Formations,
    Competences,
    Projets,
    Articles,
    CertificationsJCI,
    Langues,
  },
  methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
}
</script>

<template>
  <div id="app">
    <Navbar />
    <About />
    <ProProfileView />
    <Formations />
    <Competences />
    <Projets />
    <Articles />
    <CertificationsJCI />
    <Langues />
    
    <footer class="site-footer">
      <div class="footer-content">
        <p>&copy; 2024 Jessem Ettaghouti. Tous droits réservés.</p>
      </div>
      <button @click="scrollToTop" class="scroll-to-top"><img src="./assets/arrow-top-icon.png" style="scale:0.5;"/></button>
    </footer>
  </div>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid #aaa;
  color: #000000;
  text-align: center;
  padding: 20px;
  position: relative;
}

.footer-content {
  margin-bottom: 20px;
}

.scroll-to-top {
    position: fixed;
    bottom: 2.78vw;
    right: 3.47vw;
    width: 3.47vw;
    height: 3.47vw;
    border-radius: 50%;
    box-shadow: 0 0.28vw 0.56vw rgba(0, 0, 0, 0.2);
    cursor: pointer;
    border: none;
    outline: none;
    transition:transform 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.scroll-to-top:hover {
    box-shadow: 0 0.42vw 0.83vw rgba(0, 0, 0, 0.3);
    transform: translateY(-0.35vw);
}

</style>
