<script>
  export default {
    name: 'ParcoursPro'
  }
</script>

<template>
    <div class="experience-container" :data-aos="'fade-up'">
      <div class="experience">
        <h3>Consultant IT</h3>
        <p class="dates">10/2023 – Présent</p>
        <p class="company"><a href="https://abylsen.com/"><strong class="highlight">Abylsen STRA</strong></a> - Mission à <a href="https://eviden.com/fr-fr/"><strong class="highlight">Eviden Grenoble</strong></a></p>
        <p>Développement du côté Back-End d'une nouvelle application Web, en utilisant Python, Oracle SQL et le framework FastAPI.</p>
      </div>
      <div class="experience">
        <h3>Data Scientist</h3>
        <p class="dates">09/2022 – 09/2023</p>
        <p class="company"><a href="https://www.carool.tech/"><strong class="highlight">CaRool - Paris</strong></a></p>
        <p>Réalisation et amélioration des algorithmes pour l'analyse de la référence, l'usure, et la classification des pneumatiques, utilisant des techniques de Machine Learning, Big Data, Infrastructure as Code (IaC), et DevOps avec GitLab CI/CD.</p>
      </div>
      <div class="experience">
        <h3>Data Analyst</h3>
        <p class="dates">04/2022 - 09/2022</p>
        <p class="company"><a href="https://limos.fr/"><strong class="highlight">LIMOS - Clermont Ferrand</strong></a> - Stage (5 mois)<br></p>
        <p>Analyse et gestion des incertitudes pour des données liées au suivi de patients souffrant de douleurs chroniques, en utilisant des techniques de visualisation de données et d'apprentissage non supervisé avec Python, Pandas, Matplotlib, Numpy et Scikit-learn.</p>
      </div>
    </div>
</template>
  
<style scoped>
  .experience-container {
    margin: 2vw 0;
  }
  
  
  .experience {
    background-color: #f8f9fa;
    border-left: 0.4vw solid #007bff;
    margin-bottom: 1.2vw;
    padding: 1.2vw;
    border-radius: 0.8vw;
    box-shadow: 0.2vw 0.2vw 1vw rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

  }
  .experience:hover {
    box-shadow: 0 0.6vw 1vw rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
  
  .experience h3 {
    font-size: 1.6vw;
    color: #333;
  }
  
  .dates, .company {
    font-size: 1.2vw;
    color: #666;
  }
  
  .experience p {
    font-size: 1vw;
    color: #333;
    margin-top: 0.8vw;
  }
</style>
  