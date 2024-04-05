import React from 'react'
import { TodoItem } from 'components/TodoItem';
import { Todo } from 'types';
import { useAppDispatch} from 'redux-hooks';
import { removeTodo, toggleTodo } from './todoSlice';
import { useSelector } from 'react-redux';
import { selectAllTodos } from './todoSelectors';


const TodoList = ()=> {
  // const list  = useAppSelector(state=> state.todos);//так пишем если нет файла todoSelectors.ts
  const list  = useSelector(selectAllTodos);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (id: Todo['id'])=> {
    dispatch(removeTodo(id));
  }

  const handleToggleTodo = (id: Todo['id'])=> {
    dispatch(toggleTodo(id));
  }

  return (
    <ul>
      {list.map((todo)=> (
        <TodoItem key={todo.id} toggleTodo={handleToggleTodo} removeTodo={handleRemoveTodo} {...todo}/>
      ))}
    </ul>
  )
}


export default TodoList;
