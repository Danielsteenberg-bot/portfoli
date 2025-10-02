<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2>Min Karrierevej</h2>
      <p>Fra uddannelse til professionel udvikler</p>
      
      <div class="career-timeline">
        <div class="timeline-section">
          <h3 class="timeline-section-title">Uddannelse</h3>
          
          <div class="timeline-item">
            <div class="timeline-marker education"></div>
            <div class="timeline-content">
              <h4>Frontend Udvikler</h4>
              <div class="timeline-details">
                <span class="institution">Medieskolerne Viborg</span>
                <span class="dates">22.09.20 - 02.11.22</span>
              </div>
              <p class="timeline-description">
                Komplet frontend uddannelse med fokus på moderne webudvikling, 
                brugeroplevelse og responsive design.
              </p>
            </div>
          </div>
        </div>

        <div class="timeline-section">
          <h3 class="timeline-section-title">Karriere</h3>
          
          <div class="timeline-item">
            <div class="timeline-marker work"></div>
            <div class="timeline-content">
              <h4>Software Udvikler</h4>
              <div class="timeline-details">
                <span class="institution">Mercantec (Uddannelse)</span>
                <span class="dates">01.11.22 - Igangværende</span>
              </div>
              <p class="timeline-description">
                Avanceret softwareudvikling med fokus på full-stack løsninger. På grund af min tid som frontend udvikler bruger jeg mere tid end mine klassekammerater på UI/UX og frontend udvikling.
              </p>
            </div>
          </div>

          <div class="timeline-item sub-timeline">
            <div class="timeline-marker job"></div>
            <div class="timeline-content">
              <h4>Junior Software Developer</h4>
              <div class="timeline-details">
                <span class="institution">Reportability ApS</span>
                <span class="dates">Igangværende</span>
              </div>
              <p class="timeline-description">
                Arbejder med Go-baserede mikroservices, cloud infrastruktur på GCP, 
                og moderne frontend teknologier. Det gode ved at være i en mindre virksomhed er at man få lov at lave alt, alt fra frontend opgaver til tunge komplicerede backend opgaver. 
              </p>
              <div class="job-highlights">
                <span class="highlight">Full-stack udvikling</span>
                <span class="highlight">GCP Cloud Services</span>
                <span class="highlight">Mikroservice arkitektur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="stats-grid">
        <div class="stat-card attendance-card">
          <div class="stat-header">
            <i class="fas fa-calendar-check"></i>
            <h3>Fremmøde</h3>
          </div>
          <div class="attendance-chart">
            <div class="chart-container">
              <div class="attendance-bar">
                <div class="attendance-fill" :style="{ width: attendancePercentage + '%' }"></div>
              </div>
              <span class="percentage">{{ attendancePercentage }}%</span>
            </div>
            <p class="stat-description">{{ attendanceText }}</p>
          </div>
        </div>
        
        <div class="stat-card grades-card">
          <div class="stat-header">
            <i class="fas fa-graduation-cap"></i>
            <h3>Karakterer</h3>
          </div>
          <div class="grades-chart">
            <div class="grade-average">
              <span class="grade-number">{{ averageGrade }}</span>
              <span class="grade-scale">/12</span>
            </div>
            <p class="stat-description">Karaktergennemsnit baseret på {{ totalExams }} eksaminer</p>
          </div>
        </div>
        
        <div class="stat-card skills-card">
          <div class="stat-header">
            <i class="fas fa-tools"></i>
            <h3>Teknologier</h3>
          </div>
          <div class="skills-stats">
            <div class="skills-count">
              <span class="count-number">{{ totalSkills }}</span>
              <span class="count-label">Beherskede Teknologier</span>
            </div>
            <p class="stat-description">Fra frontend til backend og DevOps</p>
          </div>
        </div>
      </div>

      <div class="contact-form-section">
        <h3>Kontakt Mig</h3>
        <p>Interesseret i samarbejde? Lad os snakke!</p>
        
        <div class="contact-methods">
          <div class="contact-method">
            <i class="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <a href="mailto:steenbergdaniel11@gmail.com">steenbergdaniel11@gmail.com</a>
            </div>
          </div>
          
          <div class="contact-method">
            <i class="fas fa-phone"></i>
            <div>
              <h4>Telefon</h4>
              <a href="tel:+4520900111">(+45) 20 90 01 11</a>
            </div>
          </div>
          
          <div class="contact-method">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <h4>Lokation</h4>
              <span>Åbyhøj, Danmark</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      // Real calculated stats
      grades: [10, 7, 12, 7, 10, 12, 4, 10, 7, 12, 10, 7],
      attendanceDays: 450,
      totalSchoolDays: 480,
      skills: [
        'HTML', 'CSS', 'JavaScript', 'Vue.js', 'React', 'Node.js',
        'Python', 'Go', 'C#', 'Docker', 'MongoDB', 'PostgreSQL',
        'Git', 'Linux', 'GCP', 'DevOps'
      ]
    }
  },
  computed: {
    attendancePercentage() {
      return Math.round((this.attendanceDays / this.totalSchoolDays) * 100);
    },
    attendanceText() {
      return `${this.attendanceDays} af ${this.totalSchoolDays} mulige dage`;
    },
    averageGrade() {
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      return (sum / this.grades.length).toFixed(1);
    },
    totalExams() {
      return this.grades.length;
    },
    totalSkills() {
      return this.skills.length;
    }
  }
}
</script>

<style scoped>
.contact-section {
  padding: 4rem 0;
  background: #003140;
  color: #F3EFE0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #F3EFE0;
}

.container > p {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.career-timeline {
  margin-bottom: 4rem;
  position: relative;
}

.timeline-section {
  margin-bottom: 3rem;
}

.timeline-section-title {
  font-size: 1.8rem;
  color: #22A39F;
  margin-bottom: 2rem;
  padding-left: 3rem;
  position: relative;
}

.timeline-section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 2rem;
  height: 2px;
  background: #22A39F;
  transform: translateY(-50%);
}

.timeline-item {
  display: flex;
  margin-bottom: 2rem;
  position: relative;
}

.sub-timeline {
  margin-left: 2rem;
}

.timeline-marker {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 2rem;
  margin-top: 0.5rem;
  flex-shrink: 0;
  position: relative;
}

.timeline-marker.education {
  background: #22A39F;
}

.timeline-marker.work {
  background: #F39C12;
}

.timeline-marker.job {
  background: #E74C3C;
  width: 15px;
  height: 15px;
}

.timeline-marker::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 100%;
  width: 2px;
  height: 3rem;
  background: rgba(34, 163, 159, 0.3);
  transform: translateX(-50%);
}

.timeline-item:last-child .timeline-marker::after {
  display: none;
}

.timeline-content {
  flex: 1;
}

.timeline-content h4 {
  font-size: 1.4rem;
  color: #22A39F;
  margin-bottom: 0.5rem;
}

.timeline-details {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.institution {
  font-weight: 600;
  color: #F3EFE0;
}

.dates {
  color: rgba(243, 239, 224, 0.7);
  font-style: italic;
}

.timeline-description {
  color: rgba(243, 239, 224, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.job-highlights {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.highlight {
  background: rgba(34, 163, 159, 0.2);
  color: #22A39F;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.85rem;
  border: 1px solid rgba(34, 163, 159, 0.3);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-header i {
  font-size: 2rem;
  color: #22A39F;
}

.stat-header h3 {
  font-size: 1.3rem;
  color: #F3EFE0;
}

.attendance-bar {
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.attendance-fill {
  height: 100%;
  background: linear-gradient(90deg, #22A39F, #34d399);
  border-radius: 10px;
  transition: width 0.3s ease;
}

.chart-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.percentage {
  font-size: 1.5rem;
  font-weight: bold;
  color: #22A39F;
}

.grade-average, .skills-count {
  text-align: center;
  margin-bottom: 1.5rem;
}

.grade-number, .count-number {
  font-size: 3rem;
  font-weight: bold;
  color: #22A39F;
  display: block;
}

.grade-scale {
  font-size: 1.5rem;
  color: #F3EFE0;
  opacity: 0.7;
}

.count-label {
  color: #F3EFE0;
  opacity: 0.8;
  display: block;
  margin-top: 0.5rem;
}

.stat-description {
  font-size: 0.9rem;
  color: #F3EFE0;
  opacity: 0.7;
  text-align: center;
}

.contact-form-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.contact-form-section h3 {
  font-size: 2rem;
  color: #22A39F;
  margin-bottom: 1rem;
  text-align: center;
}

.contact-form-section > p {
  text-align: center;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: all 0.3s ease;
}

.contact-method:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.contact-method i {
  font-size: 1.5rem;
  color: #22A39F;
  width: 30px;
}

.contact-method h4 {
  color: #22A39F;
  margin-bottom: 0.3rem;
  font-size: 1.1rem;
}

.contact-method a {
  color: #F3EFE0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-method a:hover {
  color: #22A39F;
}

@media (max-width: 768px) {
  .timeline-details {
    flex-direction: column;
  }
  
  .sub-timeline {
    margin-left: 1rem;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-methods {
    grid-template-columns: 1fr;
  }
  
  .job-highlights {
    justify-content: center;
  }
}
</style>