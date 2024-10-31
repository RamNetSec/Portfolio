import React, { useState, useRef, useEffect } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { StarBorder, Star, StarHalf } from '@mui/icons-material';
import RadarChart from './RadarChart';

// Mejorar el componente SkillLevel para una mejor UI
const SkillLevel = ({ level }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
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

// Ajustar niveles de habilidad y eliminar duplicados
const skills = [
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
  { name: 'Gestión de Bases de Datos', level: 3.5 },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Uso de IntersectionObserver más eficiente
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Desconectar después de la primera vez
        }
      },
      { threshold: 0.1 } // Reducido de 0.2 a 0.1
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div className="skills-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Habilidades
        </Typography>
        <Grid container spacing={4}>
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper 
                elevation={3} 
                className="skill-card"
                sx={{
                  p: 2,
                  height: '100%',
                  background: 'rgba(26, 26, 26, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 77, 77, 0.2)',
                  transition: 'all 0.3s ease'
                }}
              >
                <Typography variant="h5">{skill.name}</Typography>
                <Typography variant="subtitle1">{skill.level}</Typography>
                {typeof skill.level === 'number' && <SkillLevel level={skill.level} />}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default React.memo(SkillsSection);
