import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, CssBaseline, Snackbar, Alert } from '@mui/material';
import axios from 'axios';
import './CreateTaskPage.css';

const CreateTaskPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, dueDate };

    try {
      await axios.post('http://localhost:3001/tasks', newTask);
      setAlertMessage('Task created successfully!');
      setAlertSeverity('success');
      setOpen(true);
      setTitle('');
      setDescription('');
      setDueDate('');
    } catch (error) {
      console.error("Error creating task:", error);
      setAlertMessage('Failed to create task.');
      setAlertSeverity('error');
      setOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpen(false);
  };

  return (
    <Container component="main" maxWidth="md" className="create-task-page">
      <CssBaseline />
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Create Task
      </Typography>
      <Box component="form" onSubmit={handleSubmit} className="task-form">
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={4}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          required
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" className="submit-button">
          Save Task
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={alertSeverity}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default CreateTaskPage;
