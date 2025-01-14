# doIt - A Todo Application

## Overview

This is a simple React-based Todo application. The app allows users to:
- Add new todos.
- Edit existing todos.
- Delete todos.
- Mark todos as completed.
- Toggle between showing completed and pending todos.
- Persist todos in local storage for data retention after page refresh.

The app uses **React** for the frontend and **localStorage** for persistence.

## Installation

### Step 1: Clone the repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/thevoidop/doIt.git
```

### Step 2: Install dependencies

Navigate into the project directory and install the required dependencies:

```bash
cd doIt
npm install
```

### Step 3: Start the development server

Run the following command to start the app locally:

```bash
npm run dev
```

This will run the app in development mode and you can open it in your browser at **http://localhost:5173**.

## Features

### 1. Add Todo

You can add a new todo by typing it into the input field and clicking the **Save** button.

### 2. Edit Todo

Click the **Edit** button next to a todo to modify its text. The todo will be updated upon clicking save.

### 3. Delete Todo

Click the **Delete** button to remove a todo from the list.

### 4. Mark Todo as Completed

You can mark a todo as completed by checking the checkbox next to the todo. Completed todos will have a line-through style.

### 5. Show/Hide Completed Todos

There is a checkbox that allows you to toggle the visibility of completed todos. If unchecked, only pending todos will be displayed.

## Folder Structure

```
doIt/
├── public/                # Public assets like index.html, images
├── src/                   # React components and other source code
│   ├── components/        # Components like Navbar, TodoList, etc.
│   ├── App.css            # Custom CSS styles
│   ├── App.js             # Main App component
│   └── index.js           # Entry point for React
├── package.json           # Project configuration
└── README.md              # This file
```

## Technology Stack

- **React**: For building the user interface.
- **localStorage**: To persist data across page refreshes.
