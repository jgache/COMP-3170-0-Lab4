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
            <h2>Pending Tasks: {pendingTasks}</h2>
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
