function Task({ task, toggleComplete, deleteTask }) {
    return (
        <div className="task">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            {/* Apply text-decoration only to the description */}
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.description}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}

export default Task;
