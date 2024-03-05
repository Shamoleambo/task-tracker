import { useState } from 'react'

export function AddTask({ onAddTask }) {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }
    if (!day) {
      alert('Please add a day')
      return
    }

    onAddTask({ text, day, reminder })
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label htmlFor=''>Task</label>
        <input
          type='text'
          placeholder='Add Task'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
      <div className='form-control'>
        <label htmlFor=''>Day & Time</label>
        <input
          type='text'
          placeholder='Add Day & Time'
          onChange={(e) => setDay(e.target.value)}
          value={day}
        />
      </div>
      <div className='form-control form-control-check'>
        <label htmlFor=''>Set Reminder</label>
        <input
          type='checkbox'
          onChange={(e) => setReminder(e.currentTarget.checked)}
          checked={reminder}
        />
      </div>
      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}
