import React from 'react';
import { useState } from 'react';
import swal from 'sweetalert';

const App = ({ usermail }) => {

    const [Data, setData] = useState({});
    const [isSet, setIsSet] = useState(true);

    const func = async () => {

        let cred = {
            email: usermail
        };
        let strCred = JSON.stringify(cred);

        try {
            let result = await fetch("/api/getDetailsByEmail", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: strCred
            });
            result = await result.json();
            if (result.status) {
                setData(result.results[0]);
                setIsSet(false);
            }
            else {
                swal({
                    icon: "error",
                    title: "Error occured!",
                    text: "Unable to fetch data."
                });
            }
        } catch (error) {
            swal({
                icon: "error",
                title: "Error occured!",
                text: "Unable to fetch data."
            });
        }
    }
    if (isSet) {
        func();
        setIsSet(false);
    }
    console.log(Data);
    return (
        <>
            <div style={{backgroundColor: "white", padding: "1rem" }}>
                <div className="page-header" style={{ borderBottom: "1px solid #e2e2e2", display: 'flex', alignItems: 'baseline', justifyContent: "flex-end", paddingBottom: "0.6rem" }}>
                    {/* <h5 style={{ paddingRight: "1rem", margin: "0rem", fontSize: "1.97rem" }}>Account Details</h5> */}
                    <p style={{ padding: "0rem", margin: "0rem", fontSize: "0.97rem", color: "gray" }}>Member since <span style={{ margin: "0rem", fontWeight: "700", color: "#528ff0", paddingLeft: "0.5rem" }}>{Data.registrationDate || '1 January 2021'}</span></p>
                </div>
                <div className="page-content" style={{ borderBottom: "1px solid #e2e2e2", padding: "0.6rem 2rem 0rem 0rem", display: "flex" }}>
                    <div className="sub-header" style={{ paddingRight: "2rem", minWidth: "250px" }}>
                        <h5 style={{ margin: "0rem", fontSize: "1.25rem", color: "gray" }}>User Info</h5>
                    </div>
                    <div className="right-content" style={{ flexGrow: "1", padding: "0rem  1rem " }}>
                        <div className="row-of-right-content" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <p style={{ margin: "0rem", paddingBottom: "0.5rem", paddingLeft: "0.5rem", color: "#747373", fontSize: "0.9rem" }}>Name</p>
                            <p style={{ margin: "0rem", color: "#528ff0", paddingBottom: "0.5rem", paddingRight: "0.5rem", fontSize: "0.9rem", fontWeight: "600" }}>{Data.name || ""}</p>
                        </div>
                        <div className="row-of-right-content" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <p style={{ margin: "0rem", paddingBottom: "0.5rem", color: "#747373", fontSize: "0.9rem", paddingLeft: "0.5rem" }}>Email Id</p>
                            <p style={{ margin: "0rem", color: "#528ff0", paddingBottom: "0.5rem", fontSize: "0.9rem", paddingRight: "0.5rem", fontWeight: "600" }}>{Data.email}</p>
                        </div>
                        <div className="row-of-right-content" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <p style={{ margin: "0rem", paddingBottom: "0.5rem", color: "#747373", fontSize: "0.9rem", paddingLeft: "0.5rem" }}>Contact Number</p>
                            <p style={{ margin: "0rem", color: "#528ff0", paddingBottom: "0.5rem", fontSize: "0.9rem", paddingRight: "0.5rem", fontWeight: "600" }}>{Data.contact}</p>
                        </div>
                    </div>
                </div>
                <div className="page-content" style={{ padding: "0.6rem 2rem 0rem 0rem", display: "flex"}}>
                    <div className="sub-header" style={{ paddingRight: "2rem", minWidth: "250px" }}>
                        <h5 style={{ margin: "0rem", fontSize: "1.25rem", color: "gray" }}>Membership Details</h5>
                    </div>
                    <div className="right-content" style={{ flexGrow: "1", padding: "0rem  1rem " }}>
                        <div className="row-of-right-content" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <p style={{ margin: "0rem", paddingBottom: "0.5rem", color: "#747373", fontSize: "0.9rem", paddingLeft: "0.5rem" }}>Email Remaining</p>
                            <p style={{ margin: "0rem", color: "#528ff0", paddingBottom: "0.5rem", fontSize: "0.9rem", paddingRight: "0.5rem", fontWeight: "600" }}>{Data.emailRem || 0}</p>
                        </div>
                        <div className="row-of-right-content" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e2e2e2" }}>
                            <p style={{ margin: "0rem", paddingBottom: "0.5rem", color: "#747373", fontSize: "0.9rem", paddingLeft: "0.5rem" }}>Email Used</p>
                            <p style={{ margin: "0rem", color: "#528ff0", paddingBottom: "0.5rem", fontSize: "0.9rem", paddingRight: "0.5rem", fontWeight: "600" }}>{Data.emailUsed || 0}</p>
                        </div>
                        {/* <hr style={{ margin: "0.25rem 0rem", height: "0.3px" }} /> */}
                        <div className="row-of-right-content" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <p style={{ margin: "0rem", paddingBottom: "0.5rem", color: "#747373", fontSize: "0.9rem", paddingLeft: "0.5rem" }}>LinkedIn Remaining</p>
                            <p style={{ margin: "0rem", color: "#528ff0", paddingBottom: "0.5rem", fontSize: "0.9rem", paddingRight: "0.5rem", fontWeight: "600" }}>{Data.inRem || 0}</p>
                        </div>
                        <div className="row-of-right-content" style={{borderBottom: "1px solid #e2e2e2", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <p style={{ margin: "0rem", paddingBottom: "0.5rem", color: "#747373", fontSize: "0.9rem", paddingLeft: "0.5rem" }}>LinkedIn Used</p>
                            <p style={{ margin: "0rem", color: "#528ff0", paddingBottom: "0.5rem", fontSize: "0.9rem", paddingRight: "0.5rem", fontWeight: "600" }}>{Data.inUsed || 0}</p>
                        </div>
                        {/* <hr style={{ margin: "0.25rem 0rem", height: "0.45px" }} /> */}
                        <div className="row-of-right-content" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <p style={{ margin: "0rem", paddingBottom: "0.5rem", color: "#747373", fontSize: "0.9rem", paddingLeft: "0.5rem" }}>Blogs Remaining</p>
                            <p style={{ margin: "0rem", color: "#528ff0", paddingBottom: "0.5rem", fontSize: "0.9rem", paddingRight: "0.5rem", fontWeight: "600" }}>{Data.blogRem || 0}</p>
                        </div>
                        <div className="row-of-right-content" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <p style={{ margin: "0rem", paddingBottom: "0.5rem", color: "#747373", fontSize: "0.9rem", paddingLeft: "0.5rem" }}>Blogs Used</p>
                            <p style={{ margin: "0rem", color: "#528ff0", paddingBottom: "0.5rem", fontSize: "0.9rem", paddingRight: "0.5rem", fontWeight: "600" }}>{Data.blogUsed || 0}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App
