import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { todos } from "../features/todo/todoSlice"

function Todos() {
    const todo = useSelector(state => state.todo)
    const dispatch = useDispatch()
    return (
        <>
        <div>Todos</div>
        <ul className="list-none">
            { todos.map((todo)=>(
                <li className="li" key={todo.id}>
                    <div>{todo.text}</div>
                    <button onClick={()=> dispatch(removeTodo(todo.id))}>
                        x</button>
                </li>
            ))}
        </ul>
        </>
    )
}

export default Todos