import React, { useEffect, useRef } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';

// actions
import { textTodo, addTodo } from '../redux/todos/actionTodo';

// component
import Todo from './Todo';

const Todos = () => {
  const inputData = useSelector((state) => state.todoReducer.textTodo);

  const todosArray = useSelector((state) => state.todoReducer.todos);
  // const todosArray = JSON.parse(localStorage.getItem('todo'));
  const dispatch = useDispatch();

  const focusOnInput = useRef();

  useEffect(() => {
    focusOnInput.current.focus();
  });

  return (
    <div className='bg-purple-500  h-screen capitalize  pt-5'>
      {/* form start */}
      <form
        className=' mt-2 w-1/2 mr-auto ml-auto rounded-xl bg-purple-600 shadow-lg h-1/5   pt-8'
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
            className='bg-teal-900 shadow-xl rounded-md  capitalize focus:outline-0 hover: cursor-pointer p-2'
          />
        </div>
        {/* input end */}

        {/* button start */}
        <div className='mt-5 text-red-300  rounded-md shadow-xl w-1/3 mr-auto ml-auto bg-pink-900'>
          <button
            className='capitalize tracking-wide pl-1 pr-1 pt-2 pb-2 hover:shadow-lg'
            onClick={() => dispatch(addTodo())}
          >
            add my todo
          </button>
        </div>
      </form>
      {/* form end */}

      {/* button end */}

      {/* show todo */}
      <article className='bg-sky-600 w-6/12 mr-auto ml-auto mt-5 rounded-lg p-4 border-4'>
        {/* todo start */}
        {todosArray.length ? (
          todosArray.map((todo) => {
            const { id, txt } = todo;
            return (
              <div className='mt-4 mb-4 p-3  bg-yellow-200 rounded-md '>
                <Todo key={id} txt={txt} id={id} />
              </div>
            );
          })
        ) : (
          <h2>add a todo...</h2>
        )}
        {/* todo end */}
      </article>
      {/* show todo */}
    </div>
  );
};

export default Todos;