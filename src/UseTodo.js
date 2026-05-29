import { useState, useEffect}from "react";

function UseTodo(){

     const [todos, setTodos] = useState(() => {

    const storedTodos =
      localStorage.getItem("todos");

    return storedTodos
      ? JSON.parse(storedTodos)
      : [];

  });

   useEffect(() => {

    if (todos.length === 0) {

      fetch("https://dummyjson.com/todos")
        .then((res) => res.json())
        .then((data) => {

          setTodos(data.todos);

        });

    }

  }, [])
 
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
            text:text,
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
    
        updatedTodos[index].todo = text;
    
        setTodos(updatedTodos);
      }
    
      
      function toggleComplete(index) {
    
        const updatedTodos = [...todos];
    
        updatedTodos[index].completed =
          !updatedTodos[index].completed;
    
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