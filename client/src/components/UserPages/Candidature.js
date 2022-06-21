import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Candidature() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [diplome, setDiplome] = useState("")
    const [formation, setFormation] = useState("")
    const [experience, setExperience] = useState("")
    const [nbre_experience, setNbre_experience] = useState("")
    const [langues, setLangues] = useState("")
  return (
    <div>
         <div className='editUser'>
        <div class="centerP">
  <h1>Candidancy</h1>
  <form>    
    <div class="inputbox">
      <input type="text" required="required"  onChange={(e)=>setDiplome(e.target.value)} value={diplome} />
      <span>Diploma</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required" onChange={(e)=>setFormation(e.target.value)} value={formation} />
      <span>Training</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required" onChange={(e)=>setExperience(e.target.value)} value={experience} />
      <span>Professional Experience</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required" onChange={(e)=>setNbre_experience(e.target.value)} value={nbre_experience}/>
      <span>Nbre Of years of Experience</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required" onChange={(e)=>setLangues(e.target.value)} value={langues}/>
      <span>Languages</span>
    </div>
    

    <div class="inputbox">
      <input type="button" value="submit" onClick={()=>{dispatch(({diplome,experience,nbre_experience,langues,formation}));navigate('/Jobs')}}/>
    </div>
  </form>
</div>
    </div>
 
    </div>
  )
}

export default Candidature