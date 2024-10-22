import { useState } from 'react';

function TaskForm({ addTask }) {
    // TaskForm definition as above
}

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (description) => {
        const newTask = { id: Date.now(), description, completed: false };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    return (
        <div>
            <h1>Day Planner</h1>
            <TaskForm addTask={addTask} />
            <p>hi</p>
        </div>
    );
}

export default App;

