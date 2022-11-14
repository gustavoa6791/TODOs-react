import React from 'react'
import { TodoContext } from '../../context/todoContext'
import './style.css'

function ButtonCreate(props){

  const {ShowModalCreateTodo} = React.useContext(TodoContext)

  return(
    <>
      <button className="CreateTodoButton" onClick={ShowModalCreateTodo} >+</button>
    </>
  )
}
export default ButtonCreate