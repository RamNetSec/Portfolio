import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: "Certificación en Seguridad Informática",
    institution: "Instituto XYZ",
    image: "URL_DE_IMAGEN",
    description: "Aprendí sobre análisis de vulnerabilidades, protección de datos y auditorías de seguridad."
  },
  // Agregar más certificaciones
];

const CertificationsSection = () => (
  <motion.div 
    className="certifications-section" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1 }}
  >
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Certificaciones
      </Typography>
      <Grid container spacing={4}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3}>
              <CardMedia
                component="img"
                height="140"
                image={cert.image}
                alt={cert.title}
              />
              <CardContent>
                <Typography variant="h5">{cert.title}</Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {cert.institution}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {cert.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </motion.div>
);

export default React.memo(CertificationsSection);
