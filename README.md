# Task Management Application

## Overview

The Task Management Application is a web-based tool for managing tasks efficiently. Built with React.js on the front end and Express.js with MongoDB on the back end, this application allows users to create, edit, delete, and view tasks.

## Features

- **Create Task**: Add new tasks with a title, description, and due date.
- **Edit Task**: Modify the details of existing tasks.
- **Delete Task**: Remove tasks from the list.
- **Show Tasks**: View a list of all tasks with options to edit or delete.

## Tech Stack

- **Frontend**: React.js, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Installation

### Prerequisites

- Node.js and npm
- MongoDB

### Frontend

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/task-management-app.git
    ```

2. Navigate to the frontend directory:
    ```bash
    cd task-management-app/frontend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the React application:
    ```bash
    npm start
    ```

### Backend

1. Navigate to the backend directory:
    ```bash
    cd task-management-app/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the Express server:
    ```bash
    npm start
    ```

4. Ensure MongoDB is running locally on the default port (`27017`).

## API Endpoints

### Tasks

- **Get All Tasks**: `GET /tasks`
- **Create Task**: `POST /tasks`
- **Update Task**: `PUT /tasks/:id`
- **Delete Task**: `DELETE /tasks/:id`

## Usage

1. Navigate to the landing page to access the main functionalities:
    - **Create Task**: Add a new task.
    - **Edit Task**: Modify existing tasks.
    - **Delete Task**: Remove tasks from the list.
    - **Show Tasks**: View and manage all tasks.

2. Use the provided buttons to navigate between functionalities.

## Responsive Design

The application is designed to be responsive and should work well on both desktop and mobile devices. The modals and task lists are optimized for various screen sizes.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please create a pull request or open an issue.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [your email address].
