import React from 'react'
import { useSelector } from 'react-redux'
import JobCard from './JobCard'

function ListJobs() {
  const loading = useSelector((state)=>state.adminReducer.load)
  const allJobs = useSelector((state)=>state.adminReducer.allJobs)

  return (
    <div style={{margin:'15px',display:'flex', gap:'20px',justifyContent:'center', flexWrap:'wrap'}}>
    {loading? 
    
    <div className="loading">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
    : allJobs.map((job,i)=>(<JobCard job={job} key={i}/>)) }
  </div>
  )
}

export default ListJobs