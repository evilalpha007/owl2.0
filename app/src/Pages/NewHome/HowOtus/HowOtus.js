import React from 'react'
import {Link} from 'react-router-dom'
const HomeSection = () => {
    return (

        <div id="features" className="cards-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading header-of-each-section"> How Otus Helps </h2>
                        <p className="p-heading para12 para-section">Otus is a unique solution that will help students as well as young professionals by saving their time to make official communication more effective.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12" style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>

                        <div className="card">
                            <div className="card-icon-wrapper">
                                <div className="card-icon">
                                    <span className="far fa-clipboard blue"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Emails</h4>
                                <p>Write professional emails that impress your contacts, friends, and family with an online writing assistant.</p>
                                <Link className="read-more no-line" to="/register">Learn more <span
                                    className="fas fa-long-arrow-alt-right"></span></Link>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-icon-wrapper">
                                <div className="card-icon">
                                    <span className="far fa-clipboard blue"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">LinkedIn posts</h4>
                                <p>Social media is all about content creation and we do it perfectly. </p>
                                <Link className="read-more no-line" to="/register">Learn more <span
                                    className="fas fa-long-arrow-alt-right"></span></Link>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-icon-wrapper">
                                <div className="card-icon">
                                    <span className="far fa-clipboard blue"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Post Response</h4>
                                <p>Create and distribute powerful, attention-grabbing responses on LinkedIn.</p>
                                <Link className="read-more no-line" to="/register">Learn more <span
                                    className="fas fa-long-arrow-alt-right"></span></Link>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-icon-wrapper">
                                <div className="card-icon">
                                    <span className="far fa-comments purple"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Recommendations</h4>
                                <p>Improve your online presence with LinkedIn recommendations.</p>
                                <Link className="read-more no-line" to="/register">Learn more <span
                                    className="fas fa-long-arrow-alt-right"></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection