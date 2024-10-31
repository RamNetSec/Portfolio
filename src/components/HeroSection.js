import React from 'react';
import { Container, Typography, Button, Box, Avatar } from '@mui/material';
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
        <motion.img
          src="https://avatars.githubusercontent.com/u/107959089?s=400&u=9a2acd0baa3c9e4017343acb890fcf598e4e2860&v=4"
          alt="Ramses Valdez"
          className="profile-picture"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          style={{ width: 200, height: 200, margin: 'auto' }}
        />
        <Typography variant="h2" gutterBottom>
          ¡Hola, soy Ramses Valdez Lugo!
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Especialista en Ciberseguridad y Desarrollador de Software
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Profesional especializado en ciberseguridad, con experiencia en desarrollo de software y análisis de vulnerabilidades. 
          Contribuidor activo en proyectos de código abierto en GitHub como "RamNetSec", enfocado en herramientas de administración 
          remota y aplicaciones web. Mantengo una presencia activa en YouTube y AllMyLinks, compartiendo contenido sobre seguridad 
          informática y desarrollo tecnológico.
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

