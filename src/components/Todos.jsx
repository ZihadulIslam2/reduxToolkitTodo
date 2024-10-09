import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-2xl font-bold mb-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="flex items-center justify-between p-3 mb-2 border-b border-gray-300"
            key={todo.id}
          >
            <div className="text-lg">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white rounded-md p-1 hover:bg-red-600 transition duration-200"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
