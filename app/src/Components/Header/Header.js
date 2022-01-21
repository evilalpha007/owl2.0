import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import './Header.css'
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  return (

    <Navbar collapseOnSelect expand="lg" style={{position : "fixed", top: "0", zIndex : "1" ,width : "100%", backgroundColor: "white", boxShadow: "2px 2px 10px #6f8efd"}} variant="dark">
      <Container>
        <Link to = '/' className='d-flex align-items-center col-md-3 mb-2 mb-md-0 text-decoration-none'>
          <Logo className="logo" />
          <p style={{color: "#0d6efd !important"}} className='navLinks m-0 ms-1'>Otus AI</p>
        </Link>
        <Navbar>
          <Nav className="me-auto">
          </Nav>
          <Nav>
          <Link to='login' style={{textDecoration: "none" }}>
            <Button className="navButton" style={{margin: "auto 10px"}} variant="outline-primary">Log In</Button>
          </Link>
          <Link to='register' style={{textDecoration: "none" }}>
            <Button className = "active1 navButton"  style={{margin: "auto 10px"}}  variant="outline-primary">
              Try For Free
            </Button>
          </Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>

    // <div className={`sticky-top container ${Styles.header}`}>
    //   <header className='d-flex flex-wrap  align-items-center justify-content-center justify-content-md-between py-3 mb-4'>
    //     <a
    //       href='/'
    //       className='d-flex align-items-center col-md-3 mb-2 mb-md-0   text-decoration-none'
    //     >
    //       <Logo />
    //       <p className='navLinks text-white m-0 ms-1'>Otus AI</p>
    //     </a>

    //     <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0'>
    //       <li>
    //         <a href='/' className='nav-link px-2 link-primary text-decoration-underline'>
    //           Home
    //         </a>
    //       </li>
    //       <li>
    //         <a href='/' className='nav-link px-2  text-dark'>
    //           About
    //         </a>
    //       </li>
    //       <li>
    //         <a href='/' className='nav-link px-2  text-dark'>
    //           Contact Us
    //         </a>
    //       </li>
    //     </ul>

    //     <div className='col-md-3 d-flex justify-content-evenly'>
    //       <button className='bg-white btn btn-sm text-primary'>
    //         <Link to='/login' style = {{color : '#3A55FF'}} className={` ${Styles.link}`}>
    //           Login
    //         </Link>
    //       </button>
    //       <p className="mt-auto mb-auto" style = {{cursor: "pointer"}}>
    //         <Link to='/register' className={` ${Styles.link} text-white `}>
    //           Get Started
    //         </Link>
    //       </p>
    //     </div>
    //   </header>
    // </div>
  )
}

export default Header
