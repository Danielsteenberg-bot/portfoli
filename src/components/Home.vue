<template>
  <div class="home">
    <LandingSection />
    <TechnologySection />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script>
import LandingSection from '@/components/LandingSection.vue'
import TechnologySection from '@/components/TechnologySection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    LandingSection,
    TechnologySection,
    ProjectsSection,
    AboutSection,
    ContactSection,
    Footer
  }
}
</script>

<style scoped>
.home {
  width: 100%;
}
</style>