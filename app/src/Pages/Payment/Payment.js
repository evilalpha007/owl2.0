import React from 'react'
// import { useState } from 'react';
import Styles from './Payment.module.css'
import { useHistory } from 'react-router-dom'
import { useState } from 'react';
import swal from 'sweetalert';
import PricingModal from './pricingModal';
import {  Spin } from 'antd';

const RegisterForm = ({ duration, countryCode, plan }) => {
    
  const [btnDetails, setBtnDetails] = useState({
      content: "Submit",
      cursor: "pointer",
      visibility: false
  });

    const [loaderDisplay, setLoaderDisplay] = useState("none");
    
    let pricewithcurr = PricingModal[duration][countryCode][plan]["currency"] === "INR" ? "₹ " : "$ ";
    pricewithcurr += PricingModal[duration][countryCode][plan]["price"]

    // const clear = () => {
    //     document.getElementById("name").value = "";
    //     document.getElementById("contact").value = "";
    //     document.getElementById("purpose").value = "";
    //     document.getElementById("company").value = "";
    //     document.getElementById("signupEmail").value = "";
    //     document.getElementById("signupPassword").value = "";
    // }


    const bodyData= {
        amount: PricingModal[duration][countryCode][plan]["price"],
        currency: PricingModal[duration][countryCode][plan]["currency"],
        pricewithcurr
      };


    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    async function displayRazorpay(strcrd, isReg) {
        // setLoaderDisplay("flex");
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
        }

        let bodayData = {
            amount: PricingModal[duration][countryCode][plan]["price"],
            currency: PricingModal[duration][countryCode][plan]["currency"]
        };
        let strBodyData = JSON.stringify(bodayData);
        const data = await fetch('/api/razorpay', { 
            method: 'POST',
            body: strBodyData
        }).then((t) =>
            t.json()
        )

        const options = {
            key: 'rzp_test_uSEqWn5gEDwpX6',
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: "Otus AI "+ duration + " " + plan + " plan",
            description: 'Thank you for subscribing.',
            image: '',
            handler: function (response) {
                
                strcrd.duration = duration;
                strcrd.plan = plan;
                strcrd.transaction = response;
                strcrd.amount = bodyData.pricewithcurr;
                strcrd.isReg = isReg;
                let strCred = JSON.stringify(strcrd);
                fetch("/api/signupByPaying", {
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
                            title: "Success",
                            text: "Thanks for subscribing to Otus AI. Please log in to enjoy our services."
                        });
                        history.push('/login');
                    } else {

                        swal({
                            icon: "error",
                            title: "Failed",
                            text: "Something went wrong. Try later!"
                        })
                        setBtnDetails({
                            content: "Submit",
                            visibility: false,
                            cursor: "pointer"
                        })
                    }
                })
                .catch(error => {
                    swal({
                        icon: "error",
                        title: "Failed",
                        text: "Internal Server error. Try later!"
                    });
                    setBtnDetails({
                        content: "Submit",
                        visibility: false,
                        cursor: "pointer"
                    })
                })

            },
            prefill: {
                // name,
                email: '',
                phone_number: ''
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open();
    }


    let history = useHistory();
    
    const signUp = async (e) => {
        e.preventDefault();
        setLoaderDisplay("flex");

        if(btnDetails.content === "Submit") {
            
            let email = document.getElementById('signupEmail').value;
            let cred1 = {
                email
            };
            let strCred = JSON.stringify(cred1);
            
            try {
                setBtnDetails({
                    content: "Please wait...",
                    visibility: false,
                    cursor: "not-allowed"
                })
                let result = await fetch("/api/getDetailsByEmail", {
                  method: 'POST',
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: strCred
                });
                result = await result.json();
                if (result.status) {
                    displayRazorpay(cred1, true);
                }
                else {
                    setBtnDetails({
                        content: "Proceed to payment",
                        visibility: true,
                        cursor: "pointer"
                    })
                    // document.getElementById("error-message").innerHTML = "Email already there."
                }
              } catch (error) {
                document.getElementById("error-message").innerHTML = "Internal server error. Try later." 
                setBtnDetails({
                    content: "Submit",
                    visibility: false,
                    cursor: "pointer"
                })
            }
        } else {
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
            displayRazorpay(cred, false);            
        }
        setLoaderDisplay("none");
    }
    return (
        <>
        <div className={`${Styles.xyzabc}`} style={{ display: "flex", flexDirection: "row-reverse", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", paddingTop: "10rem", backgroundColor: "rgb(241 241 241)" }}>
            {/* <div style={{width: "40%"}} className={`${Styles.detailsCont}`}> */}
                <div id="membershipCard" className={`${Styles.card11} `}  style={{backgroundColor: "white", maxWidth: "400px", width: "27%", minWidth: "300px", margin: "0 2rem" }}>
                    <div className={`${Styles.container11}`}>
                        <div style={{textAlign: "left", padding: "1.5rem 1rem", borderBottom: "1px solid #c5c5c5"}}>
                            <p className={`${Styles.p}`} style={{color: "#d76767", margin: "0"}} >Selected Plan</p>
                            <h3 className={`${Styles.cardText} ${Styles.h3}`} style={{marginTop: "0", paddingTop: "0"}} >{ plan + " Membership Plan"}</h3>

                        </div>
                        <div style={{padding: "0.5rem 1rem", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #c5c5c5"}}>
                            <h4 style={{fontSize: "1rem", color: "#1e2672"}}>Price</h4>
                            <h4  className={`${Styles.cardPrice} ${Styles.h4}`}> {bodyData.pricewithcurr} <span className={`${Styles.p}`} style={{color: "#d76767"}} >{duration === "yearly" ? "/ year" : "/ month"}</span></h4>
                        </div>
                        <div style={{padding: "1rem", width: "100%", display: "flex", flexDirection: "column", paddingBottom: "0.2rem",justifyContent: "flex-start", alignItems: "flex-start"}}>
                            <h4 style={{fontSize: "1rem", color: "#1e2672", paddingBottom: "1rem"}}>Benefits <span style={{color: 'gray', fontSize: "0.65rem"}}>/ month</span></h4>
                            <ul className={`${Styles.ul} list-unstyled text-small text-left`}>
                                <li className="mb-3">
                                    <i className="fa fa-check mr-2 text-primary1"></i> { plan === "Gold" ? "60 Emails" : "100 Emails"}</li>
                                <li className="mb-3">
                                    <i className="fa fa-check mr-2 text-primary1"></i> { plan === "Gold" ? "10 Social media posts" : "50 Social media posts"}</li>
                                <li className="mb-3">
                                    <i className="fa fa-check mr-2 text-primary1"></i> { plan === "Gold" ? "1 blog post" : "10 blog posts" }</li>
                            </ul>
                        </div>
                    </div>
                </div>
            {/* </div> */}
            <form name="checkoutForm" onSubmit={signUp} className={`${Styles.card} p-3`} style={{backgroundColor: "white", boxShadow: "none" }}>
                <h1 className={`${Styles.registerHeader} `} style={{ borderBottom: "1px solid #c5c5c5", color: "rgb(30 38 109)", width: "100%", padding: "0.5rem"}}>Enter your details here.</h1>
                <p id="error-message" style={{color: "red"}}></p>
                <div className={`row w-100`} style={{ flexDirection: "column" }}>
                    <div className={`col-md-6`} style={{ width: "100%" }}>
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
                    <div className={`col-md-6`} style={{ width: "100%" }}>
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
                { btnDetails.visibility ? 
                    <>
                    <div className={`row w-100`} style={{ flexDirection: "column" }}>
                        <div className={`col-md-6`} style={{ width: "100%" }}>
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
                        <div className={`col-md-6`} style={{ width: "100%" }}>
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
                    <div className={`row w-100`} style={{ flexDirection: "column" }}>
                        <div className={`col-md-6`} style={{ width: "100%" }}>
                            <div className='form-group  w-100'>
                                <label htmlFor='purpose' className={`${Styles.formSecLabel}`}>Purpose to use Otus AI</label>
                                <input
                                    type='text'
                                    className={`${Styles.inputFontSize} form-control`}
                                    id='purpose'
                                    aria-describedby='emailHelp'
                                    placeholder='Purpose to use Otus AI'
                                />
                            </div>
                        </div>
                        <div className={`col-md-6`} style={{ width: "100%" }}>
                            <div className='form-group  w-100'>
                                <label htmlFor='company' className={`${Styles.formSecLabel}`}>Company Name</label>
                                <input
                                    type='text'
                                    className={`${Styles.inputFontSize} form-control`}
                                    id='company'
                                    aria-describedby='emailHelp'
                                    placeholder='Company Name'
                                />
                            </div>
                        </div>
                    </div>
                    </>
                    : "" }
                <button type='submit' disabled={btnDetails.cursor === "not-allowed"  ? true : false}  style={{ margin: "1rem", cursor: btnDetails.cursor }} className='btn btn-sm btn-primary w-25 rounded-pill'>
                    {btnDetails.content}
                </button>
            </form>
        </div >
        <div style={{width: "100vw", height: "100vh", position: "absolute", top: "0", background: "#ffffffde", display: loaderDisplay, justifyContent: "center", alignItems: "center", zIndex: "1000000"}}>
            <Spin size="large" tip="loading..." />
        </div>
        </>
    )
}

export default RegisterForm
