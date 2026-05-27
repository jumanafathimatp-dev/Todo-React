import TodoItem from "./TodoItems";

function TodoList({
  todos,
  deleteTodo,
  editTodo,
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
          editTodo={editTodo}
          toggleComplete={toggleComplete}
        />

      ))}

    </div>
  );
}

export default TodoList;