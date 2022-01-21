import React from 'react'
const HomeSection = () => {
    return (

        <div style={{maxWidth: "1050px", margin: "auto", paddingTop: "6rem"}}>
        <div className="container">
            <h2 style={{textAlign: "center"}} className="header-of-each-section">FAQs</h2>

            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 style={{marginBottom: "0"}} className="accordion-header" id="headingOne">
                        <button className="accordion-button"  type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Who should use Otus.ai?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">Everyone! Otus.ai is valuable for everyone from students to working professionals.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" style={{marginBottom: "0"}} id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            What can I use Otus.ai for?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        You can use Otus.ai for writing emails, Linkedin posts, Recommendations, LinkedIn replies and blog posts.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree" style={{marginBottom: "0"}}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Is Otus.ai Free to use?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Yes, It is free to use.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour" style={{marginBottom: "0"}}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Do you share my data with a third party?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Otus.ai does not share any data with any third-parties. Our team will use your data internally for learning processes. So that we can improve your experience over time.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive" style={{marginBottom: "0"}}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Is there any limit on writing documents?
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        There is no limit to how many documents you can write.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default HomeSection