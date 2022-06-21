import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor',
      day: 'Feb 5 at 2',
      reminder: true,
    }
  ])

  const addTask = (task) => {
    console.log(task)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==
     id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  return (
    <div className="container">
      <Header title='Task'/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder}/>
      ) : (
        'No Tasks To Show')}
    </div>
  );
}

export default App;
