import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { Paper } from '@mui/material';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Habilidades',
        data: data.map(item => item.level * 20), // Convertir nivel a escala 0-100
        backgroundColor: 'rgba(255, 77, 77, 0.2)',
        borderColor: 'rgba(255, 77, 77, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 77, 77, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 77, 77, 1)'
      }
    ]
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        pointLabels: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            size: 14
          }
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
          backdropColor: 'transparent'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.8)'
        }
      }
    },
    animation: {
      duration: 2000
    },
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          background: 'rgba(26, 26, 26, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 77, 77, 0.2)',
          height: '400px'
        }}
      >
        <Radar data={chartData} options={options} />
      </Paper>
    </motion.div>
  );
};

export default RadarChart;
