import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';
import { motion } from 'framer-motion';

const academicHistory = [
  {
    degree: 'Licenciatura en Desarrollo de Software',
    institution: 'Universidad de Insurgentes',
    startDate: 'Noviembre 2024',
    expectedGraduation: 'Noviembre 2027',
    description: 'Estudios enfocados en el desarrollo de aplicaciones web y móviles, con énfasis en arquitecturas escalables y seguras. Participación en proyectos de investigación y desarrollo de software de código abierto.',
    image: 'https://th.bing.com/th/id/OIP.utPG3KdQkwDu-WPlP5VKbgAAAA?rs=1&pid=ImgDetMain',
  },
  {
    degree: 'Técnico en Desarrollo de Software',
    institution: 'CECyT 9 "Juan de Dios Bátiz"',
    startDate: 'Enero 2021',
    graduationDate: 'Diciembre 2023',
    description: 'Formación técnica en programación, estructuras de datos, bases de datos y ciberseguridad. Participación en hackathons y proyectos colaborativos que fomentaron habilidades de trabajo en equipo y resolución de problemas.',
    image: 'https://th.bing.com/th/id/R.3dd8e3248f37470a50f85dff8362650a?rik=2JCOCnQ7%2fKUhqw&riu=http%3a%2f%2funicarrera.com%2fwp-content%2fuploads%2f2015%2f02%2fIPN-Logo-e1423337644663.jpg&ehk=rY5rYl2RoQ12p050zXODmlIwNFf9n5FxRiAdTZklgdI%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    degree: "Ingeniería en Sistemas",
    institution: "Universidad ABC",
    period: "2015 - 2019",
    description: "Me especialicé en desarrollo de software y estudié fundamentos de ciberseguridad."
  },
  // Añadir más historial académico si es necesario
];

const AcademicHistorySection = () => (
  <motion.div className="academic-history-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <Container maxWidth="lg" id="academic-history">
      <Typography variant="h4" align="center" gutterBottom>
        Historial Académico
      </Typography>
      <Box mt={4}>
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
                    {item.startDate ? `${item.startDate} - ${item.expectedGraduation ? `Graduación Esperada: ${item.expectedGraduation}` : `Graduado: ${item.graduationDate}`}` : item.period}
                  </Typography>
                  <Typography variant="body1" style={{ marginTop: '10px' }}>
                    {item.description}
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

export default React.memo(AcademicHistorySection);
