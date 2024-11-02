import React from 'react'

import { createContext } from 'react'

export const ContextObject = createContext({
    todos : [{id : Date.now() , msg : 'Hello'}] , 
    addTodo : (id , msg) => {},
    delTodo : (id) => {},
    changeTodo : (id , msg) => {}
})

export default ContextObject;

export const ContextObjectProvider = ContextObject.Provider