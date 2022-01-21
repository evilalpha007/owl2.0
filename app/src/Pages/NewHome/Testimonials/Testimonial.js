import React from 'react'
const HomeSection = () => {
    return (
        <div className="slider-2" style={{paddingTop: "6rem", paddingBottom: "6rem"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading header-of-each-section">Few words from Users</h2>
                        {/* <p className="p-heading">You can read below a few testimonials from satisfied users. Of course there are also some unhappy ones but they're not here.</p> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="slider-container" style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", }}>
                            <div className="card" style={{maxWidth: "500px", margin: "2rem"}}>
                                <div className="card-body">
                                    <p className="testimonial-text" style={{ fontSize: "1.0rem", lineHeight: "1.5rem", marginBottom: "1rem" }}>I am working as a Director at SAG Infotech. I have to write lots of emails to the clients daily and as a manager I have a lack of time to write bulk emails and I found Otus.AI and have been blown away by how it saves my time in writing professional emails. It's just unbelievably good at everything from writing emails to LinkedIn posts. Honestly, I can't see myself ever going back to another provider now that I've found this gem!</p>
                                    <div className="details">
                                        <img className="testimonial-image" src="/web/images/vikas.jpeg" alt="alternative" />
                                        <div className="text">
                                            <div className="testimonial-author">Vikas</div>
                                            <div className="occupation">Director - SAG Infotech</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className="card" style={{maxWidth: "500px", margin: "2rem"}}>
                                <div className="card-body">
                                    <p className="testimonial-text" style={{ fontSize: "1.0rem", lineHeight: "1.5rem", marginBottom: "1rem" }}>As a software developer, to reply to all the emails of the clients or to reply to everyone on LinkedIn is not possible at the same time. But Otus made it possible by writing high quality professional emails and LinkedIn replies. I would surely recommend Otus.ai for writing professional emails and writing your LinkedIn profile posts and for writing replies to the messages on your LinkedIn in a Professional way.</p>
                                    <div className="details">
                                        <img className="testimonial-image" src="/web/images/ashish.jpg" alt="alternative" />
                                        <div className="text">
                                            <div className="testimonial-author">Ashish</div>
                                            <div className="occupation">SDE - Amazon</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}

                            {/* </div> */}
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection