import UseTodo from "./UseTodo";


import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

function Todo() {

  const {
  todos,
  addTodo,
  deleteTodo,
  updateTodo,
  toggleComplete,
} = UseTodo();
  


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
