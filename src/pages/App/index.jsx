import React from "react";
import { TodoContext,TodoProvider } from "../../context/todoContext";

import TodoCounter from "../../components/TodoCounter";
import TodoSearch from "../../components/TodoSearch";
import TodoList from "../../components/TodoList";
import TodoItem from "../../components/TodoItem";
import ButtonCreate from "../../components/ButtonCreate";
import { TodoForm } from "../../components/TodoForm";
import './style.css'

import ModalTodoCreate from "../../components/modal/TodoCreate"

/* const TODOs = [ 
  {id:1,text:"contar cebolla",completed:true},
  {id:2,text:"jugar futbol",completed:false},
  {id:3,text:"cocinar almuerzo",completed:false},
] */

function App(props) {
  return (
    <TodoProvider>
      <>
        <TodoCounter/> 
        <TodoSearch/>

        <TodoContext.Consumer>
          {({todoListFilter, completeTodo, deleteTodo}) => (
            <TodoList>
              {todoListFilter.map(todo=>[
                <TodoItem key={todo.id}  text={todo.text} completed={todo.completed} completeTodo={()=>completeTodo(todo.id)} deleteTodo={()=>deleteTodo(todo.id)} />
              ])}
            </TodoList>
          )}
        </TodoContext.Consumer>
        
        <TodoContext.Consumer>
          {({modalOpen}) => {
          
            if (modalOpen) {
              return(
                <ModalTodoCreate>
                  <TodoForm/>
                </ModalTodoCreate>
              )
            }
          }}
        </TodoContext.Consumer>

        <ButtonCreate/> 
      </>
    </TodoProvider>
  )
}
export default App