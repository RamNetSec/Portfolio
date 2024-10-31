import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactSection = () => (
  <motion.div id="contact" className="contact-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    {/* Sección de Información de Contacto */}
    <Container maxWidth="lg" style={{ marginTop: '40px' }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom
        style={{ 
          color: '#ffffff',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
        }}
      >
        Contact Information
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Typography 
            variant="h6"
            style={{ 
              color: '#e0e0e0',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
            }}
          >
            Phone: +52 5515317677
          </Typography>
        </Grid>
        <Grid item>
          <Typography 
            variant="h6"
            style={{ 
              color: '#e0e0e0',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
            }}
          >
            Mobile: +52 55 9422 9268
          </Typography>
        </Grid>
        <Grid item>
          <Typography 
            variant="h6"
            style={{ 
              color: '#e0e0e0',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
            }}
          >
            Email: ramvallugo@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Container>

    {/* Sección de Contacto */}
    <Container maxWidth="lg" style={{ marginTop: '40px', marginBottom: '40px' }} id="contact">
      <Typography variant="h4" align="center" gutterBottom>
        Contact Me
      </Typography>
      <Grid container justifyContent="center">
        <Grid item>
          <Button
            startIcon={<FaGithub />}
            size="large"
            href="https://github.com/RamNetSec"
            style={{ margin: '10px', backgroundColor: '#b30000' }}
            variant="contained"
          >
            Github
          </Button>
          <Button
            startIcon={<FaLinkedin />}
            size="large"
            href="https://www.linkedin.com/in/ramnetsecurity/"
            style={{ margin: '10px', backgroundColor: '#b30000' }}
            variant="contained"
          >
            LinkedIn
          </Button>
          <Button
            startIcon={<FaGithub />}
            size="large"
            href="https://github.com/RamNetSec/Portfolio"
            style={{ margin: '10px', backgroundColor: '#b30000' }}
            variant="contained"
          >
            Portfolio Project
          </Button>
        </Grid>
      </Grid>
    </Container>
  </motion.div>
);

export default ContactSection;
