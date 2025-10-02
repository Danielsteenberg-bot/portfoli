<template>
  <nav class="navbar">
    <div class="nav-brand">
      <img src="/favicon.ico" alt="Stonedesigns" class="nav-logo">
      <span>Stonedesigns</span>
    </div>
    <ul class="nav-menu">
      <li><a href="#landing" class="nav-link">Hjem</a></li>
      <li><a href="#tech" class="nav-link">Tech</a></li>
      <li><a href="#projects" class="nav-link">Projekter</a></li>
      <li><a href="#about" class="nav-link">Om Mig</a></li>
      <li><a href="#contact" class="nav-link">Kontakt</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(0, 49, 64, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #F3EFE0;
  font-weight: 600;
}

.nav-logo {
  width: 32px;
  height: 32px;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #F3EFE0;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #22A39F;
}
</style>