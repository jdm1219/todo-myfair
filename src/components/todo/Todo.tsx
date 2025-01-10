import React from "react";
import TodoInput from "./TodoInput";
import TodoWrapper from "./TodoWrapper";
import styled from "@emotion/styled";

const TodoTitle = styled.h1`
  margin: 0;
  font-size: 56px;
  line-height: 72px;
  text-align: center;
  color: #333333;
`;

const Todo = () => {
  return (
    <div>
      <TodoTitle>To Do List</TodoTitle>
      <TodoInput />
      <TodoWrapper />
    </div>
  );
};

export default Todo;