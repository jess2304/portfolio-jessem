<template>
    <div class="about-section" :data-aos="'fade-up'">
      <div class="info-block" :data-aos="'fade_right'">
        <h1>Jessem Ettaghouti</h1>
        <h2>Data Scientist & Développeur</h2>
        <h3>Mail : <a href="mailto:jessemettaghouti@gmail.com">jessemettaghouti@gmail.com</a></h3>
        <h3>Numéro de téléphone : <a href="tel:+33671090148">+33 6 71 09 01 48</a></h3>
        <div class="cv-download">
          <a href="/cv/CV_Jessem_Ettaghouti.pdf" download="CV_Jessem_Ettaghouti.pdf" class="download-cv-btn">Curriculum Vitae (CV)</a>
        </div>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/jessem-ettaghouti-38142320a/" target="_blank"><img src="../assets/linkedin_icon.png" alt="LinkedIn"></a>
          <a href="https://www.instagram.com/jessem_ett/" target="_blank"><img src="../assets/instagram_icon.png" alt="Instagram"></a>
          <a href="https://www.tiktok.com/@python_no_jutsu" target="_blank"><img src="../assets/tiktok_icon.png" alt="TikTok"></a>
          <a href="https://www.facebook.com/jessem.ettaghouti.9/" target="_blank"><img src="../assets/facebook_icon.png" alt="Facebook"></a>
        </div>
      </div>
      <div class="photo-block" :data-aos="'fade-left'">
        <img src="../assets/profile_photo.jpg" alt="Ettaghouti">
      </div> 
    </div>
  </template>
  
<style scoped>
  .about-section {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.38vw;
    gap: 1.38vw;
  }
  
  .info-block {
    flex-basis: 50%;
    border: 2px solid #007bff; 
    padding: 1.38vw;
    border-radius: 1.04vw; 
    box-shadow: 0 0.27vw 0.55vw rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }
  
  h2 {
    font-size: 1.8em; 
    color: #555; 
    margin-bottom: 1em;
  }
  
  .social-icons {
    justify-content: center;
    display: flex;
    gap: 0.69vw; 
  }
  
  .social-icons a img {
    width: 2.76vw;
    height: auto;
    transition: transform 0.3s ease;
  }
  
  .social-icons a:hover img {
    transform: scale(1.1); 
  }
  
  .photo-block {
    flex-basis: 50%;
    text-align: right;
  }
  
  .photo-block img {
    max-width: 100%;
    height: auto;
    border-radius: 0.69vw;
  }
  @keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fadeInOut {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.cv-download {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.download-cv-btn {
  display: inline-block;
  padding: 10px 20px;
  color: rgb(5, 2, 29);
  box-shadow: 0 0.28vw 0.56vw rgba(0, 0, 0, 0.2);
  text-decoration: none;
  border-radius: 5px;
  transition: transform 0.3s;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  scale: 0.8;
}

.download-cv-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}
</style>