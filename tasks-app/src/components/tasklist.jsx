import TaskItem from "./taskitem";

export default function TaskList({ tasks, deleteTask, toggleStatus }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleStatus={toggleStatus}
        />
      ))}
    </ul>
  );
}
