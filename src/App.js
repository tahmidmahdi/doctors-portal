import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/Dashboard/AllPatients/AllPatients';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const emailContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <emailContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          
          <PrivateRoute path="/dashboard/appointment">  <Dashboard></Dashboard></PrivateRoute>
          
          <Route path="/allPatients">
            <AllPatients></AllPatients>
          </Route>
          <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </emailContext.Provider>
  );
}

export default App;
