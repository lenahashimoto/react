import React from 'react'
import { v4 as uuid } from 'uuid'

export const AddTaskCardButton = ( {taskCardsList, setTaskCardsList} ) => {
  const addTaskCard = () => {
    const listId = uuid();
    setTaskCardsList([...taskCardsList, { id: listId, draggableId: `list${listId}`, key: listId}]);
  };

  return (
    <div className="add-list__button__wrapper">
      <button onClick={addTaskCard} className="add-list__button">
        +
      </button>
    </div>
  )
}
