import React from 'react';
import { Container, Typography, Button, Box, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="md" className="landing-page">
      <CssBaseline />
      <Typography variant="h2" component="h1" align="center" gutterBottom className="app-name">
        Task Manager
      </Typography>
      <Typography variant="h6" align="center" className="app-description">
        Welcome to Task Manager - Your go-to app for managing tasks efficiently and effectively. Create, edit, delete, and view tasks with ease!
      </Typography>
      <Box className="button-group">
        <Button variant="contained" color="primary" onClick={() => navigate('/create')} className="landing-button">
          Create Task
        </Button>
       
        
        <Button variant="contained" color="info" onClick={() => navigate('/show')} className="landing-button">
          Show Tasks
        </Button>
      </Box>
      <footer className="footer">
        <Typography variant="h6" align="center" className="footer-text">
          Task Manager - Making your task management simple and effective.
        </Typography>
      </footer>
    </Container>
  );
};

export default LandingPage;
