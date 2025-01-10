"use client";
import React from "react";
import styled from "@emotion/styled";
import Todo from "../todo/Todo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 128px 0;
`;

interface Props {}

const TodoUserListPage = ({}: Props) => {
  return (
    <Container>
      <Todo />
    </Container>
  );
};

export default TodoUserListPage;
