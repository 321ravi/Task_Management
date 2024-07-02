const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3001;
const mongoURI = 'mongodb://127.0.0.1:27017/task_manager';

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Enable Mongoose debug mode
mongoose.set('debug', true);

// MongoDB Connection
mongoose.connect(mongoURI, {})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Task Schema and Model
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date
});

const Task = mongoose.model('Task', taskSchema);

// Routes
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/tasks', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.get('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task == null) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task == null) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (req.body.title != null) {
      task.title = req.body.title;
    }
    if (req.body.description != null) {
      task.description = req.body.description;
    }
    if (req.body.dueDate != null) {
      task.dueDate = req.body.dueDate;
    }

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;
    console.log(`Received delete request for ID: ${id}`);
    try {
      const result = await Task.findByIdAndDelete(id);
      if (result) {
        console.log(`Task with ID: ${id} deleted successfully`);
        res.status(200).json({ message: 'Task deleted successfully' });
      } else {
        console.log(`Task with ID: ${id} not found`);
        res.status(404).json({ message: 'Task not found' });
      }
    } catch (error) {
      console.error("Error deleting task:", error);
      res.status(500).json({ message: 'Error deleting task', error: error.message });
    }
  });
  
  
  

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
