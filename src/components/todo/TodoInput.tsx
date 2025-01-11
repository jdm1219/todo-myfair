import React, { useState } from "react";
import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../state/todoListState";

const StyledInput = styled.input`
  width: 737px;
  padding: 32px;
  margin-top: 64px;
  border: none;
  border-radius: 12px;
  background-color: #e5e5e5;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
   
  &::placeholder {
    color: #b9b9b9;
  }

  &:focus {
    outline: none;
  }
`;

let todoId = 0;

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addTodoItem = () => {
    setTodoList((prev) => [
      ...prev,
      {
        id: todoId++,
        content: inputValue,
        isDone: false,
      },
    ]);

    setInputValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      addTodoItem()
    }
  }

  return (
    <StyledInput
      type="text"
      placeholder="할 일을 입력해 주세요"
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default TodoInput;