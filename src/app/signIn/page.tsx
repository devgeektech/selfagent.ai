"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/logo.svg";
import Google from "../../assets/images/google-icon.svg";
import Eyepass from "../../assets/images/eye-pass.svg";
import "./style.scss";
import { Form, Button } from "react-bootstrap";


export default function Singin() {
  return (
    <>
      <section className="main-top-bar">
        <div className="row mx-0">
          <div className="col-md-12 p-3">
            <div className="inr-topbar">
              <Link href="/">
                <Image src={Logo} alt="Logo" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="main-form">
        <h2 className="title-heading">Get started for free</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sign-up-form">
              <Form.Group className="mb-3">
                <div className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Email address" /> 
                </div>
                <div className="mb-3 position-relative">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="Password" placeholder="Password" /> 
                  <Image src={Eyepass} alt=" Eyepass" className="position-absolute eye-icon"></Image>
                </div>
                <div className="mb-2 position-relative">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="Password" placeholder="Confirm Password" /> 
                  <Image src={Eyepass} alt=" Eyepass" className="position-absolute eye-icon"></Image>
                </div>
                <div className="text-end forget-pass mb-4">
                  <Link href="/">Forgot password?</Link>
                </div>
                <Button className="btnprimary w-100 login-btn">Sign in</Button>
                <div className="text-center mt-4 mb-2 sign-in">
                  <p>Already have an account? <Link href="/signUp">Sign up</Link></p>
                </div>
                <div className="continue-with-google text-center">
                  <p>OR CONTINUE WITH</p>
                </div>
                <div className="continue-with-googles ">
                  <Button className="w-100"><Image src={Google} alt="Google"></Image>Google</Button>
                </div>
                <div className="text-center mt-4 terms">
                  <p>By continuing, you agree to our <Link href="/">Terms of Service </Link>and <Link href="/">Privacy Policy</Link>.</p>
                </div>
              </Form.Group>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
