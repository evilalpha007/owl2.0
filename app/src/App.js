import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import NewHeader from './Components/NewHeader/NewHeader'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import BackgroundImg from './Components/BackgroundImg/BackgroundImg'
import DashBoard from './Pages/DashBoard/DashBoard'
import AdminDashBoard from './Pages/AdminDashboard/DashBoard'
import Resources from './Pages/Resources/Resources'
import Blogs from './Pages/Blogs/Blogs'
import Home from './Pages/NewHome/Home'
import './App.css'
import Payment from './Pages/Payment/Payment'
const App = () => {

  const validateEmail = async (name, email) => {
    let cred = {
      name,
      email
    };
    let strCred = JSON.stringify(cred);

    try {
      let result = await fetch("/api/getDetailsByEmail", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: strCred
      });
      result = await result.json();
      if (result.status) {

        if(result.results.userType === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
        setUserDetails(result.results[0]);
        setIsAuth(true);

      }
      else {
        setIsAuth(false);
        localStorage.clear();
      }
    } catch (error) {
      setIsAuth(false);
      localStorage.clear();
    }
  }
  
  const [userDetails, setUserDetails] = useState({
    name: "User",
    email: "User@gmail.com"
  });
  const [Pricing, setPricing] = useState({
    duration: "yearly",
    country_code: "US",
    plan: "Gold"
  });
  
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  let details = localStorage.getItem('details');
  
  if (details !== null && !isAuth) {
    let val = JSON.parse(details);
    validateEmail(val.name, val.email);
  }

  return (
    <Router>
      <Switch>
        <Route path='/login' exact>
          {
            isAuth ?  ( isAdmin ? <Redirect to="/adminDashboard" /> : <Redirect to="/dashboard" />) 
            :
              <>
                <BackgroundImg image='/web/images/header-background.png' />
                <NewHeader />
                  <Login setUserDetails={setUserDetails} setIsAuth={setIsAuth} />
              </>
          }
        </Route>

        <Route path='/register' exact>
          {
            isAuth ? <Redirect to="/dashboard" /> :
              <>
                <BackgroundImg image='/web/images/header-background.png' />
                <div style={{ height: "100vh" }}>
                  <NewHeader />
                  <Register />
                </div>
              </>
          }
        </Route>

        <Route exact path="/blogs">
          <>
            <NewHeader/>
            <Blogs/>
          </>
        </Route>
        
        <Route exact path="/resources">
          <>
            <NewHeader/>
            <Resources/>
          </>
        </Route>

        <Route path='/dashboard' exact>
          {isAuth === false ? <Redirect to="/login" /> : <DashBoard userDetails={userDetails} setIsAuth={setIsAuth} />}
        </Route>
        <Route path='/adminDashboard' exact>
          {isAuth === false ? <Redirect to="/login" /> : <AdminDashBoard userDetails={userDetails} setIsAuth={setIsAuth} />}
        </Route>
        <Route path='/payment' exact>
          <div>
              <NewHeader />
                <Payment duration={Pricing.duration} countryCode={Pricing.country_code} plan={Pricing.plan} />
          </div>    
        </Route>

        <Route exact path="/*">
          <>
            <NewHeader />
            <Home setPricing = {setPricing}/>
          </>
        </Route>

      </Switch>
    </Router>
  )
 }

export default App