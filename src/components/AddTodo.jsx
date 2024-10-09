import  { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Check if the input is not just spaces
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <form onSubmit={addTodoHandler} className="mb-4 flex">
      <input
        type="text"
        placeholder="Enter your Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border rounded-l-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-r-md p-2 hover:bg-blue-600 transition duration-200"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
