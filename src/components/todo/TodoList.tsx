import React from "react";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div>
      <TodoFilter />
      <TodoItem />
    </div>
  );
};

export default TodoList;