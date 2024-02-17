<script>
export default {
    data() {
      return {
        langues: [
          { nom: "Arabe", niveau: "Langue maternelle" },
          { nom: "Français", niveau: "Courant" },
          { nom: "Anglais", niveau: "Intermédiaire supérieur B2 (TOEIC réussi)" },
          { nom: "Allemand", niveau: "Notions" }
        ]
      }
    }
  }
</script>

<template>
    <section id="langues">
      <h1>Langues</h1>
      <ul class="langues-list">
        <li v-for="(langue, index) in langues" :key="index" class="langue-item">
          <span class="langue-name">{{ langue.nom }}</span> - <span class="langue-level">{{ langue.niveau }}</span>
        </li>
      </ul>
    </section>
  </template>
    
<style scoped>  
.langues-list {
    list-style-type: none;
    padding: 0;
}
  
.langue-item {
    margin: 10px 0;
    font-size: 1em;
}
  
.langue-name {
    font-weight: bold;
}
  
.langue-level {
    font-style: italic;
}
</style>
  