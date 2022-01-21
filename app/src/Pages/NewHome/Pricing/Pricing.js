import React from 'react';
import './Pricing.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'



const Pricing = ({ setPricing }) => {

    const [pricingCnt, setPricingCnt] = useState({
        country_code: "US",
        goldPrice: "$49",
        goldFirst: "$49 per month - $499 per year",
        goldYearly: "50 percent yearly discount - $249 per year",
        platinumPrice: "$99",
        platinumFirst: "$99 per month - $999 per year",
        platinumYearly: "50 percent yearly discount - $499 per year"
    });
    const [duration, setDuration] = useState("monthly");
    const changeBill = () => {
        if (duration === "monthly") {
            setDuration("yearly");
        } else {
            setDuration("monthly");
        }
    }
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/');
        if (res.data.country_code === "IN") {
            setPricingCnt({
                country_code: res.data.country_code,
                goldPrice: "₹2,999",
                goldFirst: "₹2,999 per month - ₹29999 per year",
                goldYearly: "₹14,999",
                platinumPrice: "₹4,999",
                platinumFirst: "₹4,999 per month - ₹49,999 per year",
                platinumYearly: "₹24,999"
            });
        } else {
            setPricingCnt({
                country_code: res.data.country_code,
                goldPrice: "$49",
                goldFirst: "$49 per month - $499 per year",
                goldYearly: "$249",
                platinumPrice: "$99",
                platinumFirst: "$99 per month - $999 per year",
                platinumYearly: "$499"
            });
        }
    }

    useEffect(() => {
        getData();

    }, [])


    const toPayment = (x) => {
        let plan;
        if(x===1) {
            plan = "Gold";
        } else {
            plan = "Platinum";
        }
        setPricing({
            duration: duration,
            country_code: pricingCnt.country_code,
            plan
        })
        console.log("data");
        // history.push("/payment");
    }




    return (
        <div id="pricing" className="maincontainer mvtc" style={{ background: "url(../web/images/header-background.png) center center no-repeat", paddingTop: "3rem", paddingBottom: "4rem" }}>
            <section>
                <div className="container py-5">


                    <header className="text-center text-white">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h2 className="header-of-each-section" >Pricing</h2>
                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis nostrum vitae porro nihil laudantium asperiores reiciendis excepturi laboriosam sapiente. </p> */}
                            </div>
                        </div>
                    </header>
                    <div style={{ marginTop: "2rem", marginBottom: "3rem", display: "flex", flexWrap: "nowrap", justifyContent: "center", alignItems: "center" }}>
                        <div className="duration" style={{ padding: "0.5rem 1rem", fontSize: "24px", fontWeight: "600", marginTop: "-10px" }}>Monthly plan</div>
                        <label class="switch">
                            <input onChange={changeBill} type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                        <div className="duration" style={{ padding: "0.5rem 1rem", fontSize: "24px", fontWeight: "600", marginTop: "-10px" }}>Yearly plan <span className="discount" style={{ fontSize: "14px", backgroundColor: "#ff8282", padding: "0.5rem 1rem", borderRadius: "20px" }}>50% Off</span></div>
                    </div>
                    <div className="row text-center align-items-end" style={{ justifyContent: "space-evenly" }}>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="bg-white p-5 rounded-lg shadow">
                                <h1 className="h6 text-uppercase font-weight-bold mb-4" style={{ color: "#ff6c02", fontSize: "1.2rem" }}>Gold</h1>
                                {duration === "monthly" ?
                                    <h2 className="h1 font-weight-bold">{pricingCnt.goldPrice}<span className="text-small font-weight-normal ml-2">/ month</span></h2>
                                    :
                                    <h2 className="h1 font-weight-bold">{pricingCnt.goldYearly}<span className="text-small font-weight-normal ml-2">/ year</span></h2>
                                }

                                <div className="custom-separator my-4 mx-auto "></div>

                                <ul className="list-unstyled my-5 text-small text-left">
                                    {/* <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary1"></i>{pricingCnt.goldFirst}</li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary1"></i>{pricingCnt.goldSecond}</li> */}
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary1"></i> 60 Email</li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary1"></i> 10 Social media posts</li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary1"></i> 1 blog post</li>
                                    {/* <li className="mb-3 text-muted">
                                            <i className="fa fa-times mr-2 text-primary2"></i>
                                            <del>Lorem ipsum dolor sit</del>
                                        </li>
                                        <li className="mb-3 text-muted">
                                            <i className="fa fa-times mr-2 text-primary2"></i>
                                            <del>Lorem ipsum dolor sit</del>
                                        </li>
                                        <li className="mb-3 text-muted">
                                            <i className="fa fa-times mr-2 text-primary2"></i>
                                            <del>Lorem ipsum dolor sit</del>
                                        </li> */}
                                </ul>
                                <Link to="/payment" onClick={()=>{toPayment(1)}} className="btn-solid-reg">Subscribe</Link>
                            </div>
                        </div>

                        {/* <div className="col-lg-4 mb-5 mb-lg-0">
                                <div className="bg-white p-5 rounded-lg shadow">
                                    <h1 className="h6 text-uppercase font-weight-bold mb-4">Diamond</h1>
                                    <h2 className="h1 font-weight-bold">$40<span className="text-small font-weight-normal ml-2">/ month</span></h2>

                                    <div className="custom-separator my-4 mx-auto "></div>

                                    <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary1"></i> Lorem ipsum dolor sit amet</li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary1"></i> Lorem ipsum dolor sit</li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary1"></i> Lorem ipsum dolor sit</li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary1"></i> Lorem ipsum dolor sit</li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary1"></i> Lorem ipsum dolor sit</li>
                                        <li className="mb-3 text-muted">
                                            <i className="fa fa-times mr-2 text-primary2"></i>
                                            <del>Lorem ipsum dolor sit</del>
                                        </li>
                                    </ul>
                                    <Link to="/" className="btn-solid-reg">Subscribe</Link>
                                </div>
                            </div> */}

                        <div className="col-lg-4">
                            <div className="bg-white p-5 rounded-lg shadow">
                                <h1 className="h6 text-uppercase font-weight-bold mb-4" style={{ color: "#ff6c02", fontSize: "1.2rem" }}>Platinum</h1>
                                {duration === "monthly" ?
                                    <h2 className="h1 font-weight-bold">{pricingCnt.platinumPrice}<span className="text-small font-weight-normal ml-2">/ month</span></h2>
                                    :
                                    <h2 className="h1 font-weight-bold">{pricingCnt.platinumYearly}<span className="text-small font-weight-normal ml-2">/ year</span></h2>
                                }
                                <div className="custom-separator my-4 mx-auto "></div>
                                <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                                    {/* <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary1"></i>{pricingCnt.platinumFirst}</li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary1"></i>{pricingCnt.platinumSecond}</li> */}
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary1"></i> 100 Emails</li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary1"></i> 50 social media posts</li>
                                    <li className="mb-3">
                                        <i className="fa fa-check mr-2 text-primary1"></i> 10 blog posts </li>
                                    {/* <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary1"></i> Sed ut perspiciatis</li> */}
                                </ul>
                                <Link to="/payment" onClick={()=>{toPayment(2)}} className="btn-solid-reg">Subscribe</Link>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </div>


    )
}

export default Pricing;