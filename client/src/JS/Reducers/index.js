import {combineReducers} from 'redux'
import authUserReducer from './authUserReducer'
import authRecReducer from './authRecReducer'
import OffreReducer from './OffreReducer'
const rootReducer = combineReducers({
    authUserReducer,authRecReducer, OffreReducer,
})

export default rootReducer