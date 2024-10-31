import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { Security, Verified, Terminal } from '@mui/icons-material';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    institution: "Cisco",
    icon: <Security style={{ fontSize: 60, color: '#ff4d4d' }} />,
  },
  {
    title: "Curso Básico de Seguridad Informática para Empresas",
    institution: "Platzi",
    icon: <Verified style={{ fontSize: 60, color: '#ff4d4d' }} />,
  },
  {
    title: "NDG Linux Unhatched Español 0522a",
    institution: "Cisco Virtual Academy",
    icon: <Terminal style={{ fontSize: 60, color: '#ff4d4d' }} />,
  },
];

const CertificationsSection = () => (
  <motion.div
    className="certifications-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Container maxWidth="lg" id="certifications">
      <Typography variant="h4" align="center" gutterBottom>
        Certificaciones
      </Typography>
      <Grid container spacing={4}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="certification-card">
                <CardContent>
                  <div className="icon-container">
                    {cert.icon}
                  </div>
                  <Typography variant="h5">{cert.title}</Typography>
                  <Typography variant="subtitle1">{cert.institution}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </motion.div>
);

export default React.memo(CertificationsSection);
