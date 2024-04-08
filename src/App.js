import "./App.css"

import { useState }from 'react'
import Task from "./Task.js"

const App = () => {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const handleChange = (event) => {
    setNewTask(event.target.value)

  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    }
  if(task.taskName.trim() !== "") {
      setTodoList([...todoList, task])
    }

    setNewTask("")
  }

  const deletTask = (taskId) => {
    setTodoList(todoList.filter((currentTask) => taskId !== currentTask.id))
  }
  

  return(
    <div className="App">
      <div className="addTaskDiv">
        <h1 className="TaskTitle">Task List</h1>
        <div className="addTaskFunc">
          <button className="addTaskButton" onClick={addTask}>Add task</button> 
          <input  className="addTaskInput" onChange={handleChange} onKeyDown={handleKeyPress} value={newTask} placeholder="Todo task"/>
        </ div>
      </div>
        <div className="taskList">
          <h1 className="taskTitle">Your Tasks:</h1>
          {todoList.map((task) => {
            return <Task taskName={task.taskName} deletTask={deletTask} id={task.id}/>
          })}
        </div>
      <div className="footer">
        <h1 className="footerText">Made by: Matheus</h1>
      </div>
    </div>
  )
}

export default App