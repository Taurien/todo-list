import React from "react";

import '../styles/Todo.style.scss'

const Todo = ({ title, status, handleTodo, id}) => {
  return (
    <div className='single-todo'>
      {/*<span>{id}</span>*/}
      
      <span>{title}</span>

      <button onClick={() => handleTodo(id)}>
        {status ? "Completed" : "Not completed"}
      </button>

    </div>
  );
};

export default Todo;
