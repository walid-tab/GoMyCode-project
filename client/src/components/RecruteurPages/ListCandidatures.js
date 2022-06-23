import React from 'react'
import { useSelector } from 'react-redux'
import CadidatureCard from './CadidatureCard'

function ListCandidatures() {
  // const loading = useSelector((state)=>state.authUserReducer.load)
  const candidatures = useSelector((state)=>state.CandidatureReducer.offreCandidats)
  console.log(candidatures)
  return (
    <div className='bodyCard'>
   
    
    {/* <div className="loading" >
    <div className="circle"></div>
    <div className="circle"></div>
  <div className="circle"></div>
     <div className="circle"></div>
   </div> */}
  {candidatures.map((candidat,i)=>(< CadidatureCard candidat={candidat} key={i}/>)) }
  </div>
  )
}

export default ListCandidatures