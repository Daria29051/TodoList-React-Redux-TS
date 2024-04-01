import React from 'react';



interface NewTodoFormProps {
 value: string,
 onChange: (event: React.ChangeEvent<HTMLInputElement>)=> void,
 //onChange: React.ChangeEventHandler<HTMLInputElement> второй вариант записи -просто берем полную подскзку, наведя мышку на хендлер
 handleClick : () => void;
}

export const NewTodoForm = ({value, onChange, handleClick}:NewTodoFormProps ) => {
  return (
   <>
   <input type='text' placeholder='new todo' value={value} onChange={onChange}/>
   <button onClick={handleClick}>Add todo</button>
   </>
  )     
}


//!!! чтобы узнать тип event в onChange пишем и наводим курсор на слово event:
//onChange={event=> event.target}
//и так для любого хендлера