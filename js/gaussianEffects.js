function createGaussianLights() {
  const lights = [];
  const colors = [
    'rgba(255, 77, 77, 0.5)',  // Rojo más visible
    'rgba(74, 144, 226, 0.5)', // Azul más visible
    'rgba(80, 227, 194, 0.5)'  // Verde más visible
  ];
  
  for (let i = 0; i < 3; i++) {
    const light = document.createElement('div');
    light.className = 'gaussian-light';
    light.style.width = '400px';
    light.style.height = '400px';
    light.style.backgroundColor = colors[i];
    document.body.appendChild(light);
    lights.push(light);
  }
  return lights;
}

function updateLightsPosition(lights, event, isScroll = false) {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  lights.forEach((light, index) => {
    if (isScroll) {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - windowHeight);
      light.style.top = `${scrollPercent * 100 + (index * 40)}%`; // Aumentado el espaciado
      light.style.left = `${(Math.sin(scrollPercent * Math.PI * 2) * 60) + 50}%`; // Mayor movimiento horizontal
    } else {
      const delay = index * 50; // Añadir delay para efecto de arrastre
      setTimeout(() => {
        light.style.top = `${(event.clientY / windowHeight) * 100 + (index * 30)}%`;
        light.style.left = `${(event.clientX / windowWidth) * 100 + (index * 10)}%`;
      }, delay);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const lights = createGaussianLights();
  
  if ('ontouchstart' in window) {
    // Para dispositivos móviles, usar scroll
    window.addEventListener('scroll', () => updateLightsPosition(lights, null, true));
  } else {
    // Para desktop, usar movimiento del mouse
    document.addEventListener('mousemove', (e) => updateLightsPosition(lights, e, false));
  }
});
