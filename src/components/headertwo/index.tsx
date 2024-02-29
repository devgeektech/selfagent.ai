"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./style.scss";
import logo from "../../assets/images/logo.svg";
import arrowRightIcon from "../../assets/images/arrowRightIcon.svg";
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

function Headertwo() {
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
      <header className="headersecond">
        <Navbar expand="sm" className="bg-white">
          <Container fluid>
            <Navbar.Brand href="#">
              <Image src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="my-2 my-lg-0" navbarScroll>
                <Nav.Link href="/help">Help</Nav.Link>
                <Nav.Link href="/account">Account <Image src={arrowRightIcon} alt='arrowRightIcon'/></Nav.Link>
              </Nav>
            </Navbar.Collapse>
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
export default Headertwo;
