import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './index.css'; 

function App() {
    // Initialize tasks with a preloaded completed task
    const [tasks, setTasks] = useState([
        { id: 1, description: "Shama Lab 04", completed: true }
    ]);

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
        <>
            <div className="app-container">
                <h1>To-Do List</h1>
                <div className="task-input-container">

                    <h4>
                        {pendingTasks === 1
                            ? `Pending Task: ${pendingTasks}`
                            : `Pending Tasks: ${pendingTasks}`}
                    </h4>
                    <TaskForm addTask={addTask} />
                </div>
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/d/df/Lama_glama_5zz.jpg" 
                alt="Llama" 
                className="llama-image" 
            />
                <TaskList 
                    tasks={tasks} 
                    toggleComplete={toggleComplete} 
                    deleteTask={deleteTask} 
                />
            </div>
        </>
    );
}

export default App;
