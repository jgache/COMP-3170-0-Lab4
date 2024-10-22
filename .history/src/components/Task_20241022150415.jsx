import { useState } from 'react';

function Task({ task, toggleComplete, deleteTask }) {
    return (
        <div className="task" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            <span>{task.description}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}

function TaskForm({ addTask }) {
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskDescription.trim() === '') return;
        addTask(taskDescription);
        setTaskDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                placeholder="Enter a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
}

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

    return (
        <div>
            <h1>Day Planner</h1>
            <TaskForm addTask={addTask} />
            <div className="task-list">
                {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        toggleComplete={toggleComplete}
                        deleteTask={deleteTask}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
