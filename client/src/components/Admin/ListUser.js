import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from './UserCard'

function ListUser() {
  const loading = useSelector((state)=>state.authUserReducer.load)
  const users = useSelector((state)=>state.adminReducer.allCandidats)

  return (
    <div style={{margin:'15px',display:'flex', gap:'20px', flexWrap:'wrap'}}>
    {loading? 
    
    <div className="loading">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
    : users.map((user,i)=>(<UserCard user={user} key={i}/>)) }
  </div>
  )
}

export default ListUser