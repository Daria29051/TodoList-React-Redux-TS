import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import { AppDispatch, RootState } from './store';


export const useAppDispatch = ()=> useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;//используем , если работаем без файла todoSelectors
//а напрямую работаем со state в  Todolist.tsx