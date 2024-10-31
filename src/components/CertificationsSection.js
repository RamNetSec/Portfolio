import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    institution: "Cisco",
    image: "URL_DE_IMAGEN_CERTIFICACION_CISCO",
    description: "",
  },
  {
    title: "Curso Básico de Seguridad Informática para Empresas",
    institution: "Platzi",
    image: "URL_DE_IMAGEN_CERTIFICACION_PLATZI",
    description: "",
  },
  {
    title: "NDG Linux Unhatched Español 0522a",
    institution: "Cisco Virtual Academy",
    image: "URL_DE_IMAGEN_CERTIFICACION_CISCO_VIRTUAL_ACADEMY",
    description: "",
  },
];

export default React.memo(CertificationsSection);
