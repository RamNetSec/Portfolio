// ...existing code...
// Inicializar efectos gaussianos con movimiento aleatorio
function initGaussianEffects() {
  const lights = document.querySelectorAll('.gaussian-light');
  
  lights.forEach(light => {
    const moveLight = () => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      light.style.transform = `translate(${x}px, ${y}px)`;
    };
    
    // Mover la luz al cargar
    moveLight();
    
    // Mover la luz cada 5 segundos
    setInterval(moveLight, 5000);
  });
}

window.initGaussianEffects = initGaussianEffects;
// ...existing code...
