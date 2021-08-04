import {BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import SignupEmp from './components/SignupEmp';
import "antd/dist/antd.css";
import SignIn from './components/SignIn';
 import SignupComp from './components/SignupComp';
import Home from './pages/Home';
import EmployeeProfil from './pages/EmployeeProfil';
import CompanyProfil from './pages/CompanyProfil';
import AdminProfil from './pages/CompanyProfil';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route  path="/registerEmployee" exact component= {SignupEmp}/>
      <Route  path="/registerCompany" exact component= {SignupComp}/>
      <Route  path="/employee" exact component= {EmployeeProfil}/>
      <Route  path="/company" exact component= {CompanyProfil}/>
      <Route   path="/login" exact  component= {SignIn}/>
      <Route   path="/Logout" exact  component= {Logout}/>
      <Route   path="/admin" exact  component= {AdminProfil}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
