import React from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
// actions
import {
  editTodo,
  removeTodo,
  closeEdit,
  doneTodo,
} from '../redux/todos/actionTodo';
// styles
import {
  BtnContainer,
  Container,
} from '../styles/styledComponents';

const Todo = ({ txt, id }) => {
  const dispatch = useDispatch();

  const isEditing = useSelector((state) => state.todoReducer.isEditing);
  const isDone = useSelector((state) => state.todoReducer.isDone);
  const isId = useSelector((state) => state.todoReducer.id);

  return (
    <Container>
      <p className={isDone && id === isId ? 'text-blue-500' : ' text-black'}>
        {txt}
      </p>

      <BtnContainer>
        <button
          onClick={() =>
            isEditing ? dispatch(closeEdit(id)) : dispatch(editTodo(id))
          }
        >
          {isEditing && id === isId ? '❌' : '📝'}
        </button>

        <button onClick={() => dispatch(doneTodo(id))}>
          {isDone && id === isId ? '🔁' : '✔'}
        </button>
        {/* 🔁 ✔ */}

        <button onClick={() => dispatch(removeTodo(id))}>❌</button>
      </BtnContainer>
    </Container>
  );
};

export default Todo;
