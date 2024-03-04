import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { AddTask } from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Shopping', day: 'Apr 3rd at 3pm', reminder: false },
    {
      id: 2,
      text: 'Doctor Check up',
      day: 'Mar 24th at 7:30am',
      reminder: false
    },
    { id: 3, text: 'Vet', day: 'Mar 12th at 12:30pm', reminder: false }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task
      })
    )
  }

  return (
    <>
      <div className='container'>
        <Header title='Task Tracker' />
        <AddTask />
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          'No Tasks to Show'
        )}
      </div>
    </>
  )
}

export default App
