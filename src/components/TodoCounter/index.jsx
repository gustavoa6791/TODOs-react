import React from 'react'
import { TodoContext } from '../../context/todoContext'
import './style.css'

function TodoCounter(props){

  const {todoCompleted, todoTotal} = React.useContext(TodoContext)

  return(
    <>
      <h2 className="TodoCounter">
        Tienes {todoCompleted} tareas completadas de {todoTotal}.
      </h2>
    </>
  )
}
export default TodoCounter

