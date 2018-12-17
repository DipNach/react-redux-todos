import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisisbleTodoList from '../containers/VisisbleTodoList';

const App =()=>(
<div style={{textAlign:'center'}}>
    <AddTodo />
    <VisisbleTodoList />
  </div>
)

export default App;
