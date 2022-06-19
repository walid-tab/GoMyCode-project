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
//  import { getCurrentRec } from "./JS/Actions/recAction";

 

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrent())
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
        }
        />
        


      </Routes>
    </div>
  );
}

export default App;
