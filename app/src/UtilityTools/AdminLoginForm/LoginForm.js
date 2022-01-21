import React from 'react'
import Styles from './LoginForm.module.css'
import { Link, useHistory } from 'react-router-dom'
import swal from 'sweetalert';

const LoginForm = (
    {setAdminUserDetails, setAdminIsAuth}
    ) => {
    let history = useHistory();
    const clearFields = ()=>{
        document.getElementById("AdminLoginEmail").value = "";
        document.getElementById("AdminLoginPassword").value = "";
    }
    const adLogIn = (e)=>{
        e.preventDefault();
        let email = document.getElementById('AdminLoginEmail').value;
        let password = document.getElementById('AdminLoginPassword').value;

        if( !email || !password) {
            swal({
                icon: "warning",
                title: "Warning",
                text: "Email and password cannot be empty!."
            });
            return;
        }

        let cred = {
            email,
            password
        };

        let strCred = JSON.stringify(cred);

        fetch("/api/adLogin", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: strCred
        })
        .then(res => res.json())
        .then(result => {
            if (result.status) {
                setAdminUserDetails({
                    name : result.name,
                    email : result.email
                });
                setAdminIsAuth(true);
                // alert("Successfully logged in.");
                localStorage.setItem('adDetails', JSON.stringify({
                    name : result.name,
                    email : result.email
                }));
                history.push("/adminDashboard");
            } else {
                swal({
                    icon: "error",
                    title: "Failed",
                    text: result.error
                });
                clearFields();
                return;
            }
        })
        .catch(error => {
            swal({
                icon: "error",
                title: "Failed",
                text: "Internal server Error. Try again later!"
            });
            return;
        })
    }
    return (
        <form onSubmit={adLogIn} className={`${Styles.card} shadow-lg p-3`}>
            <h1  className={`${Styles.loginHeader} `}>Admin Login</h1>
            <p>Use you Email ID to log into admin account</p>
            <div className='form-group  w-75'>
                <label htmlFor='loginEmail'>Email address</label>
                <input
                    type='email'
                    className= {`${Styles.inputFontSize} form-control`}
                    id='AdminLoginEmail'
                    placeholder='Enter email'
                    required
                />
            </div>
            <div className='form-group w-75'>
                <label htmlFor='loginPassword'>Password</label>
                <input
                    type='password'
                    className= {`${Styles.inputFontSize} form-control`}
                    id='AdminLoginPassword'
                    placeholder='Password'
                    required
                />
                <small id='emailHelp'  style = {{cursor: "pointer"}} className='form-text text-primary'>
                   <Link to='/'   className={` ${Styles.link}`}>
                    Forget password?
                   </Link> 
                </small>
            </div>
            <button type='submit' className='btn btn-sm btn-primary w-25 rounded-pill'>
                Log In
            </button>
            {/* <div>
                Don’t have an account? <span  style = {{cursor: "pointer"}} className='text-primary'>
                <Link to='/register'  className={` ${Styles.link}`}>
                    Sign up
                </Link>    
                </span>
            </div> */}
        </form>

    )
}

export default LoginForm
