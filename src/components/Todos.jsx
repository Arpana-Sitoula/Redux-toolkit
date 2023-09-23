import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const [isEdit, setEdit] = useState(false);
  const [input, setInput] = useState('')
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onEdithandler = (id,text) => {
    setEdit(id);
    setInput(text);
  }
  const onSaveHandler = () => {
    dispatch(editTodo({id:isEdit,text:input}));
    setEdit(false);
    setInput('');
  }
  return (
    <div>
      {todos.map((todo) => (
        <div className="my-4" key={todo.id}>
          <input value={isEdit == todo.id ? input : todo.text} readOnly={isEdit !== todo.id} onChange={(e) => {setInput(e.target.value)}}/>
          <button
            className="mx-4 bg-red-600 px-2 py-1 text-white"
            onClick={() => {
              console.log(todo.id, "id of this todo");
              dispatch(removeTodo(todo.id));
            }}
          >
            Delete
          </button>
          <button
            className="bg-cyan-700 px-2 py-1 text-white"
            onClick={() => {
             {isEdit == todo.id ? onSaveHandler(): onEdithandler(todo.id, todo.text) }
              console.log({isEdit})
            }}
          >
            {isEdit == todo.id ? "Save" : "Edit"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
