import React, { useEffect, useState } from 'react';
import { TodoList } from './features/Todo/TodoList';
import { NewTodoForm } from './components/NewTodoForm';
import { NewTodoFormRef } from './components/NewTodoFormRef';
import { Todo } from './components/types';

import './App.css';



// type ITodo = {
//   id: string,
//   title: string,
//   completed: boolean,
// }

function App() {
  //если в useState передаём примитив, то он автоматически типизируется
  const [text, setText] = useState(''); //управляемый инпут


  //для работы с непримитивными данными надо использовать useState как дженерик
  const [todos, setTodos] = useState<Todo[]>([]); //массив в который будут добавлятся тудушки из управляемого инпута
 

  //const [todosClear, setTodosClear] = useState(['']); если сразу передали внутри массива значение, то уже не надо типизировать. TS сам понимает, что это строка.


  //const  [todoTest, setTodoTest] = useState<ITodo | null>(null); еслиу нас сначала пустой объект, а потом он будет наполняться в соответствии с типом.


   const handleInput = (event: React.ChangeEvent<HTMLInputElement> ) => {
    setText(event.target.value)
   }

   const addTodo = () => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false   
    }
    setTodos([newTodo, ...todos]);
    setText('');
    console.log(todos);   
   }
   
   const toggleTodo = (id: Todo['id'])=> {
   setTodos(todos.map((todo)=> {
    if (todo.id !==id) return todo;

    return {
      ...todo,
      completed: !todo.completed
    }
   }))
   }

   const removeTodo = (id: Todo['id'])=> {
    setTodos(todos.filter(todo=> todo.id !==id))
   }

   //ДОБАВЛЕНИЕ ТУДУШЕК ЧЕРЕЗ НЕУПРАВЛЯЕМЫЙ ИНПУТ (КОМПОНЕНТ NewTodoFormRef)
  //  const addTodoRef = (textRef: string) => {
  //   const newTodo: Todo = {
  //     id: new Date().toString(),
  //     title: textRef,
  //     completed: false   
  //   }
  //   setTodos([newTodo, ...todos]);
  //   console.log(todos);
  //  }




   //важно указать тип данных для data как Todo[]. чтобы тип не остался any и не было ошибок в дальнейшем.

  //  useEffect(()=> {
  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(res=> res.json())
  //   .then((data: Todo[]) => {
  //     setTodos(data);
  //   })
  //   console.log(todos);
    
  //  },[]);


  return (  
    <div className="App">
      <NewTodoForm
      value={text}
      onChange={handleInput}
      handleClick={addTodo}/>

      {/* <NewTodoFormRef handleClick={addTodoRef}/> */}

      <TodoList list={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>

    </div>
  );
}

export default App;
