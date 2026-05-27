import { useState, useEffect } from "react";

import TodoInput from "./TodoAdd";
import TodoList from "./TodoList";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");

    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    if (text.trim() === "") {
      return;
    }

    setTodos([
      ...todos,
      {
        text: text,
        completed: false,
      },
    ]);

    setText("");
  }

  function deleteTodo(deleteIndex) {
    const newTodos = todos.filter((todo, index) => index !== deleteIndex);

    setTodos(newTodos);
  }

  function editTodo(index) {
    setText(todos[index].text);
    setEditIndex(index);
  }

  function updateTodo() {
    if (text.trim() === "") {
      return;
    }

    const updatedTodos = [...todos];
    updatedTodos[editIndex].text = text;
    setTodos(updatedTodos);
    setText("");
    setEditIndex(null);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      if (editIndex !== null) {
        updateTodo();
      } else {
        addTodo();
      }
    }
  }

  function toggleComplete(index) {
    const updatedTodos = [...todos];

    updatedTodos[index].completed = !updatedTodos[index].completed;

    setTodos(updatedTodos);
  }

  return (
    <div>
      <h1 className="bg-sky-900 mb-10 h-16 sm:h-20 text-amber-50 text-4xl sm:text-4xl md:text-5xl flex justify-center items-center font-extrabold">
        TO-DO
      </h1>

      <TodoInput
        text={text}
        setText={setText}
        addTodo={addTodo}
        updateTodo={updateTodo}
        isEdit={editIndex !== null }
        handleKeyDown={handleKeyDown}
      />

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default Todo;
