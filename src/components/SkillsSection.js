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
    <Container maxWidth="lg" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Typography variant="h4" align="center" gutterBottom
          sx={{
            mb: 6,
            fontWeight: 700,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(to right, #ff4d4d, #ff8080)'
            }
          }}
        >
          Technical Skills
        </Typography>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <RadarChart data={skills} />
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default SkillsSection;
