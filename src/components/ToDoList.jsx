import React, { useState } from 'react';

function ToDoList() {

const [toDoArr, setToDoArr ] = useState(["Design App", "Build App"]);

  function buildToDoList(arr) {
     if (arr.length === 0) {
      return <li>Add a task below!</li>
     } else {
    return  arr.map(
      item => <li key={`todo-${item}`}>
      {item}
      <div>
        <p onClick={() => removeToDo(item)}>X</p>
      </div>
      </li>);
    }
  }

  function removeToDo(item) {
    console.log("removing ", item)
    let i = toDoArr.indexOf(item);
    let newArr = [...toDoArr];
    newArr.splice(i, 1);
    setToDoArr(newArr);
  }

  return (
    <div>
      <ul>
        {buildToDoList(toDoArr)}
      </ul>

    </div>
  )
}

export default ToDoList;