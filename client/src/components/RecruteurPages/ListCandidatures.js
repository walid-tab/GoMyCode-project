import React from 'react'
import { useSelector } from 'react-redux'
import CadidatureCard from './CadidatureCard'

function ListCandidatures() {
  const loading = useSelector((state)=>state.authUserReducer.load)
  const candidatures = useSelector((state)=>state.CandidatureReducer.offreCandidats)
  return (
    <div className='bodyCard'>
    {loading? 
    
    <div className="loading" >
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
    : candidatures.map((candidat,i)=>(< CadidatureCard candidat={candidat} key={i}/>)) }
  </div>
  )
}

export default ListCandidatures