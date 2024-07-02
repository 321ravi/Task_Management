import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, IconButton, Box, Modal, TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import './ShowTaskpage.css';

const ShowTasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editDueDate, setEditDueDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:3001/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(`Attempting to delete task with id: ${id}`); // Debugging log
      const response = await axios.delete(`http://localhost:3001/tasks/${id}`);
      console.log(`Delete response: ${response.status}`); // Debugging log
      if (response.status === 200) {
        setTasks(tasks.filter(task => task._id !== id));
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  

  const handleEdit = (task) => {
    setSelectedTask(task);
    setEditTitle(task.title);
    setEditDescription(task.description);
    setEditDueDate(task.dueDate.substring(0, 10));
    setModalOpen(true);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3001/tasks/${selectedTask._id}`, {
        title: editTitle,
        description: editDescription,
        dueDate: editDueDate
      });
      setTasks(tasks.map(task =>
        task._id === selectedTask._id ? { ...task, title: editTitle, description: editDescription, dueDate: editDueDate } : task
      ));
      setModalOpen(false);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Show Tasks
      </Typography>
      <List>
        {tasks.map(task => (
          <ListItem key={task._id} className="list-item">
            <ListItemText
              primary={task.title}
              secondary={`Due: ${new Date(task.dueDate).toLocaleDateString()}`}
            />
            <IconButton color="primary" onClick={() => handleEdit(task)}>
              <EditIcon />
            </IconButton>
            <IconButton color="error" onClick={() => handleDelete(task._id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box className="modal-content">
          <Typography variant="h6" component="h2">
            Edit Task
          </Typography>
          <TextField
            label="Title"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <TextField
            label="Due Date"
            type="date"
            value={editDueDate}
            onChange={(e) => setEditDueDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            fullWidth
            margin="normal"
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={handleUpdate}>
              Update
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

export default ShowTasksPage;
