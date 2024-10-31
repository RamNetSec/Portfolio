import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => (
  <Container maxWidth="lg" className="hero-section">
    <Grid container spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography 
            variant="h3" 
            gutterBottom 
            style={{ 
              fontWeight: 'bold',
              color: '#ffffff',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}
          >
            <Typewriter
              words={['Hello, I am Ramses Valdez']}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Typography>
          <Typography 
            variant="h5" 
            paragraph 
            style={{ 
              color: '#e0e0e0',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
            }}
          >
            Software development technician and cybersecurity apprentice.
            I am passionate about creating innovative and secure solutions.
          </Typography>
        </motion.div>
      </Grid>
      <Grid item xs={12} md={6} className="canvas-container">
        <img
          src="https://avatars.githubusercontent.com/u/107959089?s=400&u=9a2acd0baa3c9e4017343acb890fcf598e4e2860&v=4"
          alt="RamNetSec"
        />
      </Grid>
    </Grid>
  </Container>
);

export default HeroSection;
