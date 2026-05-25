import { useState, useRef, useEffect } from "react";



function InputField() { 
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(()=>{
    const storedTodos=localStorage.getItem("todos");
    return storedTodos
    ? JSON.parse(storedTodos)
    :[];

  });

  const [editIndex, seteditIndex]=useState(null);
  const inputRef = useRef(null);
  

  useEffect(() => {

    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );

  }, [todos]);


  function addTodo() {

    if (text.trim()===""){
        return;
    }
    setTodos([
        ...todos, 
        {text:text,
        completed:false,

        },
        ]);

    setText("");
  }

  function deleteTodo(deleteIndex){
    const newTodos=todos.filter(
       ( todo,index) => index!==deleteIndex
    );
    setTodos(newTodos);
  }
  function editTodo(index){
    setText(todos[index].text);
    seteditIndex(index);
    inputRef.current.focus();
  }

  function updateTodo(){
    if(text.trim()===""){
        return;
    }
    const updateTodos=[...todos];
    updateTodos[editIndex].text=text;
    setTodos(updateTodos);
    setText("");
    seteditIndex(null);
  }

  function handleKeyDown(e){
    if(e.key==="Enter"){
        if(editIndex!==null){
            updateTodo();
        }else{
            addTodo();
        }
    }
  }
  function toggleComplete(index){
    const updatedTodos=[...todos];
    updatedTodos[index].completed=!updatedTodos[index].completed;
    setTodos(updatedTodos);

  }

  return (
    <div>
      <h1 className="bg-sky-900 mb-10 h-16 sm:h-20  text-amber-50 text-4xl sm:text-4xl md:text-5xl flex justify-center items-center font-extrabold ">
        TO-DO
      </h1>
      <div className="flex justify-center px-4 gap-3 ">
        <input
          type="text"
         ref={inputRef}
          value={text}
          placeholder=" please Enter todo"
          className="border-2 border-sky-900 p-3 rounded-lg w-full full-w-md outline-none"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
         
        />
 
        <button
          onClick={editIndex !==null
            ? updateTodo
            :addTodo
          }
          className="bg-sky-900 text-white rounded-lg px-5"
        >
          Add
        </button>
      </div>

      <div className="mt-10 px-4 ">
        {todos.map((todo, index) => (
          <div
            key={index}
            className="bg-sky-700 p-4 rounded-lg mb-3 w-full mx-auto text-amber-50 flex justify-between items-center"
          >

            <div className="flex items-center gap-3">
              <input type="checkbox"
              checked={todo.completed}
              onChange={()=>toggleComplete(index)} />


            </div>
            <p
            className={
                todo.completed ? "line-through text-gray-300"
                :""
            }>{todo.text}</p>

            <div className="flex flex-wrap gap-2"> <button
            onClick={()=>deleteTodo(index)}
            className="bg-white px-4 py-1 rounded-lg"
            >🗑️</button>

            <button
            onClick={()=>editTodo(index)}
            className="bg-white px-4 py-1 rounded-lg"
            
            >✏️</button>
            </div>

           

          </div>
          

          
          
        ))}


        
      </div>
    </div>
  );
}

export default InputField;
