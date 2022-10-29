import { v4 as uuidv4 } from 'uuid';

const initState = {
  textTodo: '',
  todos: [],
  isEditing: false,
  id: null,
};
const reducerTodo = (state = initState, action) => {
  switch (action.type) {
    case 'TEXT_TODO':
      return {
        ...state,
        textTodo: action.payload,
      };

    case 'ADD_TODO':
      
      if (state.isEditing) {
        const itemId = state.id;
        const findItem = state.todos.find((item) => item.id === itemId);
        findItem.txt = state.textTodo;
      } else {
        //pushing new entered data to todos array
        state.todos.push({ id: uuidv4(), txt: state.textTodo });
      }

      return {
        ...state,
        textTodo: '',
        isEditing: false,
      };

    case 'REMOVE_TODO':
      const newItems = state.todos.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        todos: newItems,
        textTodo: '',
      };

    case 'EDIT_TODO':
      const editedItem = state.todos.find((item) => item.id === action.payload);

      return {
        ...state,
        textTodo: editedItem.txt,
        isEditing: !state.isEditing,
        id: action.payload,
      };

    case 'CLOSE_EDIT':
      return {
        ...state,
        textTodo: '',
        isEditing: false,
      };

    default:
      return state;
  }
};

export default reducerTodo;
