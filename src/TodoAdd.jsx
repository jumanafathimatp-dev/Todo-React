function TodoAdd({
  text,
  setText,
  addTodo,
  updateTodo,
  isEdit,
  handleKeyDown,
}) {

  return (

    <div className="flex justify-center gap-3 px-4">

      <input
        type="text"
        value={text}
        placeholder="Enter Todo"
        className="border-2 border-sky-900 p-3 rounded-lg w-full max-w-md outline-none"
        onChange={(e) =>
          setText(e.target.value)
        }
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={
          isEdit
            ? updateTodo
            : addTodo
        }
        className="bg-sky-900 text-white px-5 rounded-lg"
      >
        {isEdit ? "Update" : "Add"}
      </button>

    </div>
  );
}

export default TodoAdd;
