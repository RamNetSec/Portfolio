import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { School, Engineering } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Revisar y consolidar la información académica
const academicHistory = [
  {
    degree: "Licenciatura en Desarrollo de Software",
    institution: "Universidad Insurgentes",
    startDate: "Octubre 2024",
    expectedGraduation: "Octubre 2027",
    description:
      "Estudios enfocados en el desarrollo de aplicaciones web y móviles, con énfasis en arquitecturas escalables y seguras.",
    icon: <Engineering style={{ fontSize: 60, color: '#ff4d4d' }} />,
  },
  {
    degree: "Técnico en Software Informático",
    institution: "Instituto Politécnico Nacional",
    startDate: "Enero 2020",
    graduationDate: "Octubre 2024",
    description:
      "Formación en programación, estructuras de datos, bases de datos y ciberseguridad.",
    icon: <School style={{ fontSize: 60, color: '#ff4d4d' }} />,
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
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="academic-card">
                <CardContent>
                  <div className="icon-container">
                    {item.icon}
                  </div>
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
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </motion.div>
);

export default React.memo(AcademicHistorySection);
