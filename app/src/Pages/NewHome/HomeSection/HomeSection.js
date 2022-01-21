import React from 'react'
import { Link } from 'react-router-dom'
const HomeSection = () => {
    return (

        <header id="header" className="header" style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="text-container">
                            <h1 className="h1-large header-of-each-section">Write Perfect Emails !</h1>
                            <p className="p-large p-large1" style={{ color: "gray" }}>Otus is an AI writing assistant that helps you create high-quality content, in just a few seconds, at a fraction of the cost!</p>
                            <Link className="btn-solid-lg" to="/register">Try it for free</Link>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div style={{maxWidth: "650px", margin: "auto"}}>
                            <img className="d-block w-100" style={{width: "400px"}} src="/assets/verify.png" alt="First slide" />
                        </div>
                    </div>
                    {/* <div className="col-lg-7">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"
                            style={{ width: "80%", margin: "auto" }}>
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <img className="d-block w-100 first-image" style={{ borderRadius: "50%", overflow: "hidden", position: "static !important" }} src="/web/images/introduction.jpg" alt="Second slide" />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                                data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                                data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </header>
    )
}

export default HomeSection