import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { motion } from 'framer-motion';
import { Paper, Typography, Box } from '@mui/material';

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
        label: 'Nivel de Habilidad',
        data: data.map(item => item.level * 20),
        backgroundColor: 'rgba(255, 77, 77, 0.2)',
        borderColor: 'rgba(255, 77, 77, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 77, 77, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 77, 77, 1)',
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        pointLabels: {
          color: '#fff',
          font: {
            size: 12
          }
        },
        ticks: {
          color: '#fff',
          backdropColor: 'transparent'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#fff'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        callbacks: {
          label: function(context) {
            return `Nivel: ${context.parsed.r / 20}/5`;
          }
        }
      }
    }
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
          background: 'rgba(26, 26, 26, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 77, 77, 0.2)',
          borderRadius: '16px',
          height: '400px',
          position: 'relative'
        }}
      >
        <Typography variant="h6" gutterBottom align="center" sx={{ color: '#fff' }}>
          Habilidades Técnicas
        </Typography>
        <Box sx={{ position: 'relative', height: 'calc(100% - 40px)' }}>
          <Radar data={chartData} options={options} />
        </Box>
      </Paper>
    </motion.div>
  );
};

export default React.memo(RadarChart);
