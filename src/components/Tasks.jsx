export function Tasks({ tasks }) {
  return tasks.map((task) => <div key={task.id}>{task.name}</div>)
}
