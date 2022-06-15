import { GET_JOBS } from "../actionTypes";

const initialState = {
  allJobs :[],
    load:true,
}

const OffreReducer= (state = initialState, { type, payload }) => {
 
  switch (type) {

  case GET_JOBS:
   
    return { ...state, allJobs:payload.allJobs,load:false }
    
  default:
    return state
  }
}

export default  OffreReducer;