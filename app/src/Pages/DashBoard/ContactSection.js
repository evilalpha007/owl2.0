import React from 'react';
// import { useState } from 'react';
import swal from 'sweetalert';
import {Button} from 'react-bootstrap';

const App = ({ usermail, name }) => {

    const clear = () => {
        document.querySelector("textarea").value = "";
    }


    const submit = (e) => {
        e.preventDefault();
        var name = document.querySelector("input[name='name']").value;
        var email = document.querySelector("input[name='email']").value;
        var content = document.querySelector("textarea").value;

        let cred = {
            email,
            name,
            content
        };
        let strCred = JSON.stringify(cred);

        fetch("/api/addUserFeedback", {
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
                    text: "Content added successfully."
                });
                clear();
                return;
            } else {
                swal({
                    icon: "error",
                    title: "Failed",
                    text: "Please try later!"
                });
                clear();
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
            <section className="mb-4" style={{backgroundColor: "white"}}>

                <div className="row row1111" style={{flexDirection: "column", padding: "2rem" }}>

                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form"  onSubmit={submit}>

                            <div className="row row1111" style={{justifyContent: "space-between"}}>

                                <div className="col-md-5" style={{ padding: "0.3rem 0rem"}}>
                                    <div className="md-form mb-0">
                                        <label for="name" className="">Your name</label>
                                        <input type="text" id="name" name="name" className="form-control" value={name} readonly="readonly"/>
                                    </div>
                                </div>

                                <div className="col-md-5" style={{ padding: "0.3rem 0rem"}}>
                                    <div className="md-form mb-0">
                                        <label for="email" className="">Your email</label>
                                        <input type="text" id="email" name="email" className="form-control" value={usermail} readonly="readonly"/>
                                    </div>
                                </div>

                            </div>

                            <div className="row row1111"  style={{marginBottom: "1rem"}}>

                                <div className="col-md-12" style={{ padding: "0.3rem 0rem"}}>

                                    <div className="md-form">
                                        <label for="message">Your message</label>
                                        <textarea type="text" id="message" name="message" rows="5" className="form-control md-textarea"></textarea>
                                    </div>

                                </div>
                            </div>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </form>

                    </div>
                    
                    <div className="col-md-3 text-center" style={{width: "100%", paddingTop: "1rem"}}>
                        <ul className="list-unstyled mb-0" id="infoOfContact" style={{display: "flex", alignItems: "baseline", justifyContent: "center", borderTop: "1px solid #e2e2e2" }}>
                            <li style={{padding: "1.5rem"}}><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>San Francisco, USA</p>
                            </li>

                            <li style={{padding: "1.5rem"}}><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+ 01 234 567 89</p>
                            </li>

                            <li style={{padding: "1.5rem"}}><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>hello@otus.ai</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    );
}

export default App
