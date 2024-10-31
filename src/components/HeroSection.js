import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div 
      className="hero-section"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center', py: 10 }}>
        <Typography variant="h2" gutterBottom>
          ¡Hola, soy [Tu Nombre]!
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Desarrollador de Software y Especialista en Ciberseguridad
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Me apasiona crear soluciones tecnológicas innovadoras y seguras. Con experiencia en desarrollo web y prácticas avanzadas de seguridad, mi objetivo es combinar funcionalidad y protección en cada proyecto.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Ver mi Trabajo
          </Button>
          <Button variant="outlined" color="primary">
            Contáctame
          </Button>
        </Box>
      </Container>
    </motion.div>
  );
};

export default React.memo(HeroSection);

