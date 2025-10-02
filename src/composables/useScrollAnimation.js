import { ref, onMounted } from 'vue';

export function useScrollAnimation() {
  const isVisible = ref(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Example condition for triggering animation
    if (scrollPosition > windowHeight / 2) {
      isVisible.value = true;
    } else {
      isVisible.value = false;
    }
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return {
    isVisible,
  };
}