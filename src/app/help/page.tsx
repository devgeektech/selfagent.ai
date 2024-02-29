"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react'
import fileIcon from '../../assets/images/fileIcon.png';

import "./style.scss";
import Headertwo from "@/components/headertwo";
import { Button, Form, Modal } from "react-bootstrap";

export default function Help() {
    const [showcase, setShowCase] = useState(false);
    const casehandleClose = () => setShowCase(false);
    const casehandleShow = () => setShowCase(true);


  return (
    <>
    <div className='helpPage'>
       <Headertwo/>
        <div className='innerpage'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card-block">
                            <h1>Submit a case to our Customer Support Team</h1>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="info@faryarghazanfari.com" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Select aria-label="Default select example">
                                        <option>Select All</option>
                                        <option value="1">Select affected siteagent</option>
                                        <option value="2">Help_Angular_Succinctly.pdf </option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Check inline label="Does not apply"  name="group1"  type="checkbox"/>
                                </Form.Group>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Problem Area</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Billing</option>
                                                <option value="1">Account Management</option>
                                                <option value="2">Feature Request</option>
                                                <option value="3">Bugs/Issues</option>
                                                <option value="4">Affiliate Program</option>
                                                <option value="5">Partnership</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Severity</Form.Label>
                                            <Form.Select aria-label="Default select example">
                                                <option>Low</option>
                                                <option value="1">Normal</option>
                                                <option value="2">High</option>
                                                <option value="3">Urgent</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                </div>
                                <Form.Group className="mb-4" controlId="subject">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="Date range" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control placeholder="Please include all information relevant to your issue." as="textarea" />
                                </Form.Group>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="error">Please add a description before submitting your request.</div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex justify-content-end">
                                            <button className="btnDefault">Attachments</button>
                                            <button onClick={casehandleShow} className="btnprimary caseBtn">Submit Case</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Start modal Html */}
    <Modal className="caseModal" show={showcase} onHide={casehandleClose} centered>
        <div className="iconWrapper text-center">
            <span>
                <Image src={fileIcon}  alt='fileIcon'/>
            </span>
        </div>
        <Modal.Header closeButton>
            
          <Modal.Title>Submit Case</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center"><p>This case will be created under your account with the email: faryarghazanfari@gmail.com</p>
            <p>Are you ready to submit?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="cancelBtn" variant="secondary" onClick={casehandleClose}>Cancel</Button>
          <Button className="btnprimary" variant="primary" onClick={casehandleClose}>Submit</Button>
        </Modal.Footer>
    </Modal>
    {/* End modal Html */}

    </>
  )
}
