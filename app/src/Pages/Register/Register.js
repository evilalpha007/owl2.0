import React from 'react'
import RegisterForm from '../../UtilityTools/RegisterForm/RegisterForm.js'
import Styles from './Register.module.css'

const Register = () => {
  return (
    <div className={`${Styles.register}`}>
      <RegisterForm/>
    </div>
  )
}

export default Register
