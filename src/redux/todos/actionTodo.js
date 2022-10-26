const addTodo = (e) => {
  return {
    type: 'ADD_TODO',
    payload: e,
  };
};

const editTodo = (id) => {
  return {
    type: 'EDIT_TODO',
    payload: id,
  };
};

const doneTodo = (id) => {
  return {
    type: 'DONE_TODO',
    payload: id,
  };
};

export { addTodo, doneTodo, editTodo };
