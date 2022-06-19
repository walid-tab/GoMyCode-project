import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProfilCand() {
  const user = useSelector((state)=>state.authUserReducer.user)
  
  return (
    <div className='profilUser'>
 

<div class="containerP emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                    {user?.firstName} <span>{user?.lastName}</span>  
                                    </h5>
                                    <h6>
                                    {user?.bio}
                                    </h6>
                                    
                            <ul class="navb nav-tabs" id="myTab" role="tablist">
                                <li class="nav-iteme">
                                    <div class="nav-link-b active" id="home-tab"  role="tab"  aria-selected="true">About</div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        
                        <div  class="profile-edit-btn" name="btnAddMore"><Link className='editP' to='/ProfilCand/EditProfil'>Edit Profil</Link></div>
                        <div  class="profile-edit-PS" name="btnAddMore"><Link className='password' to='/ProfilCand/ChangePassword'>Change Password</Link></div>

                    </div>
                </div>

                <div class="row">

                    <div class="col-md-4">
                        <div class="profile-work">                            
                            <p>SKILLS</p>
                            <div className='aa'>{user?.skills}</div><br/>                            
                        </div>
                    </div>

                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>First Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user?.firstName}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Last Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user?.lastName}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user?.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user?.numTel}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{user?.specialite}</p>
                                            </div>
                                        </div>
                           
                            
                            </div>
                            
                        </div>
                        
                    </div>
                    <div class="col-md-2">
                        <input  class="profile-edit-btn" style={{marginTop:"40px",marginLeft:'40px'}} name="btnAddMore" value="Delete Account"/>
                    </div>
                </div>
                
            </form>           
        </div>
    </div>
  )
}

export default ProfilCand