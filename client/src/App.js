import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";

import Home from './components/Home'
import LoginUser from './components/LoginUser'
import LoginRec from "./components/LoginRec";
import ContactUs from "./components/ContactUs";
import JobsList from "./components/JobsList";
import ProfilCand from "./components/UserPages/ProfilCand";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCurrent } from "./JS/Actions/userAction";
import PrivateRoute from "./components/Private/PrivateRoute";
import UpdatePassword from "./components/UserPages/UpdatePassword";
import UpdateUser from "./components/UserPages/UpdateUser";
import DetailsJob from "./components/UserPages/DetailsJob";
import { getCurrentRec } from "./JS/Actions/recAction";
import MyListJobs from "./components/RecruteurPages/MyListJobs";
import ProfilRec from "./components/RecruteurPages/ProfilRec";
import UpdatePassRec from "./components/RecruteurPages/UpdatePassRec";
import UpdateRec from "./components/RecruteurPages/UpdateRec";
import AddJob from "./components/RecruteurPages/AddJob";
import ListCandidatures from "./components/RecruteurPages/ListCandidatures";
import EditJob from "./components/RecruteurPages/EditJob";

 

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('user')==="recruteur"){
      dispatch(getCurrentRec())
    }else{
      dispatch(getCurrent())
    }
 
  }, [dispatch])

  return (
    <div className="App">
      <Navigation/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AccountUser" element={<LoginUser/>}/>        
        <Route path="/AccountRec" element={<LoginRec/>}/>
        <Route path="/Contact" element={<ContactUs/>}/>
        <Route path="/Jobs" element={<JobsList/>}/>

        <Route path="/ProfilCand/ChangePassword" element={
          <PrivateRoute>
          <UpdatePassword/>
          </PrivateRoute>
        }/>
         <Route path="/ProfilCand/EditProfil" element={
          <PrivateRoute>
          <UpdateUser/>
          </PrivateRoute>
        }/>

        <Route path="/ProfilCand" element={
          <PrivateRoute>
            <ProfilCand/>
          </PrivateRoute>
        }/>
        <Route path="/Jobs/Details/:id" element={
          <PrivateRoute>
            <DetailsJob/>
          </PrivateRoute>
        }
        />
         <Route path="/MyJobs" element={
          <PrivateRoute>
            <MyListJobs/>
          </PrivateRoute>
        }/>
         <Route path="/ProfilRec" element={
          <PrivateRoute>
            <ProfilRec/>
          </PrivateRoute>
        }/>

        <Route path="/ProfilRec/ChangePassword" element={
          <PrivateRoute>
          <UpdatePassRec/>
          </PrivateRoute>
        }/>
         <Route path="/ProfilRec/EditProfil" element={
          <PrivateRoute>
          <UpdateRec/>
          </PrivateRoute>
        }/>
         <Route path="/addJob" element={
          <PrivateRoute>
          <AddJob/>
          </PrivateRoute>
        }/>
        <Route path="/MyJobs/ListCandidates" element={
          <PrivateRoute>
          <ListCandidatures/>
          </PrivateRoute>
        }/>   
        <Route path="/MyJobs/EditJob" element={
          <PrivateRoute>
          <EditJob/>
          </PrivateRoute>
        }/>        


      </Routes>
    </div>
  );
}

export default App;
