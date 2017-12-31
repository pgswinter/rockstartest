import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import PostReducer from './getListAddressReducer'


const rootReducer = combineReducers({
  form: formReducer,
  address: PostReducer
});

export default rootReducer;