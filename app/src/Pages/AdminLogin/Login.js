import React from 'react'
import LoginForm from '../../UtilityTools/AdminLoginForm/LoginForm.js'
import Styles from './Login.module.css'

const Login = ({setAdminUserDetails, setAdminIsAuth}) => {
  return (
    <>
    <div className={`${Styles.login}`}>
      <LoginForm 
      setAdminUserDetails={setAdminUserDetails} setAdminIsAuth = {setAdminIsAuth}
      />
    </div>
    </>
  )
}

export default Login
