import { useState, useEffect } from 'react';
import TaskList from './components/tasklist';
import TaskFilter from './components/taskfilter';


export default function TasksApp() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : [];
  });


  const [filter, setFilter] = useState('All');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (name) => {
    const newTask = {
      id: crypto.randomUUID(), 
      name: name,             
      status: 'Pending'        
    };
    setTasks([...tasks, newTask]);
  };


  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const Status = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' }
          : task
      )
    );
  };


  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    return filter === 'Pending' ? task.status === 'Pending' : task.status === 'Completed';
  });

  return (
    <div
      style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      gap: '20px', 
      backgroundColor: 'white', 
      padding: '20px'
    }}
    >
      <h1>Tasks</h1>
      <TaskFilter filter={filter} setFilter={setFilter} />


      <TaskList tasks={filteredTasks} deleteTask={deleteTask} toggleStatus={Status} />


      <input
        type="text"
        placeholder="New task"
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.target.value.trim() !== '') {
            addTask(e.target.value);
            e.target.value = '';
          }
        }}
      />
    </div>
  );
}
