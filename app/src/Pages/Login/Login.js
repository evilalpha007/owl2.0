import React from 'react'
import LoginForm from '../../UtilityTools/LoginForm/LoginForm.js'
import Styles from './Login.module.css'

const Login = ({setUserDetails, setIsAuth}) => {
  return (
    <>
    <div className={`${Styles.login}`}>
      <LoginForm setUserDetails={setUserDetails} setIsAuth = {setIsAuth} />
    </div>
    </>
  )
}

export default Login
