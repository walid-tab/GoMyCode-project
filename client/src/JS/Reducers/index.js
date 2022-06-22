import {combineReducers} from 'redux'
import authUserReducer from './authUserReducer'
import authRecReducer from './authRecReducer'
import OffreReducer from './OffreReducer'
import CandidatureReducer from './CandidatureReducer'
import adminReducer from './adminReducer'
const rootReducer = combineReducers({
    authUserReducer,authRecReducer, OffreReducer,CandidatureReducer,adminReducer
})

export default rootReducer