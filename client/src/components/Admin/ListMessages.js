import React from 'react'
import { useSelector } from 'react-redux'
import MessageCard from './MessageCard'

function ListMessages() {
  const loading = useSelector((state)=>state.adminReducer.load)
  const msgs = useSelector((state)=>state.adminReducer.msgs)

  return (
    <div style={{margin:'15px',display:'inlineBlock', gap:'30px', flexWrap:'wrap'}}>
    {loading? 
    
    <div className="loading">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
    : msgs.map((msg,i)=>(<MessageCard msg={msg} key={i}/>)) }
  </div>
  )
}

export default ListMessages