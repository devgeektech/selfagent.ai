"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react'
import warningIcon from '../../assets/images/warningIcon.png';

import "./style.scss";
import Headertwo from "@/components/headertwo";
import { Button, Form, Modal } from "react-bootstrap";
import Delete from "@/components/delete";

export default function Account() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showdelete, setShowDelete] =useState(false);
    const deleteClose = () => setShowDelete(false);
    const deleteShow = () => setShowDelete(true);

    const showdeletefun = () => {
        setShowDelete(true);
      };

  return (
    <>
    <div className='accountPage'>
       <Headertwo/>
        <div className='innerpage'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card-block">
                            <h1>Account</h1>
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="account-content">
                                            <div className="block-border">
                                                <h5>Usage</h5>
                                                <p className="consmue">Messages consumed: 0/20</p>
                                                <p className="mb-0">Your credits renew at the start of every calendar month. Next renewal: March 1st</p>
                                            </div>
                                            <div className="block-border">
                                                <div className="d-flex justify-content-between align-items-end">
                                                    <div className="">
                                                        <h5>Your Email</h5>
                                                        <p className="mb-0">info@faryarghazanfari.com</p>
                                                    </div>
                                                    <button onClick={handleShow} className="editBtn">Edit</button>
                                                </div>
                                            </div>
                                            <div className="block-border">
                                                <h5>Siteagent API Key</h5>
                                                <p className="mb-0">Subscription required to get an API key.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="plan-block">
                                            <h5>Your Plan</h5>
                                            <h6>You are on the free plan</h6>
                                            <ul>
                                                <li>20 message credits/month</li>
                                                <li>1 AI Agent</li>
                                                <li>400,000 characters/AI Agent</li>
                                                <li>Limit to 10 links to train on</li>
                                                <li>Embed on unlimited websites</li>
                                                <li>Upload multiple files</li>
                                                <li>View conversation history</li>
                                                <li>Siteagent get deleted after 7 days of inactivity</li>
                                            </ul>
                                        </div>
                                        <div className="d-flex justify-content-end mt-3">
                                            <button className="upgradeBtn btnprimary">Upgrade plan</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="danger-zone">
                                    <h5 className="text-center">Danger Zone</h5>
                                    <div className="d-flex justify-content-center">
                                        <button className="signoutBtn">Sign Out</button>
                                        <button onClick={showdeletefun} className="deleteAccountBtn">Delete Account</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Start modal Html */}
    <Modal className="emailEditModal" show={show} onHide={handleClose} centered>
        <div className="iconWrapper text-center">
            <span>
                <Image src={warningIcon}  alt='warningIcon'/>
            </span>
        </div>
        <Modal.Header closeButton>
          <Modal.Title>Change email address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p className="mb-1">Current email address</p>
            <p className="mb-1"><strong>rakeshkumar@geekinformatic.com</strong></p>
            <div className="">
                <Form.Label>New email address</Form.Label>
                <Form.Control type="email" placeholder="ashishanand@geekinformatic.com" />
                <p className="message mb-0 d-none">We sent a link to both your old and new email address. You must click the link in both email to confirm the change.</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="cancelBtn" variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button className="btnprimary" variant="primary" onClick={handleClose}>Submit</Button>
        </Modal.Footer>
    </Modal>
    {/* End modal Html */}

    {showdelete && (
        <Delete
            title={"Delete all my account data"}
            desc={"This will delete all the data associated with your account including your AI Agent. This action cannot be undone."}
            show={deleteShow}
            hide={deleteClose}
            inputfield={true}
            // showdeletefun={showdeletefun}
        />
        )}
    </>
  )
}
