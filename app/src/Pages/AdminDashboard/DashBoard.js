import React from 'react'
import SideBar from './SideBar'
import ContentRender from './ContentRender'
import UserInfo from './UserInfo'
import ApproveUser from './ApproveUser'
import { useState } from 'react';

const DashBoard = ({ userDetails, setIsAuth }) => {

  const [flag, setFlag] = useState(0);
  let right;
  if(flag=== 0) {
    right = <ContentRender usermail={userDetails.email} />
  }
  else if(flag === 1) {
    right = <ApproveUser usermail={userDetails.email} />
  }
  else {
    right = <UserInfo usermail={userDetails.email} />
  }
  return (
    <>
      <div style={{ display: 'flex' }}>
        <SideBar
          setIsAuth={setIsAuth}
          setFlag={setFlag}
        />
          <div style={{ padding: "2rem", backgroundColor: "#f1f3f1", width: "100%" }}>
            {right}
          </div>
      </div>
    </>
  )
}

export default DashBoard