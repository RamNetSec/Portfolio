import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { StarBorder, Star, StarHalf } from '@mui/icons-material';

const SkillLevel = ({ level }) => {
  const totalStars = 5;
  const stars = [];
  
  for (let i = 1; i <= totalStars; i++) {
    if (i <= Math.floor(level)) {
      stars.push(<Star key={i} style={{ color: '#ff4d4d' }} />);
    } else if (i - 0.5 <= level) {
      stars.push(<StarHalf key={i} style={{ color: '#ff4d4d' }} />);
    } else {
      stars.push(<StarBorder key={i} style={{ color: '#ff4d4d' }} />);
    }
  }
  
  return <div>{stars}</div>;
};

const skills = [
  { name: 'Linux', level: 4 },
  { name: 'Java', level: 3.5 },
  { name: 'Python', level: 3 },
  { name: 'Git', level: 4 },
  { name: 'Bash Scripting', level: 3.5 },
];

const SkillsSection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="skills-section"
  >
    <Container maxWidth="lg" style={{ marginTop: '40px', marginBottom: '40px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Habilidades Técnicas
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {skills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.name}>
            <Paper 
              elevation={3} 
              style={{ 
                padding: '20px',
                background: 'rgba(26, 26, 26, 0.6)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 77, 77, 0.2)',
                transition: 'transform 0.3s ease, background 0.3s ease',
              }}
              className="skill-card"
            >
              <Typography variant="h6" gutterBottom>
                {skill.name}
              </Typography>
              <SkillLevel level={skill.level} />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </motion.div>
);

export default SkillsSection;
