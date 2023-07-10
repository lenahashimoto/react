import React, { useState } from 'react'
import { List } from "./List";
import { AddListButton } from './AddListButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorderList = (target, source, destination) => {
  const remove = target.splice(source, 1);
  target.splice(destination, 0, remove[0]);
};

export const Board = () => {
  const [list, setList] = useState([{id:"0", draggableId: "item0", key: 0}]);
  const handleDragListEnd = (res) => {
    reorderList(list, res.source.index, res.destination.index);

  }

  return (
    <DragDropContext onDragEnd={handleDragListEnd}>
      <Droppable droppableId="droppableList" direction="horizontal">
        {(provided) => (
          <div className='board' {...provided.droppableProps} ref={provided.innerRef}>
                 {list.map((listItem, index) => (
                 <div key={index}>
                 <List index={index} list={list} setList={setList} listItem={listItem} />
                 </div>
                 ))
                 }
                 <AddListButton list={list} setList={setList} />
                 {provided.placeholder}
           </div>
        )}
      </Droppable>

    </DragDropContext>
  )
}
