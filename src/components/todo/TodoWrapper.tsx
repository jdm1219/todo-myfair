import React from "react";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import styled from "@emotion/styled";

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 737px;
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.06);
`

const TodoListContainer = styled.div`
  margin: 0;
  padding: 0;
`

const TodoCount = styled.div`
  padding: 16px;
  font-size: 20px;
  line-height: 28px;
`

const TodoList = styled.ul`
  margin: 0;
  padding: 0;
`

const TodoWrapper = () => {
  return (
    <TodoContainer >
      <TodoFilter />
      <TodoListContainer>
        <TodoCount>총 {0}개</TodoCount>
        <TodoList>
          <TodoItem />
        </TodoList>
      </TodoListContainer>
    </TodoContainer >
  );
};

export default TodoWrapper;