function TodoItem(props) {

  return (

    <div
      className="bg-sky-700 p-4 rounded-lg mb-3 w-full max-w-2xl mx-auto text-amber-50 flex justify-between items-center"
    >

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={() =>
            props.toggleComplete(props.index)
          }
        />

        <p
          className={
            props.todo.completed
              ? "line-through text-gray-300"
              : ""
          }
        >
          {props.todo.text}
        </p>

      </div>

      <div className="flex flex-wrap gap-2">

        <button
          onClick={() =>
            props.deleteTodo(props.index)
          }
          className="bg-white px-4 py-1 rounded-lg"
        >
          🗑️
        </button>

        <button
          onClick={() =>
            props.editTodo(props.index)
          }
          className="bg-white px-4 py-1 rounded-lg"
        >
          ✏️
        </button>

      </div>

    </div>

  );
}

export default TodoItem;