import { combineReducers } from 'redux';
import todosReducer from 'reducers/todosReducer';
import authReducer from 'reducers/authReducer';

export default combineReducers({
  todos: todosReducer,
  auth: authReducer
});
