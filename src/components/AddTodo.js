import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../store/features/todo/todoSlice";
import Todos from "./Todos";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button>Add todo</button>
      </form>
      <Todos />
    </div>
  );
}

export default AddTodo;
