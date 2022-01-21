import React from 'react'
import {Link} from 'react-router-dom'
import swal from 'sweetalert';
const HomeSection = () => {

    const addEmail = (e) => {
        e.preventDefault();
        let email = document.getElementById("nemail").value;
        let cred = {
            email
        };
        let strCred = JSON.stringify(cred);

        fetch("/api/addSubscriber", {
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
                    text: "Thanks for showing interest in us and subscribing."
                });
                document.getElementById("nemail").value = "";
                return;
            } else {
                swal({
                    icon: "error",
                    title: "Failed",
                    text: result.error
                });
                return;
            }
        })
        .catch(error => {
            swal({
                icon: "error",
                title: "Failed",
                text: "Internal Server error. Try later!"
            });
            return;
        })
    }

    return (
        <>
            <div className="form-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="h2-heading header-of-each-sebsection">Subscribe And Follow Us</h2>
                            <p className="p-heading">Be part of us and follow us on Twitter via <Link className="a-tag" to="/">@name</Link> and
                                subscribe to the newsletter for news and updates about our updates</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">

                            <form onSubmit={addEmail}>
                                <div className="form-group mail">
                                    <input type="email" className="form-control-input" id="nemail" required />
                                    <label className="label-control" htmlFor="nemail">Email address</label>
                                    <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control-submit-button" style={{marginLeft: "0"}}>Subscribe</button>
                                </div>
                                <div className="form-message">
                                    <div id="nmsgSubmit" className="h3 text-center hidden"></div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-col first">
                                <h6>About Otus AI</h6>
                                <p className="p-small">Otus.ai platform can generate content for your emails, blog or Linkedin posts with Artificial Intelligence (AI). Offloading the part of email writing to our platform is a great time savings for our users.</p>
                            </div>
                            <div className="footer-col second">
                                <h6>Links</h6>
                                <ul className="list-unstyled li-space-lg p-small">
                                    <li>Important: <Link  className="a-tag"  to="/">Terms & Conditions</Link>, <Link  className="a-tag"  to="/">Privacy
                                        Policy</Link></li>
                                    <li>Useful: <Link  className="a-tag"  to="/login">Log In</Link>, <Link  className="a-tag"  to="/register">Sign Up</Link>, <Link  className="a-tag" 
                                        to="/resources">Resources</Link></li>
                                    <li>Menu: <Link  className="a-tag page-scroll" to="/">Home</Link>, <Link  className="a-tag page-scroll"
                                        to="/#intro">Intro</Link>, <Link  className="a-tag page-scroll" to="/#features">Why Otus</Link>, <Link
                                        className="a-tag page-scroll" to="#details">Details</Link></li>
                                </ul>
                            </div>
                            <div className="footer-col third">
                                <span className="fa-stack">
                                    <Link  className="a-tag" to="/">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-facebook-f fa-stack-1x"></i>
                                    </Link>
                                </span>
                                <span className="fa-stack">
                                    <Link  className="a-tag"  to="/">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-twitter fa-stack-1x"></i>
                                    </Link>
                                </span>
                                <span className="fa-stack">
                                    <Link  className="a-tag"  to="/">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-pinterest-p fa-stack-1x"></i>
                                    </Link>
                                </span>
                                <span className="fa-stack">
                                    <Link  className="a-tag"  to="/">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-instagram fa-stack-1x"></i>
                                    </Link>
                                </span>
                                <p className="p-small">We would love to hear from you <Link  className="a-tag" 
                                    to="mailto:contact@site.com"><strong>hello@otus.ai</strong></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="p-small">Copyright © <Link   className="a-tag" to="/">Otus AI</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSection