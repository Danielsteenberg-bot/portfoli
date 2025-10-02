<template>
  <div class="project-card">
    <img :src="project.image" alt="Project Image" class="project-image" />
    <div class="project-details">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      <div class="project-icons">
        <div v-for="icon in project.technologies" :key="icon" class="icon">
          <img :src="getIconPath(icon)" alt="Technology Icon" />
        </div>
      </div>
      <a :href="project.link" target="_blank" class="project-link">
        <Button label="Se website" />
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Button } from 'primevue/button';

export default defineComponent({
  name: 'ProjectCard',
  components: {
    Button,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getIconPath(icon) {
      try {
        return new URL(`../assets/images/icons/${icon}.png`, import.meta.url).href;
      } catch (error) {
        console.warn(`Icon not found: ${icon}.png`);
        return '/src/assets/images/icons/default.png'; // fallback
      }
    },
  },
});
</script>


<style scoped>
.project-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-image {
  width: 100%;
  height: auto;
}

.project-details {
  padding: 16px;
}

.project-title {
  font-size: 1.5em;
  margin: 0;
}

.project-description {
  margin: 8px 0;
}

.project-icons {
  display: flex;
  gap: 8px;
}

.icon img {
  width: 24px;
  height: 24px;
}

.project-link {
  text-decoration: none;
}
</style>