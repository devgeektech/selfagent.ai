"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./style.scss";
import logo from "../../assets/images/logo.svg";
import loginIcon from "../../assets/images/loginIcon.svg";
// import Signin from "../signin";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import Signin from "../signin";
import Resetpassword from "../resetpassword";

function Header() {
  /* signin state */
  const [signIn, setSignIn] = useState(false);
  const signfun = () => { setSignIn(true); };
  const handleClose = () => setSignIn(false);
/* Reset state */
const [reset, setReset] = useState(false);
const resetfun = () => { setReset(true); };
const resetClose = () => setReset(false);

const openReset=()=>{
  setSignIn(false)
  setReset(true)
}


  return (
    <>
      <header className="header">
        <Navbar expand="lg" className="bg-white">
          <Container>
            <Navbar.Brand href="#">
              <Image src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#action1">Affiliates</Nav.Link>
                <Nav.Link href="#action1">Pricing</Nav.Link>
                <NavDropdown title="Resources" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">
                    Resources 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Resources 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Resources 3
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className="btns_wrap">
                <Button variant="btnSecondary" 
                // onClick={signfun}
                href="/signIn"
                >
                  Sign In <Image src={loginIcon} alt='loginIcon'/>
                </Button>
                <Button className="btnprimary">Try for Free</Button>
              </div>
            </Navbar.Collapse>
              <div className="btns_wrap">
                <Button variant="btnSecondary" 
                // onClick={signfun}
                href="/signIn"
                >
                  Sign In <Image src={loginIcon} alt='loginIcon'/>
                </Button>
                <Button className="btnprimary">Try for Free</Button>
              </div>
          </Container>
        </Navbar>
      </header>

      {signIn && (
        <Signin
      signInValue={signIn}
      handleClose={handleClose}
      openReset={openReset}
       />
      )}


      {reset && (
      <Resetpassword
      resetValue={reset}
      resetClose={resetClose}
      />
      )}


    </>
  );
}
export default Header;
