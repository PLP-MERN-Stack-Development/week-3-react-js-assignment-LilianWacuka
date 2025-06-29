// App.jsx
import { useState } from 'react';

import './App.css';

// Components
import Button from './components/Button';
import Navigation from './components/Navigation';
import Card from './components/Card';
import TaskManager from './components/TaskManager';
import Footer from './components/Footer';
import ApiData from './components/ApiData';

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);

  const handleTasksUpdate = (newTasks) => {
    setTasks(newTasks);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navigation />
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8" />
      </header>

      <main className="flex-grow px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center gap-8">
        <Card id="TaskManager">
          <div className="flex flex-col items-center text-center space-y-5">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setCount((count) => count - 1)}
                className="bg-red-500 hover:bg-red-600"
              ></Button>
              <span className="text-xl font-bold">{count}</span>
              <Button
                onClick={() => setCount((count) => count + 1)}
                className="bg-green-500 hover:bg-green-600"
              ></Button>
            </div>

            <p className="text-gray-500 dark:text-gray-400">
              <TaskManager onTasksChange={handleTasksUpdate} />
            </p>
          </div>
        </Card>

        <Card className="w-full max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">API Data</h2>
          <div className="text-gray-500 dark:text-gray-400">
            <ApiData tasks={tasks} />
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
}

export default App;
