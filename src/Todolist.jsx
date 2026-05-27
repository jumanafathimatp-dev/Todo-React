import TodoItem from "./TodoItems";

function TodoList({
  todos,
  deleteTodo,
  updateTodo,
  toggleComplete,
}) {

  return (

    <div className="mt-10 px-4">

      {todos.map((todo, index) => (

        <TodoItem
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          toggleComplete={toggleComplete}
        />

      ))}

    </div>
  );
}

export default TodoList;