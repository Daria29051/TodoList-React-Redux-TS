import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "types";


//надо затипизировать initialState и payload.action (через утилиту PayloadAction)

const initialState: Todo[]= [];

const todoSlice = createSlice({
    name: '@todos',
    initialState,
    //initialState: [] as Todo[], - можем написать так, а не создавать отдельно переменную initialState
    reducers: {
        addTodo: (state, action: PayloadAction<string>)=> {
            const newTodo: Todo = {
                id: new Date().toString(),
                title: action.payload,
                completed: false,   
              }
              return [newTodo, ...state]
        },


        toggleTodo: (state, action: PayloadAction<Todo['id']>)=> {
            const todo = state.find(el => el.id === action.payload);

            if (todo) {
                todo.completed = !todo.completed;
                
            }
        },
        removeTodo: (state, action: PayloadAction<Todo['id']>)=> state.filter(todo => todo.id !==action.payload),
    },
});

export default todoSlice.reducer;
export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions;
