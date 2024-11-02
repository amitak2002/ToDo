import { useState } from 'react';
import { ContextObjectProvider } from './ContextAmit/ContextAmit';
import InputTodo from './components/InputTodo';
import Printtodo from './components/Printtodo';
import './App.css'
function App() {

  const [todos , setTodos] = useState([])

  const addTodo = (id , msg) => {
    setTodos([{id : id , msg : msg} , ...todos])
  }
  console.log(todos)

  const delTodo = (id) => {setTodos(todos.filter((data) => data.id != id))}

  const changeTodo = (id , msg) => {setTodos(todos.map((data) => (data.id == id) ? {... data ,msg : msg} : {...data}))}
  
  return (
    <ContextObjectProvider value = {{todos , addTodo , delTodo , changeTodo}}>  
      <InputTodo />
      {todos.map((data) => (
        
          <Printtodo key = {data.id} data = {data}/>
        
      ))}
    </ContextObjectProvider>
  )
}

export default App;
