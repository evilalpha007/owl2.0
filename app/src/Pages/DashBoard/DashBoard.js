import React from 'react'
import SideBar from './SideBar'
import DashBoardForm from './DashboardForm'
import ContentRender from './ContentRender'
import AccountSection from './AccountSection'
import ContactSection from './ContactSection'
import UserHeader from './UserHeader'
import { useState } from 'react';

const DashBoard = ({userDetails,  setIsAuth}) => {

  const [SideBarDisplay, setSideBarDisplay] = useState("block");

  const [flag, setFlag] = useState(1);
  let rightContent, pageTitle;
  if(flag === 0) {
    pageTitle = "All Requests";
    rightContent = <ContentRender usermail={userDetails.email} />;
  } else if(flag === 1) {
    pageTitle = "Request";
    rightContent = <DashBoardForm usermail={userDetails.email} />;
  } else if(flag === 2){
    pageTitle = "Account Details";
    rightContent = <AccountSection usermail={userDetails.email} />;
  } else {
    pageTitle = "Contact Us";
    rightContent = <ContactSection usermail = {userDetails.email} name = {userDetails.name} />
  }
  return (
    <>
      <div style={{display: 'flex'}}>
        <SideBar 
             setIsAuth = {setIsAuth}
             SideBarDisplay = {SideBarDisplay}
             setSideBarDisplay = {setSideBarDisplay}
            setFlag={setFlag} 
          />
        <div style={{backgroundColor: "#f1f3f1", flexGrow: "1", minHeight: "100vh"}}>
            <UserHeader setSideBarDisplay={setSideBarDisplay} userDetails={userDetails} setIsAuth = {setIsAuth}/>
            <div style={{padding: "1rem"}}>
              <div style={{backgroundColor: "white",  borderBottom: "1px solid #e2e8ea"}}>
                <div style={{position: "relative", top: "1px", color: "#528ff0", padding: "0.5rem", marginLeft: "1rem", fontSize: "1rem", fontWeight: "600", borderBottom: "2px solid #528ff0", width: "fit-content"}}>
                  {pageTitle}
                </div>
              </div>
              {rightContent}
            </div>
        </div>
    </div>
    </>
  )
}

export default DashBoard