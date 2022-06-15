import {combineReducers} from 'redux'
import authUserReducer from './authUserReducer'
import authRecReducer from './authRecReducer'
const rootReducer = combineReducers({
    authUserReducer,authRecReducer
})

export default rootReducer