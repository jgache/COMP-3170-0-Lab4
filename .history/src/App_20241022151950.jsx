import { useState } from 'react';
import TaskForm from './components/TaskForm.jsx';
import TaskList from './components/TaskList.jsx';


function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (description) => {
        const newTask = { id: Date.now(), description, completed: false };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const toggleComplete = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const pendingTasks = tasks.filter((task) => !task.completed).length;

    return (
        <div>
            <h1>Day Planner</h1>
            {/* Dynamically show "Pending Task" or "Pending Tasks" based on count */}
            <h2>
                {pendingTasks === 1
                    ? `Pending Task: ${pendingTasks}`
                    : `Pending Tasks: ${pendingTasks}`}
            </h2>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
