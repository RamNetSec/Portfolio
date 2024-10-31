import React, { useState } from 'react';
import { Container, TextField, Button, Grid, Typography, Alert } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!form.nombre) tempErrors.nombre = 'El nombre es requerido.';
    if (!form.email) {
      tempErrors.email = 'El email es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'El email no es válido.';
    }
    if (!form.asunto) tempErrors.asunto = 'El asunto es requerido.';
    if (!form.mensaje) tempErrors.mensaje = 'El mensaje es requerido.';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Procesar envío del formulario
      setSubmitted(true);
    }
  };

  return (
    <motion.div 
      className="contact-section" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <Container maxWidth="lg" style={{ marginTop: '40px', marginBottom: '40px' }}>
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom
          style={{ 
            color: '#ffffff',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }}
        >
          Contact Information
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Typography 
              variant="h6"
              style={{ 
                color: '#e0e0e0',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
              }}
            >
              Phone: +52 5515317677
            </Typography>
          </Grid>
          <Grid item>
            <Typography 
              variant="h6"
              style={{ 
                color: '#e0e0e0',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
              }}
            >
              Mobile: +52 55 9422 9268
            </Typography>
          </Grid>
          <Grid item>
            <Typography 
              variant="h6"
              style={{ 
                color: '#e0e0e0',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
              }}
            >
              Email: ramvallugo@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Contáctame
        </Typography>
        {submitted && <Alert severity="success">Mensaje enviado con éxito.</Alert>}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="nombre"
                label="Nombre"
                fullWidth
                value={form.nombre}
                onChange={handleChange}
                error={!!errors.nombre}
                helperText={errors.nombre}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                fullWidth
                value={form.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="asunto"
                label="Asunto"
                fullWidth
                value={form.asunto}
                onChange={handleChange}
                error={!!errors.asunto}
                helperText={errors.asunto}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="mensaje"
                label="Mensaje"
                fullWidth
                multiline
                rows={4}
                value={form.mensaje}
                onChange={handleChange}
                error={!!errors.mensaje}
                helperText={errors.mensaje}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Enviar Mensaje
          </Button>
        </form>
      </Container>

      <Container maxWidth="lg" style={{ marginTop: '40px', marginBottom: '40px' }} id="contact">
        <Typography variant="h4" align="center" gutterBottom>
          Contáctame
        </Typography>
        <Grid container justifyContent="center">
          <Grid item>
            <Button
              startIcon={<FaGithub />}
              size="large"
              href="https://github.com/RamNetSec"
              className="contact-button"
              variant="contained"
            >
              Github
            </Button>
            <Button
              startIcon={<FaLinkedin />}
              size="large"
              href="https://www.linkedin.com/in/ramnetsecurity/"
              className="contact-button"
              variant="contained"
            >
              LinkedIn
            </Button>
            <Button
              startIcon={<FaGithub />}
              size="large"
              href="https://github.com/RamNetSec/Portfolio"
              className="contact-button"
              variant="contained"
            >
              Proyecto Portfolio
            </Button>
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
};

export default React.memo(ContactSection);
