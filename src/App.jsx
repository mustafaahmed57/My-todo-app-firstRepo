import React,{useState} from 'react'
import Header from './components/header';
import Form from './components/form';
import Todoslist from './components/todoslist';
import "./App.css"


const App =() => {

  const [input, setInput] =useState ("");
  const [todos, setTodos] =useState([]);
  const [editTodo, setEditTodo] =useState(null);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form />
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}

        </div>
        <div>
          <Todoslist todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} 
           />

        </div>

      </div>
      
    </div>
  )
}

export default App

