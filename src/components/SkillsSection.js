import React, { useState, useRef, useEffect } from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { StarBorder, Star, StarHalf } from '@mui/icons-material';
import RadarChart from './RadarChart';

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
  { name: 'Network Security', level: 3.8 },
  { name: 'Web Development', level: 3.2 },
  { name: 'Database Management', level: 3.0 }
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="skills-section"
      id="skills"
    >
      <Container maxWidth="lg" className="section-container">
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom
          className="section-title"
        >
          Technical Skills
        </Typography>
        
        {/* Añadir el gráfico de radar */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <RadarChart data={skills} />
          </Grid>
          
          {/* Mantener las tarjetas de habilidades existentes */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {skills.map((skill) => (
                <Grid 
                  item 
                  xs={12} 
                  sm={6} 
                  key={skill.name}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
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
                      <Typography 
                        variant="h6" 
                        gutterBottom
                      >
                        {skill.name}
                      </Typography>
                      <SkillLevel level={skill.level} />
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default SkillsSection;
