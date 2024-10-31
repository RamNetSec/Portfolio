import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
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
            <Grid container>
              <Grid item xs={12} sm={3}>
                <CardMedia
                  component="img"
                  image="https://th.bing.com/th/id/OIP.utPG3KdQkwDu-WPlP5VKbgAAAA?rs=1&pid=ImgDetMain"
                  alt="Logo Universidad de Insurgentes"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '1rem',
                    maxHeight: '200px'
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={9}>
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
              </Grid>
            </Grid>
          </Card>

          {/* Técnico - Estudios Previos */}
          <Card>
            <Grid container>
              <Grid item xs={12} sm={3}>
                <CardMedia
                  component="img"
                  image="https://th.bing.com/th/id/R.3dd8e3248f37470a50f85dff8362650a?rik=2JCOCnQ7%2fKUhqw&riu=http%3a%2f%2funicarrera.com%2fwp-content%2fuploads%2f2015%2f02%2fIPN-Logo-e1423337644663.jpg&ehk=rY5rYl2RoQ12p050zXODmlIwNFf9n5FxRiAdTZklgdI%3d&risl=&pid=ImgRaw&r=0"
                  alt="Logo IPN"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    padding: '1rem',
                    maxHeight: '200px'
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={9}>
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
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  </motion.div>
);

export default AcademicHistorySection;
