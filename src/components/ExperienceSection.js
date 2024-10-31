import React from 'react';
import { Container, Typography, Grid } from '@mui/material';

// ...código existente...
const experiences = [
  {
    position: 'Intern en Desarrollo de Software',
    company: 'Hack The Box (HTB)',
    period: 'Octubre 2024',
    description:
      'Durante mi pasantía en HTB, adquirí habilidades esenciales en ciberseguridad ofensiva...',
  },
];
// ...código existente...

const ExperienceSection = () => (
  <Container maxWidth="lg" id="experience">
    <Typography variant="h4" align="center" gutterBottom>
      Experiencia
    </Typography>
    <Grid container spacing={4}>
      {experiences.map((exp, index) => (
        <Grid item xs={12} key={index}>
          <Typography variant="h5">{exp.position}</Typography>
          <Typography variant="subtitle1">{exp.company}</Typography>
          <Typography variant="body2" color="textSecondary">
            {exp.period}
          </Typography>
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            {exp.description}
          </Typography>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default React.memo(ExperienceSection);
