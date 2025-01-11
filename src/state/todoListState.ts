import { atom, selector } from 'recoil';

export interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}

export type FilterType = 'All' | 'To Do' | 'Done';

export const todoListState = atom<Todo[]>({
  key: 'todoListState',
  default: [],
});

export const todoListFilterState = atom<FilterType>({
  key: 'todoListFilterState',
  default: 'All',
});

export const filteredTodoListState = selector<Todo[]>({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Done':
        return list.filter((item) => item.isDone);
      case 'To Do':
        return list.filter((item) => !item.isDone);
      case 'All':
      default:
        return list;
    }
  },
});