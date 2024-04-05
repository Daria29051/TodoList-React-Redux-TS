import { createAsyncThunk } from "@reduxjs/toolkit";
import { Todo } from "types";
import { AsyncTodoSlice } from "./asyncTodoSlice";




export const fetchAllTodos = createAsyncThunk<
Todo[], //что возвращаем
undefined, // что принимает на вход async функция
{state: {asyncTodos: AsyncTodoSlice }} //thunk Config
>(
    'todos/fetchTodos',
    async ()=> {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
        return (await response.json()) as Todo[];
    },
    { 
        condition: (_, {getState}) => {
        const {status} = getState().asyncTodos;
        if (status === 'loading') {
            return false;
        }
    },
},
);

export const createTodo = createAsyncThunk(
    'todos/createTodo',
    async(text: string) => {
        const newTodo: Required<Omit<Todo,'id' >> = {
            title: text,
            userId: 1,
            completed: false,
        };

        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
    });
    
    return (await response.json()) as Todo;
    },
)

export const toggleTodo = createAsyncThunk<
Todo, //что возвращаем
Todo['id'],//что получаем на вход
{state: {asyncTodos: AsyncTodoSlice},rejectValue: string }
>(
    'todos/toggleTodo',
    async (id, {getState, rejectWithValue})=> {
  const todo = getState().asyncTodos.list.find(el=> el.id === id)

  if (todo) {
    const response = await fetch (`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            completed: !todo.completed,
        }),
    });
    if (!response.ok) {
        return rejectWithValue(`Impossible to update todo with id ${id}`)
    }

    return await response.json();
  }

  return rejectWithValue(`No such todo with id ${id}`)
    });



export const removeTodo = createAsyncThunk<
Todo['id'],//что возвращаем
Todo['id'],// что получаем на вход
{rejectValue: string}
>(
    'todos/removeTodo',
    async (id, {rejectWithValue})=> {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
        method: 'DELETE',
    });

    if (!response.ok) {
        return rejectWithValue(`Impossible to delete todo with id ${id}`)
    }
    return id;
    },
);

