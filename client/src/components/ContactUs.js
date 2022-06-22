import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postMSG } from '../JS/Actions/GuestActions'

function ContactUs() {
	const [Name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [objetMsg, setObjetMsg] = useState("")
	const dispatch=useDispatch()

  return (
    <div className='contc'>
        
        <div class="container">
	<div class="row">
			
	</div>
	<div class="row">
			<h1 style={{textAlign:"center"}}>Contact Us</h1>
	</div>
	<div class="row input-container">
			<div class="col-xs-12">
				<div class="styled-input wide">
					<input type="text" required  onChange={(e)=>setName(e.target.value)} value={Name}/>
					<label>Name</label> 
				</div>
			</div>
			<div class="col-md-6 col-sm-12">
				<div class="styled-input">
					<input type="text" required onChange={(e)=>setEmail(e.target.value)} value={email}/>
					<label>Email</label> 
				</div>
			</div>
			
			<div class="col-xs-12">
				<div class="styled-input wide">
					<textarea required onChange={(e)=>setObjetMsg(e.target.value)} value={objetMsg}></textarea>
					<label>Message</label>
				</div>
			</div>
			<div class="col-xs-12">
				<div class="btn-lrg submit-btn" onClick={()=>dispatch(postMSG({Name,email,objetMsg},setEmail(""),setName(""),setObjetMsg("")))}>Send Message</div>
			</div>
	</div>
</div>


    </div>
  )
}

export default ContactUs