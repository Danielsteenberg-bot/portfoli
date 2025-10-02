<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="about-content">
        <div class="about-text">
          <h2>Om Mig</h2>
          <p class="intro">Jeg er en 28-årig udvikler fra Vestjylland</p>
          
          <div class="about-details">
            <p>
              Som passioneret full-stack udvikler elsker jeg at skabe innovative løsninger der gør en forskel. 
              Med erfaring inden for både frontend og backend udvikling, har jeg arbejdet med alt fra moderne 
              webapplikationer til komplekse mikroservice arkitekturer.Jeg nyder at fordybe mig og problemløse. 
              Mit mål er altid at levere kode af høj kvalitet der er både effektiv og "maintainable".
            </p>
            <p>
              Udover kodning er jeg også interesseret i cloud teknologier, DevOps praksis og database design. 
              Jeg tror på at en holistisk tilgang til udvikling skaber de bedste resultater.
            </p>
            
            <div class="skills-highlight">
              <h3>Mine specialer:</h3>
              <ul>
                <li>Full-stack webudvikling</li>
                <li>Cloud-native applikationer</li>
                <li>Mikroservice arkitektur</li>
                <li>Database design og optimering</li>
                <li>DevOps og containerization</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="about-image">
          <div class="image-placeholder">
            <img src="/src/assets/images/digselv.jpg" alt="Profilbillede" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
.about-section {
  padding: 4rem 0;
  background: #F3EFE0;
  color: #222222;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.about-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #003140;
}

.intro {
  font-size: 1.3rem;
  color: #22A39F;
  margin-bottom: 2rem;
  font-weight: 600;
}

.about-details p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #444;
}

.skills-highlight {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
}

.skills-highlight h3 {
  color: #003140;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.skills-highlight ul {
  list-style: none;
}

.skills-highlight li {
  padding: 0.5rem 0;
  color: #666;
  position: relative;
  padding-left: 1.5rem;
}

.skills-highlight li::before {
  content: '▶';
  color: #22A39F;
  position: absolute;
  left: 0;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  background: rgba(34, 163, 159, 0.1);
  border: 3px solid #22A39F;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .image-placeholder {
    width: 250px;
    height: 250px;
  }
}
</style>