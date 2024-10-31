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
        <Avatar
          alt="Ramses Valdez"
          src="https://avatars.githubusercontent.com/u/107959089?s=400&u=9a2acd0baa3c9e4017343acb890fcf598e4e2860&v=4"
          sx={{ width: 200, height: 200, margin: 'auto' }}
        />
        <Typography variant="h2" gutterBottom>
          ¡Hola, soy Ramses Valdez Lugo!
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Desarrollador de Software y Especialista en Ciberseguridad
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Soy un técnico en desarrollo de software y ciberseguridad en formación, buscando oportunidades para colaborar en una empresa innovadora. Mi objetivo es contribuir con creatividad y conocimientos actualizados, mejorando la eficiencia y cumpliendo objetivos.
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

