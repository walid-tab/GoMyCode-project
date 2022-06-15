import React from 'react'
import JobCard from './JobCard'
import { useSelector } from 'react-redux'


function JobsList() {
  const jobs = useSelector((state)=>state.OffreReducer.allJobs)
  const loading = useSelector((state)=>state.OffreReducer.load)
  return (
    
    <div className='bodyCard'>
      {loading? 
      
      <div className="loading" >
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
      : jobs.map((job,i)=>(< JobCard job={job} key={i}/>)) }
    </div>
  ) 
}
export default JobsList;