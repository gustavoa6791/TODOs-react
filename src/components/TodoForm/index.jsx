import React from 'react';
import { TodoContext } from '../../context/todoContext';
import './style.css';

function TodoForm() {
  const {addTodo, newTodoValue, onChangeNewTodoValue,ShowModalCreateTodo } = React.useContext(TodoContext);
  
  return (
    <form onSubmit={addTodo}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChangeNewTodoValue}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={ShowModalCreateTodo}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };