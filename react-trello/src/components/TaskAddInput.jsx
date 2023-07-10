import React from 'react'
import { v4 as uuid } from 'uuid';


export const TaskAddInput = ({inputText, setInputText, taskList, setTaskList}) => {

  const handleChange = (e) => { setInputText(e.target.value)};
  const handleSubmit = (e) => {
      const taskId = uuid();
      e.preventDefault();
      if(inputText === "") { return; }
      setTaskList([...taskList, { text: inputText, id: taskId, draggableId: `task-${taskId}`}]);
      setInputText("");
  };

return (

  <div>
      <form onSubmit={handleSubmit}>
          <input type="text" className="text-input" autoFocus onChange={handleChange} placeholder="add a task" value={inputText} maxLength="20"></input>
      </form>
  </div>
)
}
