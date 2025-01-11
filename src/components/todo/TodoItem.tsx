import React from "react";
import styled from "@emotion/styled";
import Check from "../../public/icons/Check.svg"
import Close from "../../public/icons/Close.svg"
import { Todo } from "../../state/todoListState";

const TodoItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 32px 16px;
`

const TodoItemCheckboxLabel = styled.label<{ isChecked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  box-sizing: border-box;
  border: ${props => props.isChecked ? 'none' : '1px solid #e5e5e5'};
  border-radius: 50%;
  background-color: ${props => props.isChecked ? '#2182f3' : 'transparent'};

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }
`

const TodoItemDesc = styled.div<{ isChecked: boolean }>`
  flex: 1;
  font-size: 20px;
  line-height: 28px;
  color: ${props => props.isChecked ? '#868686' : '#000000'};
`

const TodoItemDeleteBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: transparent;
`

interface Props {
  todo: Todo,
  onToggle: () => void,
  onDelete: () => void
}

const TodoItem = ({todo, onToggle, onDelete}: Props) => {
  return (
    <TodoItemContainer>
      <TodoItemCheckboxLabel isChecked={todo.isDone}>
        <input
          onChange={onToggle}
          checked={todo.isDone}
          type="checkbox"
        />
        <Check fill="#ffffff" />
      </TodoItemCheckboxLabel >
      <TodoItemDesc isChecked={todo.isDone}>{todo.content}</TodoItemDesc>
      <TodoItemDeleteBtn onClick={onDelete}>
        <Close fill="#b9b9b9" />
      </TodoItemDeleteBtn>
    </TodoItemContainer>
  );
};

export default TodoItem;