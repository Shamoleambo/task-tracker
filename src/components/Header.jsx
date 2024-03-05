import { Button } from './Button'

export function Header({ title, showAddTask, toggleForm }) {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={showAddTask ? 'red' : 'green'}
        text={showAddTask ? 'Close' : 'Add'}
        onClick={toggleForm}
      />
    </header>
  )
}
