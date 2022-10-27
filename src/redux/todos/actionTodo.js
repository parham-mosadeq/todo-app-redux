const textTodo = (e) => {
  return {
    type: 'TEXT_TODO',
    payload: e,
  };
};

const addTodo = () => {
  return {
    type: 'ADD_TODO',
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

const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    payload: id,
  };
};

export { addTodo, textTodo, doneTodo, editTodo, removeTodo };
