import React, { Component } from 'react';
import Todos from './component/Todos';
import Add from './component/Add';
class App extends Component {
  state={
    todos:[
    
    ]
  }

  deleteItem=(id)=>{
   let newtodos=this.state.todos.filter(todo=>{
     return todo.id!==id;
   });
   this.setState({
     todos:newtodos
   })
  }

  addItem=(item)=>{
   item.id=Math.random();
let newtodos=[...this.state.todos,item];
   this.setState({
todos:newtodos
   });
  }
  render() {
    return (
      <div className="container">
      <h1 className="blue-text center">Todo App</h1>
<Todos todos={this.state.todos} deleteItem={this.deleteItem}/>
<br />
<Add addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
