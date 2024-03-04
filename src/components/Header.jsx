import { Button } from './Button'

export function Header({ title }) {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' />
    </header>
  )
}
