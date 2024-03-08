"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/logo.svg";
import repeatCircle from "../../assets/images/repeatCircle.svg";
import sendGreyIcon from "../../assets/images/sendGreyIcon.svg";
import closeIcon from "../../assets/images/closeIcon.svg";
import sendIcon from "../../assets/images/sendIcon.svg";
import tickIcon from "../../assets/images/tickIcon.svg";
import "./style.scss";
import { Form, Button, Modal } from "react-bootstrap";

export default function Chatboat() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // useEffect(()=>{
    //     setShow(true)
    // })
  return (
    <>
      <div className="chatboatPage">
        <section className="main-top-bar">
          <div className="row mx-0">
            <div className="col-md-12 p-3">
              <div className="inr-topbar">
                <Link href="/">
                  <Image src={Logo} alt="Logo" />
                </Link>
                <button><Image src={repeatCircle} alt='repeatCircle'/></button>
              </div>
            </div>
          </div>
        </section>
        <section className="chatSection">
            <div className="custmerSupport">
                <span>Hi! What can I help you with?</span>
            </div>
            <div className="userChat">
                <span>Quis aute iure reprehenderit in</span>
            </div>
            <div className="contactForm">
                <div className="formMain">
                    <button className="closeBtn">
                        <Image src={closeIcon} alt='closeIcon'/>
                    </button>
                    <h2>Let us know how to contact you</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"  />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Button className="btnprimary" onClick={handleShow}>Send<Image src={sendIcon} alt='sendIcon'/></Button>
                    </Form>
                </div>
            </div>
        </section>
        <div className="messageTypeWrapper">
        <div className="messageTypeWrapperInner">
            <Form.Control type="text" placeholder="Message..."/>
            <Button className="sendBtn">
                <Image src={sendGreyIcon} alt='sendGreyIcon'/>
            </Button>
            <p className="mb-0 text-center">Powered By Siteagent.ai</p>
        </div>
      </div>
      </div>

      <Modal
      show={show}
        className="successModal"
        keyboard={false}
        centered
      >
        <div className="iconWrapper text-center">
          <span>
            <Image src={tickIcon} alt="tickIcon" />
          </span>
        </div>
        <Modal.Header>
            <button onClick={handleClose}>
                <Image src={closeIcon} alt='closeIcon'/>
            </button>
        </Modal.Header>
        <Modal.Body>
            <h2 className="text-center">Success</h2>
            <p className="text-center">Submitted Successfully</p>
        </Modal.Body>
      </Modal>


    </>
  );
}
