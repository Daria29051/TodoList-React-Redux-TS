import AddNewItem from "components/NewItem";

import { useAppDispatch } from "redux-hooks";
import { createTodo } from "./asyncTodoActions";


export const NewAsyncTodo = ()=> {
    const dispatch = useAppDispatch();
    const handleNewTodo = (title: string) => {
        dispatch(createTodo(title));

    }

    return (
        <AddNewItem placeholder="add new todo" handleClick={handleNewTodo}/>
    )
};

