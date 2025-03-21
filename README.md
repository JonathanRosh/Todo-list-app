# Todo List App

This is a simple Todo List app built using **Express.js**, **EJS** templating engine, and **body-parser** middleware. The app allows users to manage tasks by adding and removing them. Tasks can be categorized into "Today" and "Work" lists, providing a simple task management interface.

## Features

- **Add Tasks**: Users can add new tasks through a form.
- **Categorize Tasks**: Tasks can be categorized into "Today" and "Work" lists.
- **Clear Tasks**: The "Clear All" button clears the tasks for the current list.
- **Persistent Tasks**: Tasks persist until the page reloads, enabling simple task management.

## Technologies Used

- **Node.js** and **Express.js** for the backend server.
- **EJS** templating engine for rendering dynamic HTML pages.
- **Body-parser** middleware to parse the request body for form submissions.
- **HTML**, **CSS**, and **Bootstrap** for the front-end layout and design.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js**: Install Node.js from [here](https://nodejs.org/).
- **npm**: npm comes bundled with Node.js.

### Installing

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   cd todo-list-app

   ```

2. Install the required dependecies:

   ```bash
   npm install

   ```

3. Start the server:

   ```bash
   nodemon index.js
   ```

The app will run on http://localhost:3000.
