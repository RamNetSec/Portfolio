import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const ProfileSection = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <Container maxWidth="lg" style={{ marginTop: '80px' }}>
      <Typography variant="h1" align="center" gutterBottom sx={{ fontSize: '2.5rem' }}>
        Ramses Valdez - Desarrollador de Software
      </Typography>
      <Typography 
        variant="h2" 
        align="center" 
        color="textSecondary" 
        sx={{ fontSize: '1.5rem' }}
        paragraph
      >
        Perfil Profesional
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        I am a software development technician and cybersecurity apprentice, currently pursuing a degree in Software Development at Universidad de Insurgentes. I seek to collaborate in an innovative company where I can contribute creativity and up-to-date knowledge to improve efficiency and achieve goals, offering a fresh perspective and experience in development and information security projects.
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        <strong>Ramses Valdez L.</strong><br />
        Software Development Intern<br />
        Phone: +52 5515317677<br />
        Mobile: +52 55 9422 9268<br />
        Email: ramvallugo@gmail.com
      </Typography>
    </Container>
  </motion.div>
);

export default ProfileSection;
