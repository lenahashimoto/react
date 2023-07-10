import React from 'react'
import { v4 as uuid } from 'uuid'

export const AddListButton = ( {list, setList} ) => {
  const addList = () => {
    const listId = uuid();
    setList([...list, { id: listId, draggableId: `list${listId}`, key: listId}]);
  };

  return (
    <div className="add-list__button__wrapper">
      <button onClick={addList} className="add-list__button">
        +
      </button>
    </div>
  )
}
