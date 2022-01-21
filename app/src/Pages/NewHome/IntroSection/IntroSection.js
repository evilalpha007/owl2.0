import React from 'react'
// import { Link } from 'react-router-dom'
import Styles from './IntroSection.module.css'
const HomeSection = () => {
    return (
        <>
            {/* <div id="intro" className="basic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <img className={` ${Styles.imgSec} img-fluid `} src="/web/images/header.png" alt="alternative" />
                        </div>
                        <div className="col-lg-5">
                            <div className="text-container">
                                <h2 className="header-of-each-section">About Otus</h2>
                                <p className="para-section">Otus.ai platform can generate content for your emails, blog or Linkedin posts with Artificial Intelligence (AI). We are used by Software Engineers, engineering managers, directors, business owners, to receive error free, high quality and right messaging content. Offloading the part of email writing to our platform is a great time savings for our users.</p>
                                <Link className="btn-solid-reg" to="/register">Request Early Access</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div id="features"  style={{ background: "url(../web/images/header-background.png) center center no-repeat", paddingBottom: "4rem", paddingTop: "3rem"}}>
                {/* <div className="container"> */}
                    {/* <div className="row"> */}
                        <div className="col-lg-12">
                            <h2 className="h2-heading facts-header " style={{
                                width: "100%",
                                textAlign: "center",
                                margin: "0",
                                padding: "3rem 0.3rem 2rem 0.3rem",
                                fontSize: "3.05rem",
                                fontWeight: "700",
                                color: "#1e266d"
                            }}

                            >Do you know ?</h2>
                        </div>
                    {/* </div> */}
                    <div className={` ${Styles.mainCont} `}>
                        <div className={` ${Styles.eachSec} `} >
                            <div className={` ${Styles.imageDiv} `}>
                                <img className={` ${Styles.imageSec} `} alt="introPic" width="44" height="44" src="https://media-s3-us-east-1.ceros.com/lacework/images/2021/07/09/e62f3dbfb06daff2dbf812bf59e5e45a/alert-green.png?imageOpt=1&amp;fit=bounds&amp;width=84"  />
                            </div>
                            <div className={` ${Styles.logoDiv} `} >
                                <div className={` ${Styles.logoSec1} `} >93</div>
                                <div className={` ${Styles.logoSec2} `} >%</div>
                            </div>
                            <div>
                                <div className={` ${Styles.paraDiv} `} >Over 93% of the people make mistakes in the emails and posts on Linkedin !</div>
                            </div>
                        </div>

                        
                        <div className={` ${Styles.borderDiv} `} >
                            <div className={` ${Styles.borderSec} `}></div>
                        </div>

                        <div className={` ${Styles.eachSec} `} >
                            <div className={` ${Styles.imageDiv} `}>
                                <img className={` ${Styles.imageSec} `} alt="introPic" width="44" height="44" src="./web/images/clock.png"/>
                            </div>
                            <div className={` ${Styles.logoDiv} `} >
                                <div className={` ${Styles.logoSec1} `} >3 hr</div>
                            </div>
                            <div>
                                <div className={` ${Styles.paraDiv} `} >An average persons spends more than 3 hours on the social media posts and emails.</div>
                            </div>
                        </div>

                        <div className={` ${Styles.borderDiv} `} >
                            <div className={` ${Styles.borderSec} `}></div>
                        </div>

                        <div className={` ${Styles.eachSec} `} >
                            <div className={` ${Styles.imageDiv} `}>
                                <img className={` ${Styles.imageSec} `} alt="introPic" width="44" height="44" src="./web/images/checked.png"  />
                            </div>
                            <div className={` ${Styles.logoDiv} `} >
                                <div className={` ${Styles.logoSec1} `} >100</div>
                                <div className={` ${Styles.logoSec2} `} >%</div>
                            </div>
                            <div>
                                <div className={` ${Styles.paraDiv} `} >By choosing Otus, you are saving your time as well as writing good posts with 100% accuracy.</div>
                            </div>
                        </div>

                    </div>
                {/* </div> */}
            </div>
        </>

    )
}

export default HomeSection




