import React from 'react'
import './dashboardForm.css'
import { Row,Form, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import { Tooltip } from 'antd';

const DashBoardForm = ({ usermail }) => {
    const clear = () => {
        document.querySelector("textarea").value = "";
    }

    const submit = (e) => {
        e.preventDefault();
        var postType = document.querySelector("#postTYPE").value;
        var reqType = document.querySelector("#requestTYPE").value;
        var content = document.querySelector("textarea").value;

        let cred = {
            email: usermail,
            postType,
            original: content,
            reqType
        };
        let strCred = JSON.stringify(cred);

        fetch("/api/addContent", {
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
                        text: result.error
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
        <div className='dashboardFormCard' style={{backgroundColor: "white" }}>

            <Form className="form-req" onSubmit={submit}>
                <Row className="mb-3 row1111" >
                    <Form.Label style={{paddingLeft: "0"}}>Post Type
                        <Tooltip title="It specifies the category of post">
                            <span style={{ cursor: "pointer" }} > <i className="fas fa-question-circle" style={{ fontSize: "0.8rem", color: "#6f82e7" }}></i> </span>
                        </Tooltip>
                    </Form.Label>
                    {/* <Form.Label>State</Form.Label> */}
                    <Form.Select defaultValue="Email" id="postTYPE">
                        <option value="Email">Email</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Blog">Blog</option>
                    </Form.Select>
                </Row>
                <Row className="mb-3 row1111" >
                    <Form.Label style={{paddingLeft: "0"}} >Request Type
                        <Tooltip title="It specifies whether you want to create a new post or you want to improve the previous one">
                            <span style={{ cursor: "pointer" }} > <i className="fas fa-question-circle" style={{ fontSize: "0.8rem", color: "#6f82e7" }}></i> </span>
                        </Tooltip>
                    </Form.Label>
                    <Form.Select defaultValue="Create" id="requestTYPE">
                        <option value="Create">Create new content</option>
                        <option value="Customize">Customize the existing content</option>
                    </Form.Select>
                </Row>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label style={{paddingLeft: "0"}}>Write your content here
                        <Tooltip title="The content you want to improve or create">
                            <span style={{ cursor: "pointer" }} > <i className="fas fa-question-circle" style={{ fontSize: "0.8rem", color: "#6f82e7" }}></i> </span>
                        </Tooltip>
                    </Form.Label>
                    <Form.Control style={{maxWidth: "800px"}} as="textarea" name="content" rows={10} required placeholder='e.g. update the linked in post ' />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


        </div>

    )
}

export default DashBoardForm
