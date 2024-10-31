import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const academicHistory = [
  {
    degree: "Bachelor of Technology - BTech, Tecnología/Técnico de software informático",
    institution: "Universidad Insurgentes",
    startDate: "Octubre 2024",
    expectedGraduation: "Octubre 2027",
    description:
      "Bachelor’s Degree in Software Development. Estudios enfocados en el desarrollo de aplicaciones web y móviles, con énfasis en arquitecturas escalables y seguras.",
    image: "URL_DE_IMAGEN_UNIVERSIDAD_INSURGENTES",
  },
  {
    degree: "Tecnicatura, Tecnología/Técnico de software informático",
    institution: "Instituto Politécnico Nacional",
    startDate: "Enero 2020",
    graduationDate: "Octubre 2024",
    description:
      "Formación técnica en programación, estructuras de datos, bases de datos y ciberseguridad. Participación en hackathons y proyectos colaborativos que fomentaron habilidades de trabajo en equipo y resolución de problemas.",
    image: "URL_DE_IMAGEN_IPN",
  },
];

const AcademicHistorySection = () => (
  <motion.div
    className="academic-history-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Container maxWidth="lg" id="academic-history">
      <Typography variant="h4" align="center" gutterBottom>
        Historial Académico
      </Typography>
      <Grid container spacing={4}>
        {academicHistory.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card className="academic-card">
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt={item.institution}
                loading="lazy"
              />
              <CardContent>
                <Typography variant="h5">{item.degree}</Typography>
                <Typography variant="subtitle1">{item.institution}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.startDate} - {item.expectedGraduation || item.graduationDate}
                </Typography>
                <Typography variant="body1" style={{ marginTop: '10px' }}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </motion.div>
);

export default React.memo(AcademicHistorySection);
