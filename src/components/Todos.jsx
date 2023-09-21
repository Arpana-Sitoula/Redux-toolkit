import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <div className="my-4" key={todo.id}>
          {todo.text}{" "}
          <button
            className="mx-4 bg-red-600 px-2 py-1 text-white"
            onClick={() => {
              console.log(todo.id, "id of this todo");
              dispatch(removeTodo(todo.id));
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
