// Importar librerías necesarias
import { useEffect } from 'react';

// Función para agregar efectos gaussianos
const useGaussianEffects = () => {
  useEffect(() => {
    // Código para generar y animar luces gaussianas
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
  }, []);
};

export default useGaussianEffects;
