<script>
import certifications from '../data/CertificationsJCIData.json';
  
export default {
    data() {
      return {
        certifications
      }
    }
  }
</script>

<template>
    <section id="jci">
      <h1>Certifications JCI</h1>
      <ul class="certifications-list">
        <li class="certification-item" v-for="certification in certifications" :key="certification.name">
          {{ certification.name }} - {{ certification.organizer }} - Formateur : {{ certification.trainer }} - {{ certification.date }}
        </li>
      </ul>
    </section>
  </template>
    
<style scoped>
.certifications-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.certification-item {
  margin-bottom: 15px;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease-in-out;
}

.certification-item:hover {
  transform: translateY(-5px); 
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
.certification-item p {
  color: #666;   
  margin: 5px 0;
  font-size: 0.95em;
}
</style>

  