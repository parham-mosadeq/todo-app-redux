import { combineReducers } from 'redux';
// todo reducer
import reducerTodo from './todos/reducerTodo';

const rootReducer = combineReducers({
  todoReducer: reducerTodo,
});


export default rootReducer