import { combineReducers } from 'redux';
import { Todo } from '../actions';
import { todosReducer } from './todosReducer';


export interface StoreState {
    todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducer
})



export type RootState = ReturnType<typeof reducers>