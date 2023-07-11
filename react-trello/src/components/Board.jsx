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
  const handleDragEnd = (res) => {
    reorderList(list, res.source.index, res.destination.index);
    setList(list);
}

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppableList" direction="horizontal">
        {(provided) => (
          <div className='board' {...provided.droppableProps} ref={provided.innerRef}>
                 {list.map((listItem, index) => (
                 <List index={index} key={listItem.id} list={list} setList={setList} listItem={listItem} />
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
