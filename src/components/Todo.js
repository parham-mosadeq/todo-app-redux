import React from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
// actions
import { doneTodo, editTodo, removeTodo } from '../redux/todos/actionTodo';

const Todo = ({ txt, id }) => {
  const dispatch = useDispatch();

  const isDone = useSelector((state) => state.todoReducer.isDone);

  return (
    <div className='  '>
      <p>{txt}</p>
      <div>
        <button onClick={() => dispatch(editTodo(id))}>edit</button>
        <button
          className=''
          onClick={() => dispatch(doneTodo(id))}
        >
          {isDone ? 'not yet' : 'done'}
        </button>
        <button onClick={() => dispatch(removeTodo(id))}> remove</button>
      </div>
    </div>
  );
};

export default Todo;
