import React from "react";
import useLocalStorage from "../hooks/localStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
  const [todoList, setTodoList] = useLocalStorage("TODOs", []);
  const [filter, setFilter] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const todoTotal = todoList.length;
  const todoCompleted = todoList.filter((todo) => todo.completed === true).length;

  var todoListFilter = [];
  if (filter.length === 0) {
    todoListFilter = todoList;
  } else {
    todoListFilter = todoList.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const filterText = filter.toLowerCase();
      return todoText.includes(filterText);
    });
  }

  function completeTodo(id) {
    const todoIndex = todoList.findIndex((todo) => todo.id === id);
    const newTodoList = [...todoList];
    newTodoList[todoIndex].completed = true;
    setTodoList(newTodoList);
  }

  function deleteTodo(id) {
    const todoIndex = todoList.findIndex((todo) => todo.id === id);
    const newTodoList = [...todoList];
    newTodoList.splice(todoIndex, 1);
    setTodoList(newTodoList);
  }

  function searchTodo(event) {
    setFilter(event.target.value);
  }

  function ShowModalCreateTodo() {
    setModalOpen((prevState) => !prevState);
  }

  function onChangeNewTodoValue(event) {
    setNewTodoValue(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();
    const newTodosList = [...todoList];
    const mayor = newTodosList.reduce((mayor,item)=>(mayor=mayor?.id>item.id?mayor:item),{});

    newTodosList.push({
      id: mayor.id + 1,
      completed: false,
      text: newTodoValue,
    });
    setTodoList(newTodosList);
    ShowModalCreateTodo();
    setNewTodoValue("");
  }

  return (
    <TodoContext.Provider
      value={{
        todoList,
        setTodoList,
        filter,
        setFilter,
        todoTotal,
        todoCompleted,
        todoListFilter,
        completeTodo,
        deleteTodo,
        searchTodo,
        modalOpen,
        setModalOpen,
        ShowModalCreateTodo,
        newTodoValue,
        setNewTodoValue,
        onChangeNewTodoValue,
        addTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
