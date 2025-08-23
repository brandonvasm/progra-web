export default function TaskItem({ task, deleteTask, toggleStatus }) {
  return (
    <li>
      <span
        style={{ 
            textDecoration: task.status === 'Completed' ? 'line-through' : 'none' 
        }}
      >
        {task.name}
      </span>
      <button onClick={() => 
        toggleStatus(task.id)}>
        {task.status === 'Pending' ? 'Complete' : 'Undo'}
      </button>
      <button onClick={() => deleteTask(task.id)}
        >Delete</button>
    </li>
  );
}
