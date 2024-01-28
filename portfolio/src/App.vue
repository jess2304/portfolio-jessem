<script>
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    About,
  }
}
</script>


<template>
  <div id="app">
    <Navbar />
    <About />
  </div>
</template>
