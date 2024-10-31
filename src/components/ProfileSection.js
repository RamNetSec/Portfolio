import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

const ProfileSection = () => (
  <motion.div
    className="profile-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Perfil
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
          <Avatar
            alt="Ramses Valdez"
            src="https://avatars.githubusercontent.com/u/107959089?s=400&u=9a2acd0baa3c9e4017343acb890fcf598e4e2860&v=4"
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Card className="profile-card">
            <CardContent>
              <Typography variant="h5">Ramses Valdez Lugo</Typography>
              <Typography variant="subtitle1">Desarrollador de Software y Especialista en Ciberseguridad</Typography>
              <Typography variant="body1" style={{ marginTop: '10px' }}>
                Soy un técnico en desarrollo de software y ciberseguridad en formación, buscando oportunidades para colaborar en una empresa innovadora. Mi objetivo es contribuir con creatividad y conocimientos actualizados, mejorando la eficiencia y cumpliendo objetivos. Ofrezco una perspectiva fresca y experiencia en proyectos de desarrollo y protección de información.
              </Typography>
              {/* Puedes agregar más detalles aquí si lo deseas */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </motion.div>
);

export default React.memo(ProfileSection);
