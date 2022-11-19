import './style.css'

function TodoList(props){
  return(
    <section>
      {props.todoListFilter.map(todo=>props.render(todo))}
      <ul>
        {props.children}
      </ul>
    </section>
  )
}
export default TodoList

