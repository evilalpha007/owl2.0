import { Link, useHistory } from 'react-router-dom'
import Logo from '../../Components/Logo'
import React from 'react';
import { Menu } from 'antd';

import { UserOutlined, TableOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const Sider = ({setFlag, setIsAuth}) => {


    let history = useHistory();
    const logout = ()=>{
        setIsAuth(false);
        localStorage.clear();
        // alert("Logged out successfully!");
        history.push("/adLogin");
        return;
    }

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
        <Menu mode="inline" openKeys={openKeys} defaultSelectedKeys={['1']} onOpenChange={onOpenChange} style={{ backgroundColor: "#eae8e85e", width: "20%", position: "sticky", top: "0px", left: "0px", height: "100vh", overflowY: "auto" }}>

            <Link to='/' style={{ display: "flex", padding: "35px", justifyContent: "center" }} className='link'>
                <Logo />
                <div style={{ margin: "auto 25px", fontWeight: "600", fontSize: "1.15rem" }} >OtusAI</div>
            </Link>

            <Menu.Item style={{ borderBottom: "1px solid #d4d2d2" }} icon={<TableOutlined />} key="1" 
             onClick={(e)=>{setFlag(0)}}
             >All Data</Menu.Item>
            <Menu.Item style={{ borderBottom: "1px solid #d4d2d2" }} icon={<TableOutlined />} key="2" 
             onClick={(e)=>{setFlag(1)}}
             >Approve Users</Menu.Item>
            <Menu.Item style={{ borderBottom: "1px solid #d4d2d2" }} icon={<TableOutlined />} key="3" 
             onClick={(e)=>{setFlag(2)}}
             >User Info</Menu.Item>
            
            <SubMenu key="sub" icon={<UserOutlined />} title="User">
                <Menu.Item style={{ borderBottom: "1px solid #d4d2d2" }} key="5">More</Menu.Item>
                <Menu.Item style={{ borderBottom: "1px solid #d4d2d2" }} key="4"  onClick={logout} >Log Out</Menu.Item>
            </SubMenu>
        </Menu>
    );
}

export default Sider