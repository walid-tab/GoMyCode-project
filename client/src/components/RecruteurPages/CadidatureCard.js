import React from 'react'
import { useNavigate } from 'react-router-dom'

function CadidatureCard({candidat}) {
  const navigate = useNavigate()

  return (
    <div class="card">
  <img src={candidat?.candidatId.imageCand ? `images/${candidat.candidatId.imageCand}`: "https://bootdey.com/img/Content/avatar/avatar7.png"} alt="" style={{width:"100%"}}/>
  <div class="container">
    <h4><b>{candidat.candidatId.email}</b></h4>
    <p><b>Diplome</b> : {candidat.diplome}</p>
    <p><b>Experience : </b>{candidat.experience}</p>
    <p><b>Formation : </b>{candidat.formation}</p>
    <p><b>Langues : </b>{candidat.langues}</p>
    <input style={{marginLeft:"20px"}} class="Delete-Acc" value="Profil" onClick={()=>{navigate('/ProfilCand')}}/>
    
  </div>
</div>
    
  )
}

export default CadidatureCard