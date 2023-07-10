import React, { useState } from 'react'
import { TaskAddInput } from "./TaskAddInput"
import { Tasks } from "./Tasks"

export const TaskHolder = () => {
    const [inputText, setInputText] = useState("");
    const [taskList, setTaskList] = useState([]);
  return (
    <div>  
      <p className="list-counter">total: {taskList.length}</p>
      <div className="task__wrapper">
       <TaskAddInput inputText={inputText} setInputText={setInputText} taskList={taskList} setTaskList={setTaskList}/>
       <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList} />
    </div>
  </div>
  )
}
