import React, { useEffect } from 'react'
import JobCard from './JobCard'
import { useDispatch, useSelector } from 'react-redux'
import { getJobs } from '../JS/Actions/OffreActions'

function JobsList() {
  const jobs = useSelector((state)=>state.OffreReducer.allJobs)
  const loading = useSelector((state)=>state.OffreReducer.load)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch( getJobs())
  }, [dispatch])
  return (
    
    <div className='bodyCard'>
      {loading?       
      <span class="loader">Loading..</span>
      : jobs.map((job,i)=>(< JobCard job={job} key={i}/>)) }
    </div>
  ) 
}
export default JobsList;