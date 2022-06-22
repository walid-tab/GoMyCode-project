import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteMsgContact } from '../../JS/Actions/AdminActions'

function MessageCard({msg}) {
  const dispatch=useDispatch()

  return (
    <div className='bodyMsg'>
      <div className="blog_post1">
  
  <div className="container_copy1">
    <h4>{msg.Name}</h4>
    <h3>{msg.email}</h3>
    <p>{msg.objetMsg}</p>
    <div className="btn_primary1" onClick={()=>dispatch(deleteMsgContact(msg._id))}>delete</div>
  </div>
  
</div>
    </div>
  )
}

export default MessageCard