"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/logo.svg";
import Google from "../../assets/images/google-icon.svg";
import Eyepass from "../../assets/images/eye-pass.svg";
import "./style.scss";
import { Form, Button } from "react-bootstrap";


export default function ForgetPassword() {
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

      <section className="main-form forget-password">
        <h2 className="title-heading">Reset Password</h2>
        <p className="for-description">Enter your email to receive instructions on how to reset your password.</p>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="sign-up-form">
              <Form.Group className="mb-3">
                <div className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Email address" /> 
                </div>
                <Button className="btnprimary w-100 login-btn mt-3">Sign up</Button>
                <div className="text-center mt-4 mb-2 sign-in">
                  <p>Remember your password? <Link href="/signIn">Login</Link></p>
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
