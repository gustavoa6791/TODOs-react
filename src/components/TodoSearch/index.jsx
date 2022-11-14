import React from 'react'
import { TodoContext } from '../../context/todoContext'
import './style.css'

function TodoSearch(props){

 const {searchTodo, filter} = React.useContext(TodoContext)

  return(
    <>
      <input className="TodoSearch" type="text" placeholder="Buscar" value={filter} onChange={searchTodo} />
    </>
  )
}
export default TodoSearch

