import React from 'react';
import { Container, Typography, Grid, LinearProgress, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

// Registrar los componentes necesarios para el radar chart
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const skills = {
  labels: [
    'JavaScript',
    'React',
    'Node.js',
    'Linux',
    'Java',
    'Python',
    'Git',
    'Bash Scripting',
    'Seguridad en Redes',
    'Desarrollo Web',
    'Gestión de BD'
  ],
  datasets: [
    {
      label: 'Nivel de Habilidad',
      data: [5, 5, 4, 4, 3.5, 3, 4, 3.5, 3.8, 4, 3.5],
      backgroundColor: 'rgba(255, 77, 77, 0.2)',
      borderColor: 'rgba(255, 77, 77, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(255, 77, 77, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 77, 77, 1)'
    }
  ]
};

const options = {
  scales: {
    r: {
      angleLines: {
        color: 'rgba(255, 255, 255, 0.2)'
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.2)'
      },
      pointLabels: {
        color: 'rgba(255, 255, 255, 0.8)',
        font: {
          size: 12
        }
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.8)',
        backdropColor: 'transparent',
        stepSize: 1,
        max: 5
      }
    }
  },
  plugins: {
    legend: {
      labels: {
        color: 'rgba(255, 255, 255, 0.8)'
      }
    }
  },
  maintainAspectRatio: false
};

const skillsList = [
  { name: 'JavaScript', level: 100 },
  { name: 'React', level: 100 },
  { name: 'Node.js', level: 80 },
  { name: 'Linux', level: 80 },
  { name: 'Java', level: 70 },
  { name: 'Python', level: 60 },
  { name: 'Git', level: 80 },
  { name: 'Bash Scripting', level: 70 },
  { name: 'Seguridad en Redes', level: 76 },
  { name: 'Desarrollo Web', level: 80 },
  { name: 'Gestión de BD', level: 70 }
];

const SkillsSection = () => {
  return (
    <motion.div
      className="skills-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Habilidades
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <div style={{ height: '500px', position: 'relative' }}>
              <Radar data={skills} options={options} />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 2 }}>
              {skillsList.map((skill, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    {skill.name}
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={skill.level}
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: 'rgba(255, 77, 77, 0.2)',
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: 'rgba(255, 77, 77, 1)',
                        borderRadius: 5,
                      }
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default React.memo(SkillsSection);
