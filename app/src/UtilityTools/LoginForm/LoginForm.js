import React from 'react'
import Styles from './LoginForm.module.css'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import swal from 'sweetalert';
import {  Spin } from 'antd';

const LoginForm = ({setUserDetails, setIsAuth}) => {
    let history = useHistory();

    const [Msg, setMsg] = useState({
        cont: "",
        color: "red"
    });
    const [loaderDisplay, setLoaderDisplay] = useState("none");

    const logIn = (e)=>{
        e.preventDefault();
        setLoaderDisplay("flex");
        let email = document.getElementById('loginEmail').value;
        let password = document.getElementById('loginPassword').value;

        if( !email || !password) {
            swal({
                icon: "warning",
                title: "Warning",
                text: "Email and password cannot be empty!."
            });
            setLoaderDisplay("none");
            return;
        }

        let cred = {
            email,
            password
        };

        let strCred = JSON.stringify(cred);

        fetch("/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: strCred
        })
        .then(res => res.json())
        .then(result => {
            if (result.status) {

                setUserDetails(result.results);
                setIsAuth(true);
                localStorage.setItem('details', JSON.stringify({
                    name : result.results.name,
                    email : result.results.email
                }));

                if(result.results.userType === "user") {
                    history.push("/dashboard");
                } else {
                    history.push("/adminDashboard");
                }
            } else {
                setMsg({
                    cont: result.error,
                    color: "red"
                })
                setTimeout(()=>{
                    setMsg({
                        cont: "",
                        color: "red"
                    })
                }, 2000)
            }
            setLoaderDisplay("none");
        })
        .catch(error => {
            setMsg({
                cont: "Something went wrong. Try later.",
                color: "red"
            })

            setTimeout(()=>{
                setMsg({
                    cont: "",
                    color: "red"
                })
            }, 2000)
            setLoaderDisplay("none");
        })
    }

    return (
        <>
        <form onSubmit={logIn} className={`${Styles.card} shadow-lg p-3`}>
            <h1  className={`${Styles.loginHeader} `}>Login</h1>
            <p>Use you Email ID to log into your account</p>
            <p style={{color: Msg.color, fontSize: "0.85rem"}}>{Msg.cont}</p>
            <div className='form-group  w-75'>
                <label htmlFor='loginEmail'>Email address</label>
                <input
                    type='email'
                    className= {`${Styles.inputFontSize} form-control`}
                    id='loginEmail'
                    placeholder='Enter email'
                    required
                    />
            </div>
            <div className='form-group w-75'>
                <label htmlFor='loginPassword'>Password</label>
                <input
                    type='password'
                    className= {`${Styles.inputFontSize} form-control`}
                    id='loginPassword'
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
            <div>
                Don’t have an account? <span  style = {{cursor: "pointer"}} className='text-primary'>
                <Link to='/register'  className={` ${Styles.link}`}>
                    Sign up
                </Link>    
                </span>
            </div>
        </form>
        <div style={{width: "100vw", height: "100vh", position: "absolute", top: "0", background: "#ffffffde", display: loaderDisplay, justifyContent: "center", alignItems: "center", zIndex: "1000000"}}>
            <Spin size="large" tip="loading..." />
        </div>
    </>

    )
}

export default LoginForm
