import React, { useEffect, useRef } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';

// actions
import { textTodo, addTodo } from '../redux/todos/actionTodo';

// component
import Todo from './Todo';

// styles
import { Article, MainContainer, FormBtn } from '../styles/styledComponents';

const Todos = () => {
  const inputData = useSelector((state) => state.todoReducer.textTodo);

  const todosArray = useSelector((state) => state.todoReducer.todos);
  const isEditing = useSelector((state) => state.todoReducer.isEditing);

  const dispatch = useDispatch();

  const focusOnInput = useRef();

  useEffect(() => {
    focusOnInput.current.focus();
  });

  return (
    <MainContainer>
      {/* form start */}
      <form
        className='w-1/2 mr-auto ml-auto rounded-xl bg-purple-600 shadow-lg h-1/5 pt-8'
        onClick={(e) => e.preventDefault()}
      >
        {/* input start */}
        <div>
          <input
            ref={focusOnInput}
            value={inputData}
            onChange={(e) => dispatch(textTodo(e.target.value))}
            type='text'
            placeholder='what to do?'
            className='bg-teal-900 shadow-xl rounded-md w-full text-center text-white  capitalize focus:outline-0 hover: cursor-pointer p-2'
          />
        </div>
        {/* input end */}

        {/* button start */}
        <div>
          <FormBtn onClick={() => dispatch(addTodo())}>
            {isEditing ? ' finished' : 'add my todo'}
          </FormBtn>
          {/* button end */}
        </div>
      </form>
      {/* form end */}

      {/* show todo */}
      <Article>
        {/* todo start */}
        {todosArray ? (
          todosArray.map((todo) => {
            const { id, txt } = todo;
            return (
              <div
                key={id}
                className='mt-4 mb-4 p-3 max-h-96  bg-yellow-200 rounded-md '
              >
                <Todo txt={txt} id={id} />
              </div>
            );
          })
        ) : (
          <h2>add a todo...</h2>
        )}
        {/* todo end */}
      </Article>
      {/* show todo */}
    </MainContainer>
  );
};

export default Todos;
