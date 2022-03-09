import React, { useEffect } from 'react';
import { deleteTodo, fetchTodos, Todo } from './store/actions';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/reducers';



interface AppProps {
  todos?: Todo[],
  fetchTodos?(): Function
}

function App(props: AppProps): JSX.Element {
  const todos = useSelector((state: RootState) => state)
  const dispatch = useDispatch()

  const handleClickEvent = (): void => {
    dispatch(fetchTodos())
  }
  const handleClickHandler = (id: number) => {
    dispatch(deleteTodo(id))
  }
  const renderList = (): JSX.Element[] => {
    return todos.todos.map((todo: Todo) => {
      return <div key={todo.id} onClick={() => handleClickHandler(todo.id)}>{todo.title}</div>
    })
  }

  debugger;
  return (
    <div>
      <button onClick={handleClickEvent}>Fetch</button>
      {renderList()}
    </div>
  );
}

export default App;
