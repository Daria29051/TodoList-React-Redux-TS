import React from 'react';
import { Todo } from '../types';


interface TodoItemProps extends Todo {
    toggleTodo: (id: Todo['id'])=> void,
    removeTodo: (id: Todo['id'])=> void,
    style?: React.CSSProperties,
}


 
export const TodoItem: React.FC<TodoItemProps> = ({id, title, completed,toggleTodo, removeTodo, style={}} ) => {
  return (
    <li style={{color: 'red', backgroundColor: 'white', ...style}}>
        <input type='checkbox' checked={completed} onChange={()=> {toggleTodo(id)}}/>
        <span>{title}</span>
        <span onClick={()=>removeTodo(id)}>&times;</span>
        </li>
  )
}

//TodoItem.defaultProps = {}; (сюда можем передать дефолтные пропсы)





//ВТОРОЙ ВАРИАНТ ТИПИЗАЦИИ ПРОПСОВ (в таком случае не будет defaultProps, можем передавать только те пропсы, что мы указалиы)

// export const TodoItem = ({id, title, completed, toggleTodo, removeTodo, style={}}: TodoItemProps) => {
//     return (
//       <li style={{color: 'red', backgroundColor: 'white', ...style}}>
//           <input type='checkbox' checked={completed}/>
//           <span>{title}</span>
//           <span>&items;</span>  
//           </li>
//     )
//   }
