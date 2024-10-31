import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, CardMedia, Chip, Stack, Box } from '@mui/material';
import { GitHub, Language, Security, Code } from '@mui/icons-material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "RAT_LINUX",
    description: "Centro de Comando WebSocket basado en Python que permite la comunicación en tiempo real entre servidor y múltiples clientes. Implementa características avanzadas de seguridad y control remoto.",
    image: "https://th.bing.com/th/id/OIP.lK6XVP9rKPgYN6D-TflmNwHaD_?rs=1&pid=ImgDetMain",
    technologies: ["Python", "WebSocket", "FastAPI", "AsyncIO"],
    github: "https://github.com/RamNetSec/RAT_LINUX",
    features: [
      "Comunicación en tiempo real",
      "Transferencia de archivos",
      "Persistencia en Windows/Linux",
      "Interfaz interactiva"
    ],
    type: "security"
  },
  {
    title: "Sec_Server_RamNetSec",
    description: "Sistema de detección de intrusos en red que utiliza nmap para monitoreo continuo. Incluye análisis automatizado de vulnerabilidades y generación de informes detallados.",
    image: "https://th.bing.com/th/id/R.a43afe930fe7b6639eaa372019c4529c?rik=sjwP%2budI0Kn%2bzA&pid=ImgRaw&r=0",
    technologies: ["Python", "Nmap", "Network Security", "Port Scanning"],
    github: "https://github.com/RamNetSec/Sec_Server_RamNetSec",
    features: [
      "Escaneo de red en tiempo real",
      "Detección avanzada de intrusos",
      "Análisis de puertos y servicios",
      "Sistema de alertas configurable"
    ],
    type: "security"
  },
  {
    title: "Portfolio Personal",
    description: "Portafolio profesional desarrollado con React y Material-UI. Implementa diseño responsivo y efectos visuales modernos.",
    image: "URL_DE_TU_IMAGEN",
    technologies: ["React", "Material-UI", "Framer Motion", "CSS"],
    github: "https://github.com/RamNetSec/Portfolio",
    features: [
      "Diseño responsivo",
      "Animaciones fluidas",
      "Optimización SEO",
      "Efectos visuales modernos"
    ],
    type: "development"
  }
];

const PortfolioSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="portfolio-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Portafolio de Proyectos
        </Typography>
        <Typography variant="subtitle1" align="center" gutterBottom color="textSecondary">
          Proyectos destacados en desarrollo y ciberseguridad
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <motion.div variants={itemVariants}>
                <Card 
                  className="portfolio-card"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      bgcolor: 'rgba(0,0,0,0.6)',
                      borderRadius: '50%',
                      p: 1
                    }}
                  >
                    {project.type === 'security' ? <Security color="error" /> : <Code color="primary" />}
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                      {project.technologies.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          size="small"
                          sx={{
                            m: 0.5,
                            bgcolor: 'rgba(255,77,77,0.1)',
                            color: 'white'
                          }}
                        />
                      ))}
                    </Stack>
                    <Typography variant="subtitle2" gutterBottom>
                      Características principales:
                    </Typography>
                    <ul style={{ paddingLeft: '1.2rem', margin: '0.5rem 0' }}>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>
                          <Typography variant="body2" color="textSecondary">
                            {feature}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                      startIcon={<GitHub />}
                      variant="contained"
                      color="primary"
                      href={project.github}
                      target="_blank"
                      fullWidth
                      sx={{
                        bgcolor: 'rgba(255,77,77,0.9)',
                        '&:hover': {
                          bgcolor: 'rgba(255,77,77,1)'
                        }
                      }}
                    >
                      Ver Proyecto
                    </Button>
                    <Button
                      startIcon={<Language />}
                      variant="contained"
                      color="primary"
                      href="https://ramnet.glitch.me/"
                      target="_blank"
                      fullWidth
                      sx={{
                        bgcolor: 'rgba(255,77,77,0.9)',
                        '&:hover': {
                          bgcolor: 'rgba(255,77,77,1)'
                        }
                      }}
                    >
                      Visitar Sitio Personal
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default React.memo(PortfolioSection);
