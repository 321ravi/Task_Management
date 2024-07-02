// src/components/TaskList.js
import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete, Edit, Visibility } from '@mui/icons-material';

const TaskList = ({ tasks, onView, onEdit, onDelete }) => (
  <List>
    {tasks.map((task, index) => (
      <ListItem key={index} divider>
        <ListItemText primary={task.title} secondary={task.dueDate} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="view" onClick={() => onView(index)}>
            <Visibility />
          </IconButton>
          <IconButton edge="end" aria-label="edit" onClick={() => onEdit(index)}>
            <Edit />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={() => onDelete(index)}>
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
);

export default TaskList;
