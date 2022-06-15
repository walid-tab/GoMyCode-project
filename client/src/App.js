import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import LoginUser from './components/LoginUser'
import LoginRec from "./components/LoginRec";
import ContactUs from "./components/ContactUs";
import JobsList from "./components/JobsList";



function App() {
  return (
    <div className="App">
      <Navigation/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AccountUser" element={<LoginUser/>}/>        
        <Route path="/AccountRec" element={<LoginRec/>}/>
        <Route path="/Contact" element={<ContactUs/>}/>
        <Route path="/Jobs" element={<JobsList/>}/>
      </Routes>
    </div>
  );
}

export default App;
