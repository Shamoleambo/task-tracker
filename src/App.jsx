import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1' },
    { id: 2, name: 'Task 2' },
    { id: 3, name: 'Task 3' }
  ])

  return (
    <>
      <div className='container'>
        <Header title='Task Tracker' />
        <Tasks tasks={tasks} />
      </div>
    </>
  )
}

export default App
