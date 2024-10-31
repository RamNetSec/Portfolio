import React from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { motion } from 'framer-motion';

const CertificationsSection = () => (
  <motion.div className="certifications-section retroiluminacion-teclado iluminacion-led" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    {/* Sección de Certificaciones */}
    <Container maxWidth="lg" style={{ marginTop: '40px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Certificaciones
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5">Certificaciones</Typography>
              <Typography>
                Durante mi pasantía en Hack The Box (HTB), adquirí habilidades esenciales en ciberseguridad ofensiva. Me familiaricé con herramientas como Metasploit y Burp Suite, y aprendí técnicas de explotación y post-explotación. Mejoré en la enumeración de redes y sistemas, fundamental para identificar vulnerabilidades. Además, desarrollé habilidades de pensamiento crítico y resolución de problemas, ya que cada desafío en HTB requiere un enfoque creativo. En resumen, fortalecí mi capacidad para simular ataques y preparar defensas efectivas.
              </Typography>
              <Typography variant="h6" style={{ marginTop: '20px' }}>Lista de Certificaciones:</Typography>
              <ul className="custom-list">
                <li>
                  <CheckCircle className="list-icon" />
                  Curso Básico de Seguridad Informática para Empresas - Platzi
                </li>
                <li>
                  <CheckCircle className="list-icon" />
                  Introducción a Ciberseguridad Especial 0222b - Cisco
                </li>
                <li>
                  <CheckCircle className="list-icon" />
                  NDG Linux Unhatched Español 0522a - Cisco Virtual Academy
                </li>
              </ul>
              <Typography variant="h6" style={{ marginTop: '20px' }}>Reconocimientos:</Typography>
              <ul className="custom-list">
                <li>
                  <CheckCircle className="list-icon" />
                  Linux.
                </li>
                <li>
                  <CheckCircle className="list-icon" />
                  Java.
                </li>
              </ul>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </motion.div>
);

export default CertificationsSection;
