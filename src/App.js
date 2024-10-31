// Archivo App.js
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  LinearProgress,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './App.css';

// Importar 'motion' y 'MenuIcon'
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';

// Importar componentes
import ProfileSection from './components/ProfileSection';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import CertificationsSection from './components/CertificationsSection';
import AcademicHistorySection from './components/AcademicHistorySection'; // Nuevo componente
import SkillsSection from './components/SkillsSection'; // Agregar importación

// Actualización del tema a una paleta más elegante, mate, oscura y roja
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff4d4d',
    },
    secondary: {
      main: '#4a90e2',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 10, 10, 0.95)', // Más opaco
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(26, 26, 26, 0.95)', // Más opaco
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(26, 26, 26, 0.95)', // Más opaco
        },
      },
    },
  },
});

// Componente principal
function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  useEffect(() => {
    // Crear luces gaussianas
    const lights = [];
    const colors = ['#ff4d4d', '#4a90e2', '#50e3c2'];
    
    colors.forEach((color, i) => {
      const light = document.createElement('div');
      light.className = 'gaussian-light';
      light.style.backgroundColor = color;
      document.body.appendChild(light);
      lights.push(light);
    });

    const handleMouseMove = (e) => {
      lights.forEach((light, i) => {
        light.style.left = `${e.clientX + (i - 1) * 100}px`;
        light.style.top = `${e.clientY + (i - 1) * 100}px`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Profile', href: '#profile' },
    { text: 'Contact', href: '#contact' },
    { text: 'Academic History', href: '#academic-history' }, // Agregar enlace al menú
    // Add more links as needed
  ];

  return (
    <ThemeProvider theme={darkTheme}>
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
                  <Button color="inherit" href="#academic-history">Academic History</Button> {/* Agregar botón al menú */}
                </>
              )}
            </Toolbar>
          </AppBar>
        </motion.div>

        {/* Renderizar nuevos componentes */}
        <HeroSection />
        <ProfileSection />
        <SkillsSection /> {/* Agregar aquí */}
        <ContactSection />
        <CertificationsSection className="fade-on-scroll" />
        <AcademicHistorySection className="fade-on-scroll" /> {/* Renderizar nuevo componente */}

        {/* ...otras secciones si las hay... */}
      </div>
    </ThemeProvider>
  );
}

export default App;
