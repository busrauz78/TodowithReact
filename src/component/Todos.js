
import React from 'react';

const Todos = ({todos,deleteItem})=>{
  const todoList = todos.length?(todos.map(todo=>{
      return(
          <li onClick={()=>deleteItem(todo.id)} className="collection-item" key={todo.id}>{todo.content}</li>
      )
  })):(
<p className="center">You have no todos</p>

  );
    return(
<ul className="todo collection container">
{todoList}
</ul>
    )

}

export default Todos;