import { GET_CURRENT_REC, LOGIN_REC, LOGOUT,REGISTER_REC } from "../actionTypes";

const initialState = {
    authRec:false,
    load:true,
    recruiter:null
};

const authRecReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case REGISTER_REC:
      localStorage.setItem('token', payload.token )
    return { ...state, authRec:true, load:false, recruiter: payload.newRec}
    case LOGIN_REC:
        localStorage.setItem('token', payload.token )
        return { ...state, authRec:true, load:false, recruiter: payload.foundRec}
     case GET_CURRENT_REC:
        return { ...state, authRec:true, load:false, recruiter: payload.recruiter}
    case LOGOUT :
      localStorage.removeItem('token')
      return {...state, authRec:false, load:false, recruiter:null}

  default:
    return state
  }

}

export default authRecReducer