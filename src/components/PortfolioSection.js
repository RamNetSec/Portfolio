import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, CardMedia, Chip, Stack } from '@mui/material';
import { GitHub } from '@mui/icons-material'; // Eliminamos OpenInNew ya que no se usa
import { motion } from 'framer-motion';

const projects = [
  {
    title: "RAT_LINUX",
    description: "Centro de Comando WebSocket basado en Python que permite la comunicación en tiempo real entre servidor y múltiples clientes. Utiliza asyncio, websockets, subprocess, y fastapi.",
    image: "https://th.bing.com/th/id/OIP.lK6XVP9rKPgYN6D-TflmNwHaD_?rs=1&pid=ImgDetMain", // Añade una imagen preview
    technologies: ["Python", "WebSocket", "FastAPI", "AsyncIO"],
    github: "https://github.com/RamNetSec/RAT_LINUX",
    features: [
      "Comunicación en tiempo real",
      "Transferencia de archivos",
      "Persistencia en Windows/Linux",
      "Interfaz interactiva"
    ]
  },
  {
    title: "Sec_Server_RamNetSec",
    description: "Detector de intrusos en red que utiliza nmap para escanear la red local. Identifica nuevos dispositivos y realiza análisis de seguridad de puertos.",
    image: "https://th.bing.com/th/id/R.a43afe930fe7b6639eaa372019c4529c?rik=sjwP%2budI0Kn%2bzA&pid=ImgRaw&r=0",
    technologies: ["Python", "Nmap", "Network Security", "Port Scanning"],
    github: "https://github.com/RamNetSec/Sec_Server_RamNetSec",
    features: [
      "Escaneo de red",
      "Detección de intrusos",
      "Análisis de puertos",
      "Monitoreo continuo"
    ]
  }
];

const PortfolioSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
      className="portfolio-section"
      id="portfolio"
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom
          sx={{ mb: 6 }}
        >
          Proyectos Destacados
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={project.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2 
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(26, 26, 26, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 77, 77, 0.2)'
                  }}
                >
                  {project.image && (
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{ objectFit: 'cover' }}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {project.description}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech) => (
                        <Chip 
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{ 
                            backgroundColor: 'rgba(255, 77, 77, 0.2)',
                            color: '#fff',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 77, 77, 0.3)'
                            }
                          }}
                        />
                      ))}
                    </Stack>
                    <Typography variant="subtitle2" gutterBottom>
                      Características principales:
                    </Typography>
                    <ul style={{ paddingLeft: '20px' }}>
                      {project.features.map((feature) => (
                        <li key={feature}>
                          <Typography variant="body2">
                            {feature}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button 
                      startIcon={<GitHub />}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        backgroundColor: 'rgba(255, 77, 77, 0.8)',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 77, 77, 1)'
                        }
                      }}
                    >
                      Ver en GitHub
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

export default PortfolioSection;
