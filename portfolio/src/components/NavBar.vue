<script>
import NavBar from '../data/NavBarData.json'
import VueScrollTo from 'vue-scrollto'

export default {
  name: 'Navbar',
  data() {
    return {
      NavBar,
      activeSection: null
    }
  },
  methods: {
    scrollToSection(id) {
      this.activeSection = !id
      this.$scrollTo(id, 500)
    }
  }
}
</script>


<template>
  <nav>
    <ul>
      <li v-for="item in NavBar" :key="item.id">
        <a :href="item.id" 
           :class="{ active: activeSection === item.id }" 
           @click.prevent="scrollToSection(item.id)">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>


<style scoped>
nav {
  background: #ffffff; 
  box-shadow: 0 0.135vw 0.27vw rgba(0, 0, 0, 0.1);
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; 
  height: 7vh; 
  display: flex;
  justify-content: center;
  align-items: center; 
  font-family: 'Helvetica Neue', sans-serif;
}

ul {
  list-style: none;
  display: flex;
  gap: 1.38vw; 
  margin: 0;
  padding: 0;
}

li a {
  text-decoration: none;
  color: #333; 
  padding: 0.69vw 1.04vw;
  border-radius: 0.345vw;
  transition: color 0.3s, background-color 0.3s;
}

li a:hover {
  color: #ffffff; 
  background-color: #007bff;
}
li a.active {
  background-color: #0056b3; 
  color: #ffffff;
}
</style>
