<script>
  import ProProfile from '../components/ProProfile.vue'
  import ProPath from '../components/ProPath.vue'
  
  export default {
    components: {
      ProProfile,
      ProPath
    }
  }
</script>

<template>
    <div class="profile-path-container" id="profil">
      <ProProfile />
      <ProPath />
    </div>
</template> 

<style scoped>
.profile-path-container {
  display: flex;
  flex-direction: column;
}

.experiences-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2vw;
}
</style>