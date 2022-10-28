import { v4 as uuidv4 } from 'uuid';

const initState = {
  textTodo: '',
  todos: [],
  isDone: false,
  isEditing:false
};
const reducerTodo = (state = initState, action) => {
  switch (action.type) {
    case 'TEXT_TODO':
      return {
        ...state,
        textTodo: action.payload,
      };

    case 'ADD_TODO':
      if (state.textTodo) {
        state.todos.push({ id: uuidv4(), txt: state.textTodo });
        return {
          ...state,
          textTodo: '',
        };
      } else {
        return {
          ...state,
          textTodo: '',
        };
      }

    case 'REMOVE_TODO':
      const newItems = state.todos.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        todos: newItems,
      };

    case 'DONE_TODO':
      const finished = state.todos.find((item) => item.id === action.payload);
      console.log(finished.txt);
      return {
        ...state,
        isDone: !state.isDone,
      };

    case 'EDIT_TODO':
      const editedItem = state.todos.find((item) => item.id === action.payload);

      return {
        ...state,
        textTodo: `edited: - ${editedItem.txt}`,
      };

    default:
      return state;
  }
};

export default reducerTodo;
