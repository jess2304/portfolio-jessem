<script>
import articlesData from '../data/ArticlesData.json'

export default{
  data(){
    return {
      articles: articlesData
    }
  }
}
</script>


<template>
  <section class="articles" id="articles">
    <h1>Articles de Recherche publiés (en Data Science)</h1>
    <div class="articles-container">
      <div class="article-item" v-for="(article, index) in articles" :key="index">
        <h3>{{ article.annee }} : {{ article.type }}</h3>
        <p class="authors">{{ article.authors }}</p><br>
        <p class="title">{{ article.description }}</p>
        <a v-if="article.lien" v-bind:href="article.lien">Cliquez ici</a>
      </div>
    </div>
  </section>
</template> 

<style scoped>
.articles {
  position: relative;
  margin: 5vw auto; 
}

.articles-container {
  display: flex;
  overflow-x: hidden;
  gap: 2vw;
  flex-wrap: nowrap;
  padding: 0 5vw;
  overflow-y: hidden;
}

.article-item {
  flex: 0 0 auto;
  width: calc(50% - 1vw);
}

.article-item:hover {
  transform: scale(1.05);
}

h3, p {
  margin: 0.5vw 0;
  color: #333;
}

.article-item .title {
  color: #700404;
  font-weight: bold;
}

a {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #037dff;
  font-weight: bold;
  gap: 0.5vw;
}
</style>