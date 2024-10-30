import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All'); // New filter state

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

  // Filter tasks based on the filter state
  const filteredTasks = tasks.filter(task => {
      if (filter === 'Completed') return task.completed;
      if (filter === 'Pending') return !task.completed;
      return true; // For "All"
  });

  return (
      <div className="app">
          <h1>Task Planner</h1>
          <TaskForm addTask={addTask} />
          <div>
              <button onClick={() => setFilter('All')}>All</button>
              <button onClick={() => setFilter('Pending')}>Pending</button>
              <button onClick={() => setFilter('Completed')}>Completed</button>
          </div>
          <TaskList
              tasks={filteredTasks}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
          />
      </div>
  );
}

export default App;