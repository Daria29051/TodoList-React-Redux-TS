import React from 'react';
import { useRef } from 'react';



interface NewItemProps {
 placeholder: string,
 handleClick : (text: string) => void;
}

export const NewItem= ({handleClick, placeholder}:NewItemProps ) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const onClick = ()=> {
        if (inputRef.current) {
            handleClick(inputRef.current.value);
            inputRef.current.value = '';
        }  
     
    }


  return (
   <>
   <input type='text' placeholder={placeholder} ref={inputRef}/>
   <button onClick={onClick}>Add todo</button>
   </>
  )     
}


export default NewItem;
