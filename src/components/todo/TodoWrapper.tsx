import React from "react";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import styled from "@emotion/styled";
import { useSetRecoilState , useRecoilValue } from "recoil";
import { filteredTodoListState, todoListState } from "../../state/todoListState";

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 737px;
  border-radius: 24px;
  margin-top: 32px;
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
  const setTodoList = useSetRecoilState(todoListState);
  const filteredTodoList = useRecoilValue(filteredTodoListState);

  const toggleTodo = (id: number) => {
    setTodoList((prev) => prev.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContainer >
      <TodoFilter />
      <TodoListContainer>
        <TodoCount>총 {filteredTodoList.length}개</TodoCount>
        <TodoList>
          {
            filteredTodoList.map(todoItem => (
                <TodoItem
                  key={todoItem.id}
                  todo={todoItem}
                  onToggle={() => toggleTodo(todoItem.id)}
                  onDelete={() => deleteTodo(todoItem.id)}
                />
              )
            )
          }
        </TodoList>
      </TodoListContainer>
    </TodoContainer >
  );
};

export default TodoWrapper;