import axios from 'axios'

import { AppDispatch } from '../store'
import { ActionTypes } from './types'

const url = "https://jsonplaceholder.typicode.com/todos"

export interface Todo {
    id: number,
    title: string,
    completed: boolean
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[]
}
export const fetchTodos = () => {
    return async (dispatch: AppDispatch) => {
        const response = await axios.get<Todo[]>(url)

        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        })
    }
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo,
    payload: number
}

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    }
}
