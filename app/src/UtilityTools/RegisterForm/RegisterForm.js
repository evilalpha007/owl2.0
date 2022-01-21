import React from 'react'
import Styles from './RegisterForm.module.css'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'
import swal from 'sweetalert';
import {  Spin } from 'antd';

const RegisterForm = () => {
    let history = useHistory();
    
    const [loaderDisplay, setLoaderDisplay] = useState("none");
    const [Msg11, setMsg11] = useState({
        cont: "",
        color: "red"
    });

    const clear = () => {
        document.getElementById("name").value = "";
        document.getElementById("contact").value = "";
        document.getElementById("purpose").value = "";
        document.getElementById("company").value = "";
        document.getElementById("signupEmail").value = "";
        document.getElementById("signupPassword").value = "";
    }
    const signUp = (e) => {
        e.preventDefault();
        
        setLoaderDisplay("flex");

        let name = document.getElementById('name').value;
        let email = document.getElementById('signupEmail').value;
        let contact = document.getElementById('contact').value;
        let purpose = document.getElementById('purpose').value;
        let company = document.getElementById('company').value;
        let password = document.getElementById('signupPassword').value;

        let cred = {
            name,
            email,
            contact,
            purpose,
            company,
            password
        };

        let strCred = JSON.stringify(cred);

        fetch("/api/signup", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: strCred
        })
            .then(res => res.json())
            .then(result => {
                if (result.status) {
                    swal({
                        icon: "success",
                        title: "Success added",
                        text: "Please wait an activation mail avail it."
                    });
                    clear();
                    history.push("/login");
                } else {
                    console.log("he;llo");
                    setMsg11({
                        cont: result.err,
                        color: "red"
                    })
                    setTimeout(()=>{
                        setMsg11({
                            cont: "",
                            color: "red"
                        })
                    }, 2000)
                }
                setLoaderDisplay("none");
            })
            .catch(error => {
                clear();
                setMsg11({
                    cont: "Internal server error. Visit later.",
                    color: "red"
                })
                setTimeout(()=>{
                    setMsg11({
                        cont: "",
                        color: "red"
                    })
                }, 2000);
                setLoaderDisplay("none");
            })
    }
    return (
        <>
        <form onSubmit={signUp} className={`${Styles.card} shadow-lg p-3`}>
            <h1 className={`${Styles.registerHeader} `}>Request Early Access</h1>
            <p> Fill out the details to start your 7-day free trial.</p>
            <p style={{color: Msg11.color, fontSize: "0.85rem"}}>{Msg11.cont}</p>
            <div className={`row w-100`}>
                <div className={`col-md-6`}>
                    <div className='form-group  w-100'>
                        <label htmlFor='name' className={`${Styles.formSecLabel}`}>Name</label>
                        <input
                            type='text'
                            className={`${Styles.inputFontSize} form-control`}
                            id='name'
                            aria-describedby='emailHelp'
                            placeholder='Name'
                            required
                        />
                    </div>
                </div>
                <div className={`col-md-6`}>
                    <div className='form-group  w-100'>
                        <label htmlFor='email' className={`${Styles.formSecLabel}`}>Email address</label>
                        <input
                            type='email'
                            className={`${Styles.inputFontSize} form-control`}
                            id='signupEmail'
                            aria-describedby='emailHelp'
                            placeholder='Enter email'
                            required
                        />
                    </div>
                </div>
            </div>
            <div className={`row w-100`}>
                <div className={`col-md-6`}>
                    <div className='form-group  w-100'>
                        <label htmlFor='contact' className={`${Styles.formSecLabel}`}>Phone Number</label>
                        <input
                            type='text'
                            maxLength='10'
                            minLength='10'
                            className={`${Styles.inputFontSize} form-control`}
                            id='contact'
                            aria-describedby='emailHelp'
                            placeholder='Phone Number'
                            required
                        />
                    </div>
                </div>
                <div className={`col-md-6`}>
                    <div className='form-group  w-100'>
                        <label htmlFor='exampleInputEmail1' className={`${Styles.formSecLabel}`}>Password</label>
                        <input
                            type='password'
                            className={`${Styles.inputFontSize} form-control`}
                            id='signupPassword'
                            aria-describedby='emailHelp'
                            placeholder='Password'
                            minLength='6'
                            required
                        />
                    </div>
                </div>
            </div>
            <div className={`row w-100`}>
                <div className={`col-md-6`}>
                    <div className='form-group  w-100'>
                        <label htmlFor='purpose' className={`${Styles.formSecLabel}`}>Purpose to use Otus AI</label>
                        <input
                            type='text'
                            className={`${Styles.inputFontSize} form-control`}
                            id='purpose'
                            aria-describedby='emailHelp'
                            placeholder='Purpose to use Otus A'
                            required
                        />
                    </div>
                </div>
                <div className={`col-md-6`}>
                    <div className='form-group  w-100'>
                        <label htmlFor='company' className={`${Styles.formSecLabel}`}>Company Name</label>
                        <input
                            type='text'
                            className={`${Styles.inputFontSize} form-control`}
                            id='company'
                            aria-describedby='emailHelp'
                            placeholder='Company Name'
                            required
                        />
                    </div>
                </div>
            </div>
            <button type='submit' style={{ margin: "1rem" }} className='btn btn-sm btn-primary w-25 rounded-pill'>
                Sign up
            </button>
            <div>
                Already have an account? <span style={{ cursor: "pointer" }} className='text-primary'>
                    <Link to='/login' className={` ${Styles.link}`}>
                        Log in
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


export default RegisterForm
