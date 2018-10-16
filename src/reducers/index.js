import { combineReducers } from 'redux'
import informativaReducer from './informativaReducer'
import programReducer from './programReducer'

export default combineReducers({
	informativa: informativaReducer,
	program: programReducer
});