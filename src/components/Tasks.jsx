import { Task } from './Task'

export function Tasks({ tasks }) {
  return tasks.map((task) => <Task key={task.id} task={task} />)
}
