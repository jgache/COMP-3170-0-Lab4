import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Shama Lab 04", completed: true },
  ]);

  const [filter, setFilter] = useState('All'); // New filter state for task view
  

  const addTask = (task) => {
      setTasks([...tasks, task]);
  };

  const toggleComplete = (taskId) => {
      setTasks(tasks.map(task =>
          task.id === taskId ? { ...task, completed: !task.completed } : task
      ));
  };

  const deleteTask = (taskId) => {
      setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Filter tasks based on the selected filter type
  const getFilteredTasks = () => {
      if (filter === 'Completed') return tasks.filter(task => task.completed);
      if (filter === 'Pending') return tasks.filter(task => !task.completed);
      return tasks; // All tasks
  };

  return (
      <div className="app-container">
          <h1>To-Do List V2</h1>
          <TaskForm addTask={addTask} />
          <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/df/Lama_glama_5zz.jpg"
          alt="Llama"
          className="llama-image"
        />

          {/* Filter Buttons */}
          <div>
              <button onClick={() => setFilter('All')}>All</button>
              <button onClick={() => setFilter('Pending')}>Pending</button>
              <button onClick={() => setFilter('Completed')}>Completed</button>
          </div>

          {/* Pass filtered tasks to TaskList */}
          <TaskList
              tasks={getFilteredTasks()}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
          />
      </div>
  );
}

export default App;