<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <h2>Mine Projekter</h2>
      <p>Her er nogle af mine tidligere projekter fra GitHub og GitLab</p>
      
      <div class="projects-grid">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="project-card"
        >
          <div class="project-image">
            <img :src="project.image" :alt="project.name" />
            <div class="project-overlay">
              <div class="project-links">
                <a v-if="project.html_url" :href="project.html_url" target="_blank" class="project-link">
                  <i class="fab fa-github"></i>
                </a>
                <a v-if="project.homepage" :href="project.homepage" target="_blank" class="project-link">
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="project-content">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description || 'Et spændende projekt udviklet med moderne teknologier.' }}</p>
            
            <div class="project-tech">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
            
            <div class="project-stats">
              <div class="stat">
                <i class="fas fa-star"></i>
                <span>{{ project.stargazers_count || 0 }}</span>
              </div>
              <div class="stat">
                <i class="fas fa-code-branch"></i>
                <span>{{ project.forks_count || 0 }}</span>
              </div>
              <div class="stat">
                <i class="fas fa-circle" :style="{ color: getLanguageColor(project.language) }"></i>
                <span>{{ project.language || 'Mixed' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        {
          id: 1,
          name: 'Håkan Media',
          description: 'En moderne portfolio website bygget med Vue.js og responsive design',
          homepage: 'https://www.alexanderhaakansson.dk/',
          image: new URL('../assets/images/www.alexanderhaakansson.dk_.png', import.meta.url).href,
          technologies: ['Webflow']
        },
        {
          id: 2,
          name: 'Fuld marketings side nuværende arbejdsplads',
          description: 'Jeg har designet og udarbejdet hele siden her, det er det eneste projekt jeg må vise frem fra min nuværende arbejdsplads',
          homepage: 'https://www.reportability.dk/',
          image: new URL('../assets/images/reportability.png', import.meta.url).href,
          language: 'Webflow',
          technologies: ['CSS', 'HTML', 'JS', 'Figma']
        },
        {
          id: 3,
          name: 'KM-træpleje',
          description: 'Mit første "rigtige" webprojekt fra min tid som webudvikler, hvor jeg byggede en komplet side fuld vanilla og på magisk vist fik det solgt',
          html_url: 'https://github.com/Danielsteenberg-bot/km_treepleje',
          homepage: 'https://xn--km-trpleje-h6a.dk/',
          image: new URL('../assets/images/km-snip.PNG', import.meta.url).href,
          language: 'Golang',
          technologies: ['Node.js', 'HTML', 'Vanilla CSS', 'Golang']
        },
        {
          id: 4,
          name: 'Rag forsøg',
          description: 'Første macinelearnings projekt, vi skulle lære en model at kode, og så evaluere den på forskellige måder',
          html_url: 'https://github.com/KevinNielsen00/ML-Gruppe1',
          image: new URL('../assets/images/code-img.gif', import.meta.url).href,
          language: 'Python',
          technologies: ['Python', 'numpy', 'Pandas', 'Torch']
        },
        {
          id: 5,
          name: 'CVR Data og sambeskatning',
          description: 'Lavede så system selv udfra et cvr nummer kunne finde alle selskaber i en sambeskatning. KODE GDPR LÅST',
          image: new URL('../assets/images/daniel.PNG', import.meta.url).href,
          language: 'Golang',
          technologies: ['Golang', 'MongoDB', 'Docker', 'GCP', 'Postman', 'React', 'NodeJS']
        },
        {
          id: 6,
          name: 'Pubsub Message queue',
          description: 'Lavede client libs og opsætning af komplet pubsub system i Go, node.js og c#, KODE GDPR LÅST',
          image: new URL('../assets/images/pubsub.png', import.meta.url).href,
          language: 'Pubsub',
          technologies: ['Golang', 'NodeJS', 'C#', 'GCP']
        }
      ]
    }
  },
  methods: {
    getLanguageColor(language) {
      const colors = {
        'JavaScript': '#F7DF1E',
        'TypeScript': '#3178C6',
        'Vue': '#4FC08D',
        'Go': '#00ADD8',
        'Python': '#3776AB',
        'C#': '#239120',
        'Pubsub': '#FFA500'
      }
      return colors[language] || '#666'
    }
  }
}
</script>

<style scoped>
.projects-section {
  padding: 4rem 0;
  background: #003140;
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
  color: #F3EFE0;
}

p {
  color: #F3EFE0;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  width: 50px;
  height: 50px;
  background: #22A39F;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: #1a8a87;
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
  text-align: left;
}

.project-content h3 {
  color: #F3EFE0;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.project-content p {
  color: rgba(243, 239, 224, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: rgba(34, 163, 159, 0.2);
  color: #22A39F;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid rgba(34, 163, 159, 0.3);
}

.project-stats {
  display: flex;
  gap: 1rem;
  color: rgba(243, 239, 224, 0.7);
  font-size: 0.9rem;
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>