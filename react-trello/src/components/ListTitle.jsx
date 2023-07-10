import React, { useState } from 'react'

export const ListTitle = () => {
    const [isClick, setIsClick] = useState(false);
    const [inputListTitle, setInputListTitle] = useState("Today");

    const handleClick = () => {
        setIsClick(true);
    };
    const handleChange = (e) => { setInputListTitle(e.target.value)};
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsClick(false);
    };
    const handleBlur = (e) => {
        setIsClick(false);
    }; 

  return (

    <div onClick={handleClick}>
        {isClick ? <form onSubmit={handleSubmit}>
            <input type="text" className="list-title__input" autoFocus onChange={handleChange} onBlur={handleBlur} value={inputListTitle} maxLength="14"></input>
        </form> : <h3 className="list-title">{inputListTitle}</h3> }
    </div>
  )
}
