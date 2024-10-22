function Task({ task, toggleComplete, deleteTask }) {
    return (
        <div>
            <div className="task" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            <span>{task.description}</span>
          </div>

        </div>
         <button onClick={() => deleteTask(task.id)}>Delete</button>

    );
}

export default Task;
