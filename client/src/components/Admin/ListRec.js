import React from 'react'
import { useSelector } from 'react-redux'
import RecruiterCard from './RecruiterCard'

function ListRec() {
  const loading = useSelector((state)=>state.authUserReducer.load)
  const recruteurs = useSelector((state)=>state.adminReducer.allRecruteurs)

  return (
    <div style={{margin:'15px',display:'flex', gap:'20px', flexWrap:'wrap'}}>
    {loading? 
    
    <div className="loading">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
    : recruteurs.map((recruteur,i)=>(<RecruiterCard recruteur={recruteur} key={i}/>)) }
  </div>
  )
}

export default ListRec