import React from 'react'

function CadidatureCard({candidat}) {
  return (
    <div>
      <h6>Diplome : {candidat.diplome}</h6>  
      <h6>Date ouverture : {candidat.dateOuverture}</h6>  
      <h6>formation: {candidat.formation}</h6>  
    </div>
  )
}

export default CadidatureCard