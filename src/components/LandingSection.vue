<template>
  <section id="landing" class="landing-section">
    <div class="rain-container">
      <div 
        v-for="(drop, index) in rainDrops" 
        :key="index"
        class="rain-drop"
        :style="drop.style"
      >
        <img :src="drop.image" :alt="'Rain drop ' + index" />
      </div>
    </div>
    
    <div class="container">
      <h1 class="hero-title">Daniel Steenberg</h1>
      <h2 class="hero-subtitle">Full-Stack Developer</h2>
      <p class="hero-description">
        Den moderne udvikler fra Vestjylland.
      </p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">Se Mine Projekter</a>
        <a href="#contact" class="btn btn-outline">Kontakt Mig</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingSection',
  data() {
    return {
      rainDrops: [],
      images: [
        {
          src: '/src/assets/images/family.jpg',
          sizeRange: [90, 120] // Biggest - family image
        },
        {
          src: '/src/assets/images/digselv.jpg',
          sizeRange: [70, 90] // Medium - profile image
        },
        {
          src: '/src/assets/images/hamselv.png',
          sizeRange: [60, 80] // Smaller - hamselv image
        }
      ]
    }
  },
  mounted() {
    this.createRainDrops()
    this.startRainAnimation()
  },
  beforeUnmount() {
    if (this.rainInterval) {
      clearInterval(this.rainInterval)
    }
  },
  methods: {
    createRainDrops() {
      const dropCount = 8 // Not too many drops
      
      for (let i = 0; i < dropCount; i++) {
        this.rainDrops.push(this.createRainDrop())
      }
    },
    
    createRainDrop() {
      const randomImageConfig = this.images[Math.floor(Math.random() * this.images.length)]
      const startPosition = Math.random() * 100
      const animationDuration = 15 + Math.random() * 10 // 15-25 seconds (slow)
      const delay = Math.random() * 10 // Random start delay
      
      // Use different size ranges for different images
      const minSize = randomImageConfig.sizeRange[0]
      const maxSize = randomImageConfig.sizeRange[1]
      const size = minSize + Math.random() * (maxSize - minSize)
      
      return {
        image: randomImageConfig.src,
        style: {
          left: startPosition + '%',
          animationDuration: animationDuration + 's',
          animationDelay: delay + 's',
          width: size + 'px',
          height: size + 'px'
        }
      }
    },
    
    startRainAnimation() {
      // Occasionally add new drops
      this.rainInterval = setInterval(() => {
        if (this.rainDrops.length < 12) { // Max 12 drops
          this.rainDrops.push(this.createRainDrop())
        }
        
        // Remove old drops occasionally
        if (this.rainDrops.length > 8) {
          this.rainDrops.splice(0, 1)
        }
      }, 8000) // Add new drop every 8 seconds
    }
  }
}
</script>

<style scoped>
.landing-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #003140 0%, #22A39F 100%);
  text-align: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
}

.rain-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.rain-drop {
  position: absolute;
  top: -150px;
  border-radius: 50%;
  opacity: 0.25;
  animation: fall linear infinite;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(255, 255, 255, 0.1);
}

.rain-drop img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

@keyframes fall {
  0% {
    transform: translateY(-150px);
    opacity: 0;
  }
  10% {
    opacity: 0.25;
  }
  90% {
    opacity: 0.25;
  }
  100% {
    transform: translateY(calc(100vh + 150px));
    opacity: 0;
  }
}

.container {
  max-width: 800px;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #F3EFE0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #22A39F;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #F3EFE0;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  z-index: 3;
}

.btn-primary {
  background: #22A39F;
  color: white;
  border-color: #22A39F;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  background: #1a8a87;
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.btn-outline {
  background: rgba(255, 255, 255, 0.1);
  color: #22A39F;
  border-color: #22A39F;
  backdrop-filter: blur(10px);
}

.btn-outline:hover {
  background: #22A39F;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .rain-drop {
    /* Scale down sizes for mobile but maintain proportions */
    transform: scale(0.6) !important;
  }
}
</style>