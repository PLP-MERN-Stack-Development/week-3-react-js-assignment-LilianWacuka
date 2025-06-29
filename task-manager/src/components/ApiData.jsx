import React, { useState, useEffect, useRef } from 'react';

const ApiData = ({ tasks = [] }) => {
  const [visibleTasks, setVisibleTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const limit = 10;
  const loader = useRef(null);

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setVisibleTasks(filteredTasks.slice(0, page * limit));
  }, [filteredTasks, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 1.0 }
    );
    if (loader.current) observer.observe(loader.current);
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loader]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setPage(1);
        }}
        placeholder="Search tasks..."
        className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
      />

      <ul className="space-y-4">
        {visibleTasks.map(task => (
          <li key={task.id} className="border p-4 rounded shadow">
            <h3 className="font-bold">{task.text}</h3>
            <p>{task.completed ? "Completed" : "Active"}</p>
          </li>
        ))}
      </ul>
      <div ref={loader} className="h-10" />
    </div>
  );
};

export default ApiData;
