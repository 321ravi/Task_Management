// src/components/TaskForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const TaskForm = ({ task, handleClose }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = { title, description, dueDate };

    try {
      await axios.put(`http://localhost:3001/tasks/${task._id}`, updatedTask);
      handleClose(); // Close the form on success
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
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
      <Button type="submit" variant="contained" color="primary">
        Save Task
      </Button>
    </Box>
  );
};

export default TaskForm;
