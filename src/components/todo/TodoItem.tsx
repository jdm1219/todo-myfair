import React from "react";
import styled from "@emotion/styled";

const TodoItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 32px 16px;
`

const TodoItemCheckbox = styled.input`
  width: 32px;
  height: 32px;
`

const TodoItemDesc = styled.div`
  flex: 1;
  font-size: 20px;
  line-height: 28px;
  color: #868686;
`

const TodoItemDeleteBtn = styled.button`
  width: 24px;
  height: 24px;
`

const TodoItem = () => {

  return (
    <TodoItemContainer>
      <TodoItemCheckbox
        type="checkbox"
      />
      <TodoItemDesc>출근하고 비타민 먹기</TodoItemDesc>
      <TodoItemDeleteBtn>
        X
      </TodoItemDeleteBtn>
    </TodoItemContainer>
  );
};

export default TodoItem;