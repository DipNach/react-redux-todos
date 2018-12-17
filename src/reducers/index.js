import {combineReducers} from 'redux';
import todos from './todos';

const rootReducers = combineReducers({
    todos
})

export default rootReducers;