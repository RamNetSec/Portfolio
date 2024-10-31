function initGaussianEffects() {
  const lights = [
    { color: 'rgba(255, 77, 77, 0.3)', delay: 0 },    // Rojo
    { color: 'rgba(74, 144, 226, 0.3)', delay: 100 }, // Azul
    { color: 'rgba(80, 227, 194, 0.3)', delay: 200 }  // Verde
  ];

  const container = document.createElement('div');
  container.className = 'gaussian-container';
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
  `;
  document.body.prepend(container);

  lights.forEach(({ color, delay }) => {
    const light = document.createElement('div');
    light.className = 'gaussian-light';
    light.style.background = color;
    container.appendChild(light);

    // Posición inicial aleatoria
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    light.style.transform = `translate(${x}px, ${y}px)`;
  });

  function updateLights(e) {
    const mouseX = e.clientX || (e.touches && e.touches[0].clientX) || window.innerWidth / 2;
    const mouseY = e.clientY || (e.touches && e.touches[0].clientY) || window.innerHeight / 2;

    document.querySelectorAll('.gaussian-light').forEach((light, index) => {
      const speed = 0.15 - (index * 0.03);
      const x = mouseX - (light.offsetWidth / 2);
      const y = mouseY - (light.offsetHeight / 2);
      
      light.style.transform = `translate(${x}px, ${y}px)`;
      light.style.transition = 'transform 1s cubic-bezier(0.22, 1, 0.36, 1)';
    });
  }

  // Eventos para escritorio y móvil
  window.addEventListener('mousemove', updateLights);
  window.addEventListener('touchmove', updateLights, { passive: true });

  // Actualización inicial
  updateLights({ 
    clientX: window.innerWidth / 2, 
    clientY: window.innerHeight / 2 
  });
}

// Iniciar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initGaussianEffects);