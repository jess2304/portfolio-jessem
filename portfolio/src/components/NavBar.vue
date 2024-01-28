<script>
import NavBar from '../data/NavBarData.json'
import VueScrollTo from 'vue-scrollto'

export default {
  name: 'Navbar',
  data() {
    return {
      NavBar
    }
  },
  methods: {
    scrollToSection(id) {
      this.$scrollTo(id, 500);
    }
  }
}
</script>

<template>
    <nav>
        <ul>
            <li v-for="item in NavBar" :key="item.id">
                <a :href="item.id" @click.prevent="scrollToSection(item.id)">{{ item.name }}</a>
            </li>
        </ul>
    </nav>
</template>



<style scoped>
nav {
  background: #ffffff; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; 
  height: 60px; 
  display: flex;
  justify-content: center;
  align-items: center; 
  font-family: 'Helvetica Neue', sans-serif;
}

ul {
  list-style: none;
  display: flex;
  gap: 20px; 
  margin: 0;
  padding: 0;
}

li a {
  text-decoration: none;
  color: #333; 
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 5px;
  transition: color 0.3s, background-color 0.3s;
}

li a:hover,
li a:focus {
  color: #ffffff; 
  background-color: #007bff;
}

li a.active {
  background-color: #0056b3; 
  color: #ffffff;
}
</style>

  