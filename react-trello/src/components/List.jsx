import React from 'react'
import { TaskHolder } from "./TaskHolder";
import { ListTitle } from './ListTitle';
import { ListDeleteButton } from './ListDeleteButton';
import { Draggable } from 'react-beautiful-dnd';


export const List = ({index, list, setList, listItem}) => {

  return (
    <Draggable index={index} draggableId={listItem.draggableId} key={listItem.draggableId}>
        {(provided) => (
        <div className="list" key={listItem.id} ref={provided.innerRef} {...provided.draggableProps}>
            <div className="listheader" {...provided.dragHandleProps}>
            <ListDeleteButton list={list} setList={setList} listItem={listItem} />
                <ListTitle />
            </div>
            <TaskHolder />
        </div>
        )}
    </Draggable>

  )
}
