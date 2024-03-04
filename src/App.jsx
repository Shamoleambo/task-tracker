import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Shopping', day: 'Apr 3rd at 3pm' },
    { id: 2, text: 'Doctor Check up', day: 'Mar 24th at 7:30am' },
    { id: 3, text: 'Vet', day: 'Mar 12th at 12:30pm' }
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
