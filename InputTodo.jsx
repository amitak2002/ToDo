import React, { useState } from 'react'
import { useContext } from 'react'
import { ContextObject } from '../ContextAmit/ContextAmit'

function InputTodo() {

  const [todo , setTodo] = useState("")

  const {addTodo} = useContext(ContextObject)

  const addtodo = (e) => {
    e.preventDefault()
    if (todo) {
      addTodo(Date.now() , todo)
    }
    setTodo("")
  }



  return (
    <form className='form'>
        <div className='formdiv1'>
            <div>
                <label>Enter Todos : </label>
                <input type = 'text' 
                  value = {todo} onChange={(e) => setTodo(e.target.value)}  
                />
                <button type = 'submit' onClick={addtodo}>Add</button>
            </div>
        </div>
    </form>
  )
}

export default InputTodo