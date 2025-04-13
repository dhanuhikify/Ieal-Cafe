import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';

const AdminDashboard = () => {
  const stats = [
    { title: 'Users', description: 'Manage all registered users' },
    { title: 'Orders', description: 'Track and update customer orders' },
    { title: 'Products', description: 'Add or edit ice cream products' },
  ];

  return (
    <Box sx={{ backgroundColor: '#f5f7fa', minHeight: '100vh', py: 5 }}>
      <Container>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold', color: '#2b2d42' }}>
          🧁 Admin Dashboard
        </Typography>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Paper
                elevation={4}
                sx={{
                  padding: 3,
                  borderRadius: 3,
                  textAlign: 'center',
                  background: '#ffffff',
                  height: '100%',
                  transition: '0.3s ease',
                  '&:hover': {
                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ mb: 1, color: '#3f51b5' }}>
                  {stat.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdminDashboard;
