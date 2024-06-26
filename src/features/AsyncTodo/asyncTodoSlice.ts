import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "types";
import { createTodo, fetchAllTodos, removeTodo, toggleTodo } from "./asyncTodoActions";

export type AsyncTodoSlice = {
    status: 'idle'| 'loading'| 'finished'| 'error';
    list: Todo[];
}


const initialState: AsyncTodoSlice = {
    status: 'idle',
    list: [],
};

const asyncTodoSlice = createSlice({
    name: '@todos',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllTodos.pending, (state)=> {
            state.status = 'loading';
        })
        .addCase(fetchAllTodos.fulfilled, (state,action) => {
            state.status = 'finished';
            state.list = action.payload
        })
        .addCase(fetchAllTodos.rejected, (state)=> {
            state.status = 'error'
        })
        .addCase(createTodo.fulfilled, (state, action)=> {
            state.list.push(action.payload)
        })

        .addCase(toggleTodo.fulfilled, (state, action)=> {
            const todo = state.list.find(el => el.id === action.payload.id);
            if (todo) {
                todo.completed = action.payload.completed;
            }
        })

        .addCase(removeTodo.fulfilled, (state, action)=> {
           state.list = state.list.filter(todo=> todo.id !== action.payload)
        })
    }
});

export default asyncTodoSlice.reducer;

