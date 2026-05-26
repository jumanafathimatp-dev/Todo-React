
function TodoInput(props) {

  return (

    <div className="flex justify-center px-4 gap-3">

      <input
        type="text"
      //  ref={props.inputRef}
        value={props.text}
        placeholder="Please Enter Todo"
        className="border-2 border-sky-900 p-3 rounded-lg w-full max-w-md outline-none"
        onChange={(e) =>
          props.setText(e.target.value)
        }
        onKeyDown={props.handleKeyDown}
      />

      <button
        onClick={
          props.editIndex !== null
            ? props.updateTodo
            : props.addTodo
        }
        className="bg-sky-900 text-white rounded-lg px-5"
      >
        {props.editIndex !== null
          ? "Update"
          : "Add"}
      </button>

    </div>

  );
}

export default TodoInput;