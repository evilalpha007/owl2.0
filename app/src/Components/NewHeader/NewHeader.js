import React from "react";
import { Link } from 'react-router-dom'
const NewHeader = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light" style={{zIndex: "900", backgroundColor: "white" }}>
                <div className="container">
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Link className="navbar-brand logo-image" to="/"><img style={{ width: "56px", height: "56px" }} src={process.env.PUBLIC_URL + "/web/images/otusfinalpngblue-06.png"} alt="alternative" /></Link>
                        <Link className="navbar-brand logo-text page-scroll" to="/" style={{color: "#1e266d"}}>Otus AI</Link>
                    </div>

                    <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link page-scroll" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link page-scroll" href="/#intro">Intro</a>
                            </li> */}
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="/#pricing">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link page-scroll" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link page-scroll" to="/resources">Resources</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link page-scroll" to="/login">Log In</Link>
                            </li>
                        </ul>
                        <span className="nav-item">
                            <Link className="btn-solid-sm page-scroll" to="/register">Try it for free</Link>
                        </span>
                    </div>
                </div>
            </nav>
        </>)
}
export default NewHeader
