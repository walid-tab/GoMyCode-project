import React , {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {rechercheUser}  from '../../JS/Actions/recAction'
import FoundUser from './FoundUser'
function HomeRec() {
  const allUsers= useSelector((state)=>state.OffreReducer.users)
  const [search , setSearch] = useState("")
  const dispatch= useDispatch()
  const finduser =(e)=>{
    e.preventDefault()
    dispatch(rechercheUser(search))
    setSearch('')
  }
  return (
    <div className='bodySearch'>
      
       <div className='welcome'>Find Candidate Cv</div>  
      <div class="button_box2">
          <form class="form-wrapper-2 cf">
          <input type="text" value={search} placeholder="Search here..." required onChange={e=>setSearch(e.target.value)}/>
          <button  onClick={finduser} >Search</button>
          </form>
          </div >      
         <div className='Found'> {
            allUsers.map((user,i)=>(< FoundUser  user={user} key={i} /> ))
          }
          </div>

    </div>
  )
}

export default HomeRec