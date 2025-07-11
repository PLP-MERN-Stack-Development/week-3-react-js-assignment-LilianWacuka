[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19808819&assignment_repo_type=AssignmentRepo)
# React.js and Tailwind CSS Assignment

This assignment focuses on building a responsive React application using JSX and Tailwind CSS, implementing component architecture, state management, hooks, and API integration.

## Assignment Overview

You will:
1. Set up a React project with Vite and Tailwind CSS
2. Create reusable UI components
3. Implement state management using React hooks
4. Integrate with external APIs
5. Style your application using Tailwind CSS

# PLP Task Manager
# live project: 
https://week-3-react-js-assignment-lilianwacuka-jdib.onrender.com/

A modern task management web application built with **React**, **Vite**, and **Tailwind CSS** as part of the Power Learn Project (PLP) Week 3 assignment.

## Features

- **Task Management:**  
  - Add, complete, and delete tasks  
  - Filter tasks (All, Active, Completed)  
  - Tasks are persisted in local storage

- **Reusable Components:**  
  - Custom `Button`, `Card`, `Navigation` (Navbar), and `Footer` components

- **Theme Support:**  
  - Light and dark mode toggle using React Context

- **API Integration:**  
  - Fetch and display data from a public API (JSONPlaceholder)  
  - Loading, error states, pagination, and search/filter

- **Responsive Design:**  
  - Styled with Tailwind CSS for a clean, modern look.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/plp-task-manager.git
   cd plp-task-manager/task-manager
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   # or
   npm install
   ```

3. **Start the development server:**
   ```sh
   pnpm run dev
   # or
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
task-manager/
├── public/
├── src/
│   ├── components/
│   │   ├── ApiData.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Navigation.jsx
│   │   └── TaskManager.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── index.html
├── package.json
└── README.md
```

## Usage

- **Add Tasks:** Use the input field and "Add Task" button.
- **Complete/Delete Tasks:** Use the checkbox or "Delete" button next to each task.
- **Filter Tasks:** Use the filter buttons (All, Active, Completed).
- **Toggle Theme:** Use the theme toggle button in the navigation bar.
- **API Data:** View and search API data in the "API Data" section.

## Customization

- Update API endpoints in `ApiData.jsx` for different data sources.
- Modify Tailwind classes for custom styling.
- Extend components for more features.

