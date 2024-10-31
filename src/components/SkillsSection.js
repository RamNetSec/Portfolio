import React from 'react';
import { Container, Typography, Grid, LinearProgress, Box } from '@mui/material';
import { motion } from 'framer-motion';
import RadarChart from './RadarChart';

const skillsList = [
  { name: 'JavaScript', level: 5 },
  { name: 'React', level: 5 },
  { name: 'Node.js', level: 4 },
  { name: 'Linux', level: 4 },
  { name: 'Java', level: 3.5 },
  { name: 'Python', level: 3 },
  { name: 'Git', level: 4 },
  { name: 'Bash Scripting', level: 3.5 },
  { name: 'Seguridad en Redes', level: 3.8 },
  { name: 'Desarrollo Web', level: 4 },
  { name: 'Gestión de BD', level: 3.5 }
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
            <RadarChart data={skillsList} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 2 }}>
              {skillsList.map((skill, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="body1" sx={{ mb: 1, color: '#fff' }}>
                    {skill.name}
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={skill.level * 20}
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
