import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Web, MobileFriendly, Code, Security, Terminal } from '@mui/icons-material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'RAT_LINUX',
    description: 'Herramienta de administración remota (Remote Administration Tool) para sistemas Linux desarrollada en Python, enfocada en la administración remota segura de sistemas Linux.',
    icon: <Terminal style={{ fontSize: 60, color: '#ff4d4d' }} />,
    link: 'https://github.com/RamNetSec/RAT_LINUX',
  },
  {
    title: 'Portfolio Personal',
    description: 'Portafolio desarrollado con React, Material-UI y Framer Motion. Presenta una interfaz moderna con animaciones fluidas y efectos de escritura dinámica. Incluye sistema de construcción optimizado para producción.',
    icon: <Web style={{ fontSize: 60, color: '#ff4d4d' }} />,
    link: 'https://github.com/RamNetSec/Portfolio',
  },
  {
    title: 'Proyecto Web',
    description: 'Descripción del proyecto web.',
    icon: <Web style={{ fontSize: 60, color: '#ff4d4d' }} />,
  },
  {
    title: 'Aplicación Móvil',
    description: 'Descripción de la aplicación móvil.',
    icon: <MobileFriendly style={{ fontSize: 60, color: '#ff4d4d' }} />,
  },
  {
    title: 'Herramienta de Desarrollo',
    description: 'Descripción de la herramienta.',
    icon: <Code style={{ fontSize: 60, color: '#ff4d4d' }} />,
  },
  {
    title: 'Centro de Comando WebSocket',
    description: 'Sistema de comunicación en tiempo real entre servidor y clientes, con transferencia de archivos y soporte multiplataforma.',
    icon: <Code style={{ fontSize: 60, color: '#ff4d4d' }} />,
    link: 'https://github.com/RamNetSec/RAT_LINUX',
  },
  {
    title: 'Sec_Server_RamNetSec',
    description: 'Herramienta de monitoreo de red para detectar dispositivos conectados y analizar su seguridad básica.',
    icon: <Security style={{ fontSize: 60, color: '#ff4d4d' }} />,
    link: 'https://github.com/RamNetSec/Sec_Server_RamNetSec',
  },
];

const PortfolioSection = () => (
  <motion.div
    className="portfolio-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Portfolio
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="project-card">
                <CardContent>
                  <div className="icon-container">
                    {project.icon}
                  </div>
                  <Typography variant="h5">{project.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </motion.div>
);

export default React.memo(PortfolioSection);
