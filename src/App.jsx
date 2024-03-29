import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { AddTask } from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

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

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1
    setTasks((prevState) => [...prevState, { id, ...task }])
  }

  const toggleForm = () => {
    setShowAddTask(prevState => !prevState)
  }

  return (
    <>
      <div className='container'>
        <Header title='Task Tracker' showAddTask={showAddTask} toggleForm={toggleForm} />
        {showAddTask && <AddTask onAddTask={addTask} />}
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
