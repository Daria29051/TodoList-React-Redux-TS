import {configureStore, combineReducers} from '@reduxjs/toolkit';
import todoReducer from './features/Todo/todoSlice';

const rootReducer = combineReducers({
 todo: todoReducer,
});

export const store = configureStore({
    reducer: rootReducer
});


//СОЗДАЕМ 2 ТИПА - один для определения типа стейта, а второй - для определния того как будет работать dispatch

export type RootState = ReturnType<typeof rootReducer>; //ОПРЕДЕЛЯЕМ ТИП STATE
//или
//export type RootStat = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;//ОПРЕДЕЛЯЕМ КАК БУДЕТ РАБОТАТЬ DISPATCH
