import React from 'react';
import { Container, Typography, Button, Box, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="md" className="landing-page">
      <CssBaseline />
      <Typography variant="h3" component="h1" align="center" gutterBottom className="app-name">
        Task Manager
      </Typography>
      <Box className="button-group">
        <Button variant="contained" color="primary" onClick={() => navigate('/create')} className="landing-button">
          Create Task
        </Button>
        <Button variant="contained" color="secondary" onClick={() => navigate('/edit')} className="landing-button">
          Edit Task
        </Button>
        <Button variant="contained" color="error" onClick={() => navigate('/delete')} className="landing-button">
          Delete Task
        </Button>
        <Button variant="contained" color="info" onClick={() => navigate('/show')} className="landing-button">
          Show Tasks
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;
