import React from 'react';
import {  useHistory } from 'react-router-dom'
import { useState } from 'react';

const UserHeader = ({userDetails, setIsAuth, setSideBarDisplay}) => {
    
    let history = useHistory();
    const [Display, setDisplay] = useState("none")
    const logout = () => {
        setIsAuth(false);
        localStorage.clear();
        // alert("Logged out successfully!");
        history.push("/login");
        return;
    }
    const toggleUser = () => {
        if(Display === "none") {
            setDisplay("block");
        } else {
            setDisplay("none");
        }
    }
    return (
        <>
            <div style={{marginBottom: "0rem"}}>
                <div  id="sideBarMenuForPc"  style={{display: "flex", backgroundColor: "white", flexDirection: "column", justifyContent: "center", alignItems: "flex-end", borderBottom: "2px solid #e7e7e7"}}>
                    <div style={{padding: "0.65rem", marginRight: "1rem", cursor: "pointer"}} onClick={(toggleUser)}>
                        <i className="fas fa-user" style={{color: Display === "none" ? "#58666e" : "#3b80ee", fontSize: "1.2rem", margin: "auto 0"}}></i>
                    </div>
                </div>
                <div id="sideBarMenuForMobile" style={{display: "none", backgroundColor: "white", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #e7e7e7"}}>
                    <div style={{padding: "0.65rem", marginRight: "1rem", cursor: "pointer"}} onClick={()=>{document.getElementById("sideBarMenu").style.display = "block";}}>
                        <i className="fas fa-bars" style={{color: "#58666e", fontSize: "1.2rem", margin: "auto 0"}}></i>
                    </div>
                    <div style={{padding: "0.65rem", marginRight: "1rem", cursor: "pointer"}} onClick={toggleUser}>
                        <i className="fas fa-user" style={{color: Display === "none" ? "#58666e" : "#3b80ee", fontSize: "1.2rem", margin: "auto 0"}}></i>
                    </div>
                </div>
                <div style={{ display: Display, backgroundColor: "white", minWidth: "250px", width: "fit-content", border: "1px solid rgba(0,0,0,0.15)", position: "absolute", right: "0", float: "right", marginRight: "1.5rem", padding: "1rem", zIndex: "100"}}>
                    <div style={{display: "flex", justifyContent: "flex-start", alignItems: "center", padding: "1rem", borderBottom: "0.1px solid #d9d9d9"}}>
                        <div style={{padding: "0.5rem"}}>
                            <i className="fas fa-user-circle" style={{color: "#58666e", fontSize: "1.8rem", margin: "auto 0"}}></i>
                        </div>
                        <div style={{color: "#58666e", padding: "0.5rem", fontSize: "16px", fontWeight: "600"}}>
                            {userDetails.name}
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <p style={{margin: "0", padding: "0.35rem",paddingBottom: "0", fontSize: "0.75rem", color: "#58666e", fontWeight: "600"}}>Logged in as</p>
                        <p style={{margin: "0", padding: "0.35rem", fontSize: "0.85rem", paddingTop: "0", color: "#58666e", fontWeight: "600"}}> {userDetails.email} </p>
                        <div style={{margin: "1rem", padding: "0.35rem", color: "white", backgroundColor: "#3b80ee", textAlign: "center", cursor: "pointer"}} onClick={logout}>Log Out</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserHeader