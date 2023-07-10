import React from 'react'
import { Draggable } from "react-beautiful-dnd";

export const Task = ( { index, task, taskList, setTaskList }) => {
    
  const handlleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };


  return (
    <Draggable index={index} draggableId={task.draggableId}>
        {(provided) => (
            <div className="task" key={task.id} ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
                <p>{ task.text }</p>
                <button className="task-delete__button" onClick={() => handlleDelete(task.id)}><p>×</p></button>
            </div>
        )}
    </Draggable>
  )
}
