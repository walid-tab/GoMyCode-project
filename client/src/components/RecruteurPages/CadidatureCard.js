import React from 'react'

function CadidatureCard({candidat}) {
  return (
    <div>
      <h6>Opening Date : {candidat.diplome}</h6>  
      <h6>Opening Date : {candidat.dateOuverture}</h6>  
      <h6>Opening Date : {candidat.formation}</h6>  
    </div>
  )
}

export default CadidatureCard