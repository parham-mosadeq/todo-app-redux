const textTodo = (e) => {
  return {
    type: 'TEXT_TODO',
    payload: e,
  };
};

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

const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    payload: id,
  };
};

const closeEdit = (id) => {
  return {
    type: 'CLOSE_EDIT',
    payload: id,
  };
};

export { addTodo, textTodo, doneTodo, editTodo, removeTodo, closeEdit };
