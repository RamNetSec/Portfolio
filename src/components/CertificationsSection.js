import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Curso Básico de Seguridad Informática para Empresas',
    provider: 'Platzi',
    date: 'Marzo 2023',
    description: 'Aprendí los fundamentos de la seguridad informática, incluyendo gestión de riesgos, políticas de seguridad y herramientas esenciales para proteger la infraestructura de una empresa.',
  },
  {
    title: 'Introducción a Ciberseguridad Especial 0222b',
    provider: 'Cisco',
    date: 'Julio 2023',
    description: 'Curso introductorio sobre ciberseguridad ofensiva y defensiva, cubriendo temas como análisis de vulnerabilidades, técnicas de penetración y estrategias de mitigación.',
  },
  {
    title: 'NDG Linux Unhatched Español 0522a',
    provider: 'Cisco Virtual Academy',
    date: 'Enero 2023',
    description: 'Introducción a Linux enfocada en la línea de comandos, administración básica del sistema, y configuración de entornos seguros para el desarrollo de software.',
  },
  // Añadir más certificaciones si es necesario
];

const CertificationsSection = () => (
  <motion.div className="certifications-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Certificaciones
      </Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="certifications-card">
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {cert.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {cert.provider} - {cert.date}
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: '10px' }}>
                    {cert.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  </motion.div>
);

export default React.memo(CertificationsSection);
