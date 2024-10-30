// Archivo App.js
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  LinearProgress,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './App.css';
import './styles.css'; // Archivo de estilos adicional
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { School, Work, CheckCircle } from '@mui/icons-material';
import { Typewriter } from 'react-simple-typewriter';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// Actualización del tema a una paleta más elegante, mate, oscura y roja
const adwaitaTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#b30000', // Rojo mate
    },
    secondary: {
      main: '#ff4d4d', // Rojo claro
    },
    background: {
      default: '#1a1a1a', // Fondo aún más oscuro
      paper: '#2e2e2e',
    },
    text: {
      primary: '#e0e0e0', // Texto más claro
      secondary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Tipografía elegante
  },
});

// Componente principal
function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const animationDuration = 1; // Duración constante para las animaciones

  // Efecto para manejar el progreso de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Profile', href: '#profile' },
    { text: 'Contact', href: '#contact' },
    // Add more links as needed
  ];

  return (
    <ThemeProvider theme={adwaitaTheme}>
      <div>
        {/* Indicador de progreso de scroll */}
        <LinearProgress
          variant="determinate"
          value={scrollProgress}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1300 }}
        />

        {/* AppBar con animación de desvanecimiento */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <AppBar position="fixed" className="app-bar">
            <Toolbar>
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                Ramses Valdez - Portfolio
              </Typography>
              {isMobile ? (
                <>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                  >
                    <List>
                      {menuItems.map((item) => (
                        <ListItem button key={item.text} onClick={toggleDrawer(false)}>
                          <ListItemText>
                            <a href={item.href} style={{ textDecoration: 'none', color: '#ff4d4d' }}>
                              {item.text}
                            </a>
                          </ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  </Drawer>
                </>
              ) : (
                <>
                  <Button color="inherit" href="#profile">Profile</Button>
                  <Button color="inherit" href="#contact">Contact</Button>
                </>
              )}
            </Toolbar>
          </AppBar>
        </motion.div>

        {/* Sección del Hero con efecto de escritura */}
        <Container maxWidth="lg" className="hero-section">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: animationDuration }}
              >
                <Typography variant="h3" gutterBottom>
                  <Typewriter
                    words={['Hello, I am Ramses Valdez']}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </Typography>
                <Typography variant="h5" color="textSecondary" paragraph>
                  Software development technician and cybersecurity apprentice.
                  I am passionate about creating innovative and secure solutions.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} className="canvas-container">
              {/* Reemplazar el objeto 3D por una imagen con estilos manejados por CSS */}
              <img
                src="https://avatars.githubusercontent.com/u/107959089?s=400&u=9a2acd0baa3c9e4017343acb890fcf598e4e2860&v=4"
                alt="RamNetSec"
              />
            </Grid>
          </Grid>
        </Container>

        {/* Secciones restantes con mejoras de responsividad */}
        <motion.div id="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {/* Nueva sección de Perfil Personal */}
          <Container maxWidth="lg" style={{ marginTop: '80px' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Personal Profile
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              I am a software development technician and cybersecurity apprentice, currently pursuing a degree in Software Development at Universidad de Insurgentes. I seek to collaborate in an innovative company where I can contribute creativity and up-to-date knowledge to improve efficiency and achieve goals, offering a fresh perspective and experience in development and information security projects.
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              <strong>Ramses Valdez L.</strong><br />
              Software Development Intern<br />
              Phone: +52 5515317677<br />
              Mobile: +52 55 9422 9268<br />
              Email: ramvallugo@gmail.com
            </Typography>
          </Container>
        </motion.div>

        <motion.div id="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {/* Sección de Información de Contacto */}
          <Container maxWidth="lg" style={{ marginTop: '40px' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Contact Information
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Typography variant="h6">Phone: +52 5515317677</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Mobile: +52 55 9422 9268</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Email: ramvallugo@gmail.com</Typography>
              </Grid>
            </Grid>
          </Container>

          {/* Sección de Contacto */}
          <Container maxWidth="lg" style={{ marginTop: '40px', marginBottom: '40px' }} id="contact">
            <Typography variant="h4" align="center" gutterBottom>
              Contact Me
            </Typography>
            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  startIcon={<FaGithub />}
                  size="large"
                  href="https://github.com/RamNetSec"
                  style={{ margin: '10px', backgroundColor: '#b30000' }}
                  variant="contained"
                >
                  Github
                </Button>
                <Button
                  startIcon={<FaLinkedin />}
                  size="large"
                  href="https://www.linkedin.com/in/ramnetsecurity/"
                  style={{ margin: '10px', backgroundColor: '#b30000' }}
                  variant="contained"
                >
                  LinkedIn
                </Button>
                <Button
                  startIcon={<FaGithub />}
                  size="large"
                  href="https://github.com/RamNetSec/Portfolio"
                  style={{ margin: '10px', backgroundColor: '#b30000' }}
                  variant="contained"
                >
                  Portfolio Project
                </Button>
              </Grid>
            </Grid>
          </Container>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {/* Sección de Habilidades con barras de progreso animadas */}
          <Container maxWidth="lg" style={{ marginTop: '40px' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Habilidades Técnicas
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} md={8}>
                <Card>
                  <CardContent>
                    {/* Barra de progreso para Linux */}
                    <Typography variant="h6">Linux</Typography>
                    <LinearProgress variant="determinate" value={80} className="skill-progress" />
                    {/* Barra de progreso para Java */}
                    <Typography variant="h6">Java</Typography>
                    <LinearProgress variant="determinate" value={70} className="skill-progress" />
                    {/* Barra de progreso para Python */}
                    <Typography variant="h6">Python</Typography>
                    <LinearProgress variant="determinate" value={65} className="skill-progress" />
                    {/* Barra de progreso para Git */}
                    <Typography variant="h6">Git</Typography>
                    <LinearProgress variant="determinate" value={75} className="skill-progress" />
                    {/* Barra de progreso para Bash Scripting */}
                    <Typography variant="h6">Bash Scripting</Typography>
                    <LinearProgress variant="determinate" value={60} className="skill-progress" />
                    {/* Agrega más habilidades según sea necesario */}
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {/* Sección de Especialidades */}
          <Container maxWidth="lg" style={{ marginTop: '40px' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Especialidades
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <Work /> Especialidades
                    </Typography>
                    <ul className="custom-list">
                      <li>
                        <CheckCircle className="list-icon" />
                        Linux, Java, Python, Git, Bash Scripting (Nivel Intermedio)
                      </li>
                      <li>
                        <CheckCircle className="list-icon" />
                        SQL, Visual Studio, Photoshop (Nivel Intermedio)
                      </li>
                      <li>
                        <CheckCircle className="list-icon" />
                        Microsoft Code (Nivel Avanzado), Microsoft Excel (Nivel Básico)
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      <School /> Historia Académica
                    </Typography>
                    <Typography variant="h6">Universidad</Typography>
                    <Typography>Licenciatura en Desarrollo de Software - Universidad de Insurgentes</Typography>
                    <Typography>Fecha de Inicio: 11 de Noviembre de 2024</Typography>
                    <Typography>Graduación Esperada: Noviembre 2027</Typography>
                    <Typography variant="h6" style={{ marginTop: '20px' }}>Preparatoria</Typography>
                    <Typography>Técnico en Desarrollo de Software - CECYT 9</Typography>
                    <Typography>Promedio: 8.33</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
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
                      <li>
                        <CheckCircle className="list-icon" />
                        Este certificado reconoce a Ramses Rafael Valdez Lugo por completar exitosamente el programa NDG Linux Unhatched a través de Cisco Networking Academy.
                      </li>
                      <li>
                        <CheckCircle className="list-icon" />
                        Laura Quintana, Vice President y General Manager, Cisco Networking Academy - Fecha de Finalización: 09 Mayo 2022
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </motion.div>

        <motion.div id="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          {/* Sección de Contacto */}
          <Container maxWidth="lg" style={{ marginTop: '40px', marginBottom: '40px' }} id="contact">
            <Typography variant="h4" align="center" gutterBottom>
              Contact Me
            </Typography>
            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  startIcon={<FaGithub />}
                  size="large"
                  href="https://github.com/RamNetSec"
                  style={{ margin: '10px', backgroundColor: '#b30000' }}
                  variant="contained"
                >
                  Github
                </Button>
                <Button
                  startIcon={<FaLinkedin />}
                  size="large"
                  href="https://www.linkedin.com/in/ramnetsecurity/"
                  style={{ margin: '10px', backgroundColor: '#b30000' }}
                  variant="contained"
                >
                  LinkedIn
                </Button>
                <Button
                  startIcon={<FaGithub />}
                  size="large"
                  href="https://github.com/RamNetSec/Portfolio"
                  style={{ margin: '10px', backgroundColor: '#b30000' }}
                  variant="contained"
                >
                  Portfolio Project
                </Button>
              </Grid>
            </Grid>
          </Container>
        </motion.div>
      </div>
    </ThemeProvider>
  );
}

export default App;
