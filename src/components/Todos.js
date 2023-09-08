import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/features/todo/todoSlice";

function Todos() {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <ul>
      {todos?.map(({ id, text }) => (
        <li key={id} onClick={() => handleDelete(id)}>
          {text}
        </li>
      ))}
    </ul>
  );
}

export default Todos;
