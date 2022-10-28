import React from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
// actions
import {
  doneTodo,
  editTodo,
  removeTodo,
  closeEdit,
} from '../redux/todos/actionTodo';

import styled from 'styled-components';

const Container = styled.div`
  height: 150px;
  width: 100%;
`;

const BtnContainer = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  height: min-content;
  padding: 7px 14px;
  display: flex;
  flex-wrap: nowrap;
  margin: 1rem;
  border-radius: 8px;
`;

const Todo = ({ txt, id }) => {
  const dispatch = useDispatch();

  const isDone = useSelector((state) => state.todoReducer.isDone);
  const isEditing = useSelector((state) => state.todoReducer.isEditing);
  const isId = useSelector((state) => state.todoReducer.id);

  return (
    <Container>
      {isId !== id ? (
        <p
          onDoubleClick={() => dispatch(doneTodo(id))}
          className={
            isDone
              ? 'text-gray-800 font-light tracking-wider line-through cursor-pointer'
              : ''
          }
        >
          {txt}
        </p>
      ) : (
        <p>try</p>
      )}

      <BtnContainer>
        <button
          onClick={() =>
            isEditing ? dispatch(closeEdit(id)) : dispatch(editTodo(id))
          }
        >
          {isEditing ? '❌' : '📝'}
        </button>

        {/* 🔁 ✔ */}

        <button onClick={() => dispatch(removeTodo(id))}>❌</button>
      </BtnContainer>
    </Container>
  );
};

export default Todo;
