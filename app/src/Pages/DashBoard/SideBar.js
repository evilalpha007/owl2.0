import { Link } from 'react-router-dom'
import React from 'react';
import { Menu } from 'antd';

import { MailOutlined, TableOutlined, UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Sider = ({ setFlag, SideBarDisplay, setSideBarDisplay }) => {

    const [openKeys, setOpenKeys] = React.useState(['sub1']);

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <div id="sideBarMenu" >
            <div id="closeSideBar" style={{display: "none"}}>
                <div style={{ padding: "0.65rem", marginRight: "1rem", cursor: "pointer", float: "right" }}  onClick={()=>{document.getElementById("sideBarMenu").style.display = "none";}}>
                    <i className="fas fa-times" style={{ color: "#bcbcbc", fontSize: "1.2rem", margin: "auto 0" }}></i>
                </div>
            </div>
            <div style={{ width: "100%", display: "flex", padding: "1rem", margin: "2rem auto", borderBottom: "2px solid #747474" }}>
                <Link to='/' className='link' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <img style={{ width: "46px" }} src="./web/images/logo.png" alt="logo" />
                </Link>
                <Link to='/' className='link'>
                    <div style={{ margin: "auto 15px", fontWeight: "600", fontSize: "2rem", color: "white" }} >OtusAI</div>
                </Link>
            </div>
            <Menu mode="inline" defaultSelectedKeys={['2']} openKeys={openKeys} onOpenChange={onOpenChange} style={{ backgroundColor: "#2e3345" }}>
                <Menu.Item icon={<MailOutlined />} key="2" onClick={(e) => { setFlag(1) }} >New Request</Menu.Item>
                <Menu.Item icon={<TableOutlined />} key="1" onClick={(e) => { setFlag(0) }} >All Requests</Menu.Item>
                <Menu.Item icon={<UserOutlined />} key="4" onClick={(e) => { setFlag(2) }} >Account</Menu.Item>
                <Menu.Item icon={<QuestionCircleOutlined />} key="5" onClick={(e) => { setFlag(3) }} >Contact Us</Menu.Item>
            </Menu>
        </div>
    );
}

export default Sider
