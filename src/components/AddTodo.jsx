import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form
      onSubmit={addTodoHandler}
      className="space-x-3 mx-6 flex justify-center"
    >
      <input
        className="bg-slate-400 py-2 px-2 text-slate-50"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-cyan-600 px-2 hover:bg-cyan-800 text-cyan-50"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
