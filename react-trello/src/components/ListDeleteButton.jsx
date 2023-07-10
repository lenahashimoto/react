import React from 'react'

export const ListDeleteButton = ({list, setList, listItem}) => {
  const deleteListItem = (id) => {
    setList(list.filter((e) => e.id !== id));
  };
  console.log(list);

  return (
    <div> <button className="delete-list__button" onClick={() => deleteListItem(listItem.id)}>×</button></div>
  )
}
