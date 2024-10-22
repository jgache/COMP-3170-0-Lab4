import { useState } from 'react';
import TaskForm from './components/TaskForm';


function App() {
    const [tasks, setTasks] = useState([]);

    // Add new task
    const addTask = (description) => {
        const newTask = { id: Date.now(), description, completed: false };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    // Toggle task completion
    const toggleComplete = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // Delete a task
    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    // Count pending tasks
    const pendingTasks = tasks.filter((task) => !task.completed).length;

    return (
        <div>
            <h1>Day Planner</h1>
            <h2>Pending Tasks: {pendingTasks}</h2>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
