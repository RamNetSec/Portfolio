// Archivo App.js
import React, { useState, useEffect, Suspense, lazy } from 'react';
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

// Lazy load components
import ProfileSection from './components/ProfileSection';
import HeroSection from './components/HeroSection';
import ContactSection from './components/ContactSection';
import AcademicHistorySection from './components/AcademicHistorySection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';

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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
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
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)'
          }
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
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '80px 24px', // Más espaciado vertical
          '@media (min-width: 600px)': {
            padding: '100px 32px',
          },
        },
      },
    },
  },
});

// Componente principal
const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isValidDomain, setIsValidDomain] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Primer useEffect - verificación de dominio
  useEffect(() => {
    const checkDomain = () => {
      const allowedDomain = 'a1.ramnetsec.com';
      const currentDomain = window.location.hostname;
      
      if (currentDomain !== allowedDomain) {
        window.location.href = `https://${allowedDomain}`;
        return;
      }
      
      setIsValidDomain(true);
    };

    checkDomain();
  }, []);

  // Segundo useEffect - manejo del scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tercer useEffect - efectos gaussianos
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/gaussianEffects.js';
    script.async = true;
    
    const handleScriptLoad = () => {
      console.log('Efectos gaussianos cargados');
      if (window.initGaussianEffects) {
        window.initGaussianEffects();
      }
    };

    script.addEventListener('load', handleScriptLoad);
    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', handleScriptLoad);
      document.body.removeChild(script);
      const container = document.querySelector('.gaussian-container');
      if (container) {
        container.remove();
      }
    };
  }, []);

  // Resto de funciones auxiliares
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const scrollToSection = (elementId) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setDrawerOpen(false);
  };

  // Si el dominio no es válido, retornar null temprano
  if (!isValidDomain) {
    return null;
  }

  // Modificar menuItems para usar la nueva función de scroll
  const menuItems = [
    { text: 'Profile', id: '#profile' },
    { text: 'Skills', id: '#skills' },
    { text: 'Contact', id: '#contact' },
    { text: 'Academic History', id: '#academic-history' },
    { text: 'Portfolio', id: '#portfolio' },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="app-container">
        <div itemScope itemType="http://schema.org/Person">
          <meta itemProp="name" content="Ramses Valdez" />
          <meta itemProp="jobTitle" content="Desarrollador de Software" />
          <meta itemProp="description" content="Desarrollador de Software especializado en ciberseguridad" />
          
          {/* Indicador de progreso de scroll */}
          <LinearProgress
            variant="determinate"
            value={scrollProgress}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1300 }}
          />

          {/* AppBar con animación de desvanecimiento */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <motion.div 
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
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
                            <ListItem 
                              button 
                              key={item.text} 
                              onClick={() => scrollToSection(item.id)}
                            >
                              <ListItemText primary={item.text} />
                            </ListItem>
                          ))}
                        </List>
                      </Drawer>
                    </>
                  ) : (
                    <>
                      <Button color="inherit" onClick={() => scrollToSection('#profile')}>Profile</Button>
                      <Button color="inherit" onClick={() => scrollToSection('#skills')}>Skills</Button>
                      <Button color="inherit" onClick={() => scrollToSection('#contact')}>Contact</Button>
                      <Button color="inherit" onClick={() => scrollToSection('#academic-history')}>Academic History</Button> {/* Agregar botón al menú */}
                    </>
                  )}
                </Toolbar>
              </AppBar>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <main className="main-content">
            <Suspense fallback={<div className="loading-skeleton">Cargando...</div>}>
              <HeroSection />
              <div className="content-sections">
                <ProfileSection />
                <SkillsSection /> {/* Agregar aquí */}
                <PortfolioSection />
                <AcademicHistorySection className="fade-on-scroll" /> {/* Renderizar nuevo componente */}
                <ContactSection />
              </div>
            </Suspense>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
