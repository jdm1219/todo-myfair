import React from "react";
import styled from "@emotion/styled";

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

const TodoInput = () => {
  return (
    <StyledInput
      type="text"
      placeholder="할 일을 입력해 주세요"
    />
  );
};

export default TodoInput;