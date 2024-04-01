import React from 'react';
import { useRef } from 'react';



interface NewTodoFormRefProps {
 handleClick : (textRef: string) => void;
}

export const NewTodoFormRef = ({handleClick}:NewTodoFormRefProps ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = ()=> {
        if (inputRef.current) {
            handleClick(inputRef.current.value);
            inputRef.current.value = '';
        }  
     
    }


  return (
   <>
   <input type='text' placeholder='new todo' ref={inputRef}/>
   <button onClick={onClick}>Add todo</button>
   </>
  )     
}


//!!! чтобы узнать тип event в onChange пишем и наводим курсор на слово event:
//onChange={event=> event.target}
//и так для любого хендлера