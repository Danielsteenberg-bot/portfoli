<template>
  <section id="tech" class="tech-section">
    <div class="container">
      <h2>Teknologier jeg anvender</h2>
      <p>Dette er min nuværende værktøjs kasse</p>
      
      <div class="tech-grid">
        <div 
          v-for="tech in technologies" 
          :key="tech.name"
          class="tech-card"
        >
          <div class="tech-icon">
            <i :class="tech.icon" :style="{ color: tech.color }"></i>
          </div>
          <h3>{{ tech.name }}</h3>
          <p>{{ tech.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TechnologySection',
  data() {
    return {
      technologies: [
        {
          name: 'Go',
          icon: 'fab fa-golang',
          color: '#00ADD8',
          description: 'Backend development & microservices'
        },
        {
          name: 'Node.js',
          icon: 'fab fa-node-js',
          color: '#339933',
          description: 'Server-side JavaScript runtime'
        },
        {
          name: 'JavaScript',
          icon: 'fab fa-js-square',
          color: '#F7DF1E',
          description: 'Modern ES6+ & DOM manipulation'
        },
        {
          name: 'TypeScript',
          icon: 'fab fa-js-square',
          color: '#3178C6',
          description: 'Type-safe JavaScript development'
        },
        {
          name: 'React',
          icon: 'fab fa-react',
          color: '#61DAFB',
          description: 'Modern frontend library & ecosystem'
        },
        {
          name: 'C#',
          icon: 'fab fa-microsoft',
          color: '#239120',
          description: '.NET development & desktop apps'
        },
        {
          name: 'Python',
          icon: 'fab fa-python',
          color: '#3776AB',
          description: 'Data science & automation'
        },
        {
          name: 'Docker',
          icon: 'fab fa-docker',
          color: '#2496ED',
          description: 'Containerization & deployment'
        },
        {
          name: 'Kubernetes',
          icon: 'fas fa-dharmachakra',
          color: '#326CE5',
          description: 'Container orchestration & deployment'
        },
        {
          name: 'Google Cloud',
          icon: 'fab fa-google',
          color: '#4285F4',
          description: 'Cloud platform & services'
        }
      ]
    }
  }
}
</script>

<style scoped>
.tech-section {
  padding: 4rem 0;
  background: #F3EFE0;
  color: #222222;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #003140;
}

p {
  font-size: 1.2rem;
  margin-bottom: 3rem;
  color: #666;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.tech-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
}

.tech-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.tech-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.tech-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #003140;
}

.tech-card p {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-card {
    padding: 1.5rem;
  }
}
</style>