import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const AcademicHistorySection = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <Container maxWidth="lg" style={{ marginTop: '40px', marginBottom: '40px' }} id="academic-history">
      <Typography variant="h4" align="center" gutterBottom>
        Historial Académico
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={8}>
          {/* Licenciatura - Estudios Actuales */}
          <Card style={{ marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="h5" color="primary">
                Licenciatura en Desarrollo de Software
              </Typography>
              <Typography variant="subtitle1">Universidad de Insurgentes</Typography>
              <Typography>Fecha de Inicio: Noviembre 2024</Typography>
              <Typography>Fecha Esperada de Graduación: Noviembre 2027</Typography>
              <Typography variant="body2" style={{ marginTop: '10px', fontStyle: 'italic' }}>
                Estudios en curso
              </Typography>
            </CardContent>
          </Card>

          {/* Técnico - Estudios Previos */}
          <Card>
            <CardContent>
              <Typography variant="h5" color="primary">
                Técnico en Desarrollo de Software
              </Typography>
              <Typography variant="subtitle1">CECyT 9 "Juan de Dios Bátiz"</Typography>
              <Typography>Graduado</Typography>
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                Promedio Final: 8.37
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </motion.div>
);

export default AcademicHistorySection;
