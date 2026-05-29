import { useState } from "react";

function TodoItem({
  todo,
  index,
  deleteTodo,
  updateTodo,
  toggleComplete,
}) {

  const [isEditing, setIsEditing] =
    useState(false);

  const [editText, setEditText] =
    useState(todo.todo);

  function saveEdit(e) {

    if (e.key !== "Enter") return;

    updateTodo(index, editText);

    setIsEditing(false);
  }

  return (

    <div className="bg-sky-700 text-white p-4 rounded-lg mb-3 flex justify-between items-center max-w-2xl mx-auto">

      <div className="flex items-center gap-3 flex-1">

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            toggleComplete(index)
          }
        />

        {isEditing ? (

          <input
            type="text"
            value={editText}
            onChange={(e) =>
              setEditText(e.target.value)
            }
            onKeyDown={saveEdit}
            className="text-black px-2 rounded"
          />

        ) : (

          <p
            className={
              todo.completed
                ? "line-through text-gray-300"
                : ""
            }
          >
            {todo.todo}
          </p>

        )}

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
            setIsEditing(true)
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