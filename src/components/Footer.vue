<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section contact-info">
        <h5><i class="fas fa-envelope"></i> Kontakt</h5>
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <a href="mailto:steenbergdaniel11@gmail.com">steenbergdaniel11@gmail.com</a>
        </div>
        <div class="contact-item">
          <i class="fas fa-phone"></i>
          <a href="tel:+4520900111">(+45) 20 90 01 11</a>
        </div>
      </div>

      <div class="footer-section address-info">
        <h5><i class="fas fa-map-marker-alt"></i> Adresse</h5>
        <div class="address-item">
          <i class="fas fa-home"></i>
          <span>Lokesvej 78, 2, 8</span>
        </div>
        <div class="address-item">
          <i class="fas fa-city"></i>
          <span>8230 Åbyhøj</span>
        </div>
      </div>

      <div class="footer-section social-media">
        <h5><i class="fas fa-share-alt"></i> Følg mig</h5>
        <div class="social-links">
          <a href="#" target="_blank" class="social-link linkedin">
            <i class="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href="#" target="_blank" class="social-link github">
            <i class="fab fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="#" target="_blank" class="social-link gitlab">
            <i class="fab fa-gitlab"></i>
            <span>GitLab</span>
          </a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-wave"></div>
      <div class="footer-bottom-content">
        <span>Bygget af &copy; 2025 Daniel Steenberg med kærlighed ❤️ og meget kaffe ☕</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #003140 0%, #022a36 100%);
  color: #F3EFE0;
  position: relative;
  overflow: hidden;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h5 {
  color: #22A39F;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-item, .address-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  color: #F3EFE0;
}

.contact-item i, .address-item i {
  color: #22A39F;
  width: 20px;
}

.contact-item a {
  color: #F3EFE0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: #22A39F;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #F3EFE0;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.5rem;
  border-radius: 5px;
}

.social-link:hover {
  background: rgba(34, 163, 159, 0.1);
  color: #22A39F;
  transform: translateX(5px);
}

.social-link i {
  width: 20px;
  font-size: 1.1rem;
}

.footer-bottom {
  background: #001a24;
  position: relative;
  border-top: 1px solid rgba(34, 163, 159, 0.2);
}

.footer-bottom-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 1rem 2rem;
}

.footer-bottom-content span {
  color: rgba(243, 239, 224, 0.7);
  font-size: 0.9rem;
}

.footer-wave {
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 50px;
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }
  
  .social-links {
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .footer-bottom-content {
    padding: 1rem;
  }
}
</style>