export default function TaskFilter({ filter, setFilter }) {
  return (
    <div>
      <button onClick={() => 
        setFilter('All')} disabled={filter === 'All'}>All</button>
      <button onClick={() => 
        setFilter('Pending')} disabled={filter === 'Pending'}>Pending</button>
      <button onClick={() => 
        setFilter('Completed')} disabled={filter === 'Completed'}>Completed</button>
    </div>
  );
}
