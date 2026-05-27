import { useState, useEffect } from "react";

import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

function Todo() {

  const [todos, setTodos] = useState(() => {

    const storedTodos =
      localStorage.getItem("todos");

    return storedTodos
      ? JSON.parse(storedTodos)
      : [];

  });

  useEffect(() => {

    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );

  }, [todos]);

  
  function addTodo(text) {

    if (!text.trim()) return;

    setTodos([
      ...todos,
      {
        text,
        completed: false,
      },
    ]);
  }

  function deleteTodo(index) {

    const newTodos = todos.filter(
      (todo, i) => i !== index
    );

    setTodos(newTodos);
  }

 
  function updateTodo(index, text) {

    const updatedTodos = [...todos];

    updatedTodos[index].text = text;

    setTodos(updatedTodos);
  }

  
  function toggleComplete(index) {

    const updatedTodos = [...todos];

    updatedTodos[index].completed =
      !updatedTodos[index].completed;

    setTodos(updatedTodos);
  }

  return (

    <div>

      <h1 className="bg-sky-900 mb-10 h-16 sm:h-20 text-amber-50 text-4xl sm:text-4xl md:text-5xl flex justify-center items-center font-extrabold">
        TO-DO
      </h1>

      <TodoAdd addTodo={addTodo} />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        toggleComplete={toggleComplete}
      />

    </div>
  );
}

export default Todo;