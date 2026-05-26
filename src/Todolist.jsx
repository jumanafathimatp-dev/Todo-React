import TodoItem from "./TodoItems";

function TodoList(props) {

  return (
  
    <div className="mt-10 px-4">

      {props.todos.map((todo, index) => (

        <TodoItem
          key={index}
          todo={todo}
          index={index}
          deleteTodo={props.deleteTodo}
          editTodo={props.editTodo}
          toggleComplete={props.toggleComplete}
        />

      ))}

    </div>

  );
}

export default TodoList;