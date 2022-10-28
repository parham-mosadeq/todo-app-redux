import { v4 as uuidv4 } from 'uuid';

const initState = {
  textTodo: '',
  todos: [],
  isDone: false,
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
      state.todos.push({ id: uuidv4(), txt: state.textTodo });

      return {
        ...state,
        textTodo: '',
        isEditing: false,
      };

    // if (state.textTodo) {
    //   state.todos.push({ id: uuidv4(), txt: state.textTodo });
    //   return {
    //     ...state,
    //     textTodo: '',
    //     isEditing: false,
    //   };
    // } else {
    //   return {
    //     ...state,
    //     textTodo: '',
    //   };
    // }

    case 'REMOVE_TODO':
      const newItems = state.todos.filter((item) => {
        return item.id !== action.payload;
      });
      return {
        ...state,
        todos: newItems,
        textTodo: '',
      };

    case 'DONE_TODO':
      const finished = state.todos.find((item) => item.id === action.payload);
      if (action.payload === finished.id) {
        console.log(finished);
        return {
          ...state,
          isDone: true,
          textTodo: '',
        };
      } else {
        return {
          ...state,
          isDone: false,
          textTodo: '',
        };
      }

    case 'EDIT_TODO':
      const editedItem = state.todos.find((item) => item.id === action.payload);
      return {
        ...state,
        textTodo: editedItem.txt,
        isEditing: !state.isEditing,
      };

    case 'CLOSE_EDIT':
      // const removeEditedItem = state.todos.find(
      //   (item) => item.id === action.payload
      // );
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
