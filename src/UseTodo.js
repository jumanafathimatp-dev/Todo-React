import { useState, useEffect } from "react";

function UseTodo() {
  const [todos, setTodos] = useState([])
   

  useEffect(() => {
    
      fetch("https://dummyjson.com/todos")
        .then((res) => res.json())
        .then((data) => {
          setTodos(data.todos);
        });
    
  }, []);

  

  function addTodo(text) {
    if (!text.trim()) return;

    fetch("https://dummyjson.com/todos/add", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        todo: text,
        completed: false,
        userId: 5,
      }),
    })
      .then((res) => res.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  

  function deleteTodo(index) {
    
    fetch(`https://dummyjson.com/todos/1`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const newTodos = todos.filter((todo, i) => i !== index);

        setTodos(newTodos);
      });
  }

  function updateTodo(index, text) {
    

    fetch(`https://dummyjson.com/todos/1`, {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        todo: text,
      }),
    })
      .then((res) => res.json())
      .then((updatedTodo) => {
        const updatedTodos = [...todos];

        updatedTodos[index].todo = updatedTodo.todo;

        setTodos(updatedTodos);
      });
  }

  function toggleComplete(index) {
    const updatedTodos = [...todos];

    updatedTodos[index].completed = !updatedTodos[index].completed;

    setTodos(updatedTodos);
  }

  return {
    todos,
    addTodo,
    deleteTodo,
    updateTodo,
    toggleComplete,
  };
}

export default UseTodo;
