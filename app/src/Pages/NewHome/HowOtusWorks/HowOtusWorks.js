import React from 'react'
import {Link} from 'react-router-dom'
const HomeSection = () => {
    return (
        <>
        <div>
            <div id="details" className="basic-2" style={{paddingTop: "6rem"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9"  style={{maxWidth: "1200px", margin: "auto"}}>
                            <div className="intro">
                                <h2 className="header-of-each-section" style={{marginRight: "0", textAlign:"center"}}>How Otus works ? </h2>
                                <p className="para-section" style={{textAlign: "center"}}>Our artificial intelligence (AI) generates human-like emails, linkedIn posts and blog posts with the click of a button. Our system is powered by the latest text generation technology, making it possible for us to create large volumes of high quality content within a short timeframe.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row"  style={{maxWidth: "1200px", margin: "auto"}}>
                        <div className="col-lg-7" >
                            <div className="image-container">
                                <img className="img-fluid" src="/assets/reach.png" alt="alternative" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="text-container">
                                <div className="section-title">Step 1</div>
                                <h2 className="header-of-each-sebsection">Reach Out To Us</h2>
                                <p className="para-sub-section">Tell us your requirements by registering on otus.ai. Otus.AI is a service that finds the best possible solutions for your needs.</p>
                                <Link className="btn-solid-reg popup-with-move-anim" to="/register">Try it for free</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="basic-3">
                <div className="container">
                    <div className="row"  style={{maxWidth: "1200px", margin: "auto", flexWrap: "wrap-reverse"}}>
                        <div className="col-lg-5">
                            <div className="text-container">
                                <div className="section-title">Step 2</div>
                                <h2 className="header-of-each-sebsection">AI Engine</h2>
                                <p className="para-sub-section">Otus is an AI engine with natural language generation capabilities, allowing you to write like a pro. An AI engine that helps you write your content quickly and effectively.</p>
                                <Link className="btn-solid-reg" to="/register">Try it for free</Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="image-container">
                                <img className="img-fluid" src="/assets/ai.png" alt="alternative" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="basic-4" style={{paddingBlock: "7rem"}}>
                <div className="container">
                    <div className="row"  style={{maxWidth: "1200px", margin: "auto"}}>
                        <div className="col-lg-7">
                            <div className="image-container">
                                <img className="img-fluid" src="/web/images/verify_img.jpg" alt="alternative" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="text-container">
                                <div className="section-title">Step 3</div>
                                <h2 className="header-of-each-sebsection">Verification</h2>
                                <p className="para-sub-section">A.I. written content is verified by a real human to decrease all the possibilities of any mistake in the content.</p>
                                <Link className="btn-solid-reg" to="/register">Try it for free</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="pricing" ></div>
            {/* <div className="basic-3">
                <div className="container">
                    <div className="row"  style={{maxWidth: "1200px", margin: "auto"}}>
                        <div className="col-lg-5">
                            <div className="text-container">
                                <div className="section-title">Step 4</div>
                                <h2 className="header-of-each-sebsection">Publish</h2>
                                <p className="para-sub-section">Publish the final High-quality, specific and unique content that adds value to the reader.
                                </p>
                                <Link className="btn-solid-reg" to="/register">Try for free</Link>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="image-container">
                                <img className="img-fluid" src="/web/images/details-2.png" alt="alternative" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
        </>
    )
}

export default HomeSection