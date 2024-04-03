import React from 'react'
import { Todo } from 'components/types';
import { TodoItem } from 'components/TodoItem';

interface TodoListPros {
    list: Todo[],
    toggleTodo: (id: Todo['id'])=> void,
    removeTodo: (id: Todo['id'])=> void,
}

export const TodoList = ({list, toggleTodo, removeTodo} : TodoListPros) => {
  return (
    <ul>
        {list.map((todo)=> (
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}  removeTodo={removeTodo}/>
    ) )}
    </ul>

  )
}