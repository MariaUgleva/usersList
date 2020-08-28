import resultGetRegucer from './resultGetReducer';
import editUserReducer from './editUserReducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    resultGet: resultGetRegucer,
    editUserReducer: editUserReducer
});

export default reducer;