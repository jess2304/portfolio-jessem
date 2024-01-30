<script>
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import ProProfileView from './views/ProProfilePathView.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    About,
    ProProfileView,
  }
}
</script>


<template>
  <div id="app">
    <Navbar />
    <About />
    <ProProfileView />
  </div>
</template>
