import React from 'react'
import { Task } from './Task'
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reorder = (targetList, source, destination) => {
  const remove = targetList.splice(source, 1);
  targetList.splice(destination, 0, remove[0]);

};

export const Tasks = ({taskList, setTaskList}) => {
  const handleDragEnd = (res) => {
    reorder(taskList, res.source.index, res.destination.index);
    setTaskList(taskList);
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="drappableTask">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
              <div key={task.id}>
              <Task index={index} task={task} taskList={taskList} setTaskList={setTaskList} />
              </div>
              ))}
              {provided.placeholder}
            </div>
            )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
