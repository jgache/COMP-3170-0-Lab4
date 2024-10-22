import { useState } from 'react';


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

export default TaskForm;
