import { GET_RECS, GET_USERS } from "../actionTypes";

const initialState = {
    allCandidats :[],
    allRecruteurs: [],
    load:true,
}

const adminReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_USERS:
    return { ...state, allCandidats:payload.allCandidats,load:false }
  case GET_RECS:
      return { ...state, allRecruteurs:payload.allRecruteurs,load:false }
  

  default:
    return state
  }
}

export default  adminReducer;