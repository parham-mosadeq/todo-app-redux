import React from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
// actions
import { editTodo, removeTodo, closeEdit } from '../redux/todos/actionTodo';
// styles
import { BtnContainer, Container } from '../styles/styledComponents';

const Todo = ({ txt, id }) => {
  const dispatch = useDispatch();

  const isEditing = useSelector((state) => state.todoReducer.isEditing);
  const isId = useSelector((state) => state.todoReducer.id);

  return (
    <Container>
      <p>{txt}</p>
      <BtnContainer>
        <button
          onClick={() =>
            isEditing ? dispatch(closeEdit(id)) : dispatch(editTodo(id))
          }
        >
          {isEditing && id === isId ? '❌' : '📝'}
        </button>

        {/* 🔁 ✔ */}

        <button onClick={() => dispatch(removeTodo(id))}>❌</button>
      </BtnContainer>
    </Container>
  );
};

export default Todo;
