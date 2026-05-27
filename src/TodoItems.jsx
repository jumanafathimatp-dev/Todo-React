function TodoItem({
  todo,
  index,
  deleteTodo,
  editTodo,
  toggleComplete,
}) {

  return (

    <div className="bg-sky-700 text-white p-4 rounded-lg mb-3 flex justify-between items-center max-w-2xl mx-auto">

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            toggleComplete(index)
          }
        />

        <p
          className={
            todo.completed
              ? "line-through text-gray-300"
              : ""
          }
        >
          {todo.text}
        </p>

      </div>

      <div className="flex gap-2">

        <button
          onClick={() =>
            deleteTodo(index)
          }
          className="bg-white px-4 py-1 rounded-lg"
        >
          🗑️
        </button>

        <button
          onClick={() =>
            editTodo(index)
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