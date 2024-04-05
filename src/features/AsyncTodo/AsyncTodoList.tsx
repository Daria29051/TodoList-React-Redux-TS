import React from 'react'
import { TodoItem } from 'components/TodoItem';
import { useAppDispatch} from 'redux-hooks';
import {useSelector } from 'react-redux';
import { selectAsyncTodos } from './asyncTodoSelector';
import { Todo } from 'types';
import { useEffect } from 'react';
import { fetchAllTodos, removeTodo, toggleTodo } from './asyncTodoActions';



const AsyncTodoList = ()=> {
  const {list}  = useSelector(selectAsyncTodos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo['id'])=> {
    dispatch(removeTodo(id))
  }

  const handleToggleTodo = (id: Todo['id'])=> {
  dispatch(toggleTodo(id))
   }

   useEffect(()=> {
   dispatch(fetchAllTodos());
   }, []);

  return (
    <ul>
      {list.map((todo)=> (
        <TodoItem key={todo.id} toggleTodo={handleToggleTodo} removeTodo={handleRemoveTodo} {...todo}/>
      ))}
    </ul>
  )
}


export default AsyncTodoList;
