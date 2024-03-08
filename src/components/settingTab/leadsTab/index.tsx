"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import closeIcon from "../../../assets/images/closeIcon.svg";
import tickIcon from "../../../assets/images/tickIcon.svg";
import "./style.scss";
import { Col, Form, FormControl, Modal, ProgressBar, Row, Tab } from "react-bootstrap";

export default function Leadstab(props: any) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="leadsTab">
        <div className="tab_content mb-3">
          <div className="title">
            <h2>Leads</h2>
          </div>
          <div className="">
            <div className="content-wrapper">
              <div className="modal-content">
                <div className="mb-4">
                  <label>Title</label>
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      placeholder="Let us know how to contact you"
                    />
                    <button className="resetBtn">Reset</button>
                  </div>
                </div>
              
                <div className="mb-4 d-flex justify-content-between">
                  <div className="w-100">
                    <div className="mb-2 d-flex justify-content-between">
                      <label>Name</label>
                      <label className="switch">
                        <Form.Control type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <div className="position-relative">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                      />
                      <button className="resetBtn">Reset</button>
                    </div>
                  </div>
                </div>
                <div className="mb-4 d-flex justify-content-between">
                  <div className="w-100">
                    <div className="mb-2 d-flex justify-content-between">
                      <label>Email</label>
                      <label className="switch">
                        <Form.Control type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <div className="position-relative">
                      <Form.Control
                        type="text"
                        placeholder="Email"
                      />
                      <button className="resetBtn">Reset</button>
                    </div>
                  </div>
                </div>
                <div className="mb-4 d-flex justify-content-between">
                  <div className="w-100">
                    <div className="mb-2 d-flex justify-content-between">
                      <label>Phone</label>
                      <label className="switch">
                        <Form.Control type="checkbox" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <div className="position-relative">
                      <Form.Control
                        type="text"
                        placeholder="Phone Number"
                      />
                      <button className="resetBtn">Reset</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-end">
          <button className="btnprimary" onClick={handleShow}>Save</button>
        </div>
      </div>

      {/* Success modal Html start */}
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
            <p className="text-center">Your changes are saved.</p>
        </Modal.Body>
      </Modal>
      {/* Success modal Html end */}
    </>
  );
}
