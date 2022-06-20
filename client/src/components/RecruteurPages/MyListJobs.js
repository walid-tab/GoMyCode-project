import React from 'react'
import { useSelector } from 'react-redux'
import MyJobCard from './MyJobCard'

function MyListJobs() {
  const loading = useSelector((state)=>state.OffreReducer.load)
  const myJob = useSelector((state)=>state.OffreReducer.allJobs)

  return (
    <div className='bodyCard'>
      {loading? 
      
      <div className="loading" >
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
      : myJob.map((job,i)=>(< MyJobCard job={job} key={i}/>)) }
    </div>
  )
}

export default MyListJobs