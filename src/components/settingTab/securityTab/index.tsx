"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import closeIcon from "../../../assets/images/closeIcon.svg";
import tickIcon from "../../../assets/images/tickIcon.svg";
import "./style.scss";
import { Col, Form, FormControl, Modal, ProgressBar, Row, Tab } from "react-bootstrap";

export default function Securitytab(props: any) {
  return (
    <>
      <div className="securityTab">
        <div className="tab_content mb-3">
          <div className="title">
            <h2>Security</h2>
          </div>
          <div className="">
            <div className="content-wrapper">
              <div className="modal-content">
                <div className="mb-4">
                  <label>Visibilty</label>
                  <div className="position-relative mb-2">
                  <Form.Select aria-label="Default select example">
                    <option>Private</option>
                    <option value="1">Public</option>
                  </Form.Select>
                  </div>
                  <p>'private': No one can access your chatbot except you (your account)</p>
                  <p>'public': Other people can chat with your chatbot if you send them the link. You can also embed it on your website so your website
                      visitors are able to use it.</p>
                </div>
                <div className="mb-4">
                  <h6>Only allow the iframe and widget on specific domains</h6>
                  <label className="switch">
                        <Form.Control type="checkbox" />
                        <span className="slider round"></span>
                  </label>
                </div>
                <div className="mb-4">
                  <label>Domains</label>
                  <Form.Control placeholder="exampple.com"/>
                </div>
                <div className="mb-4 d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">Rate Limiting</h6>
                  <button className="resetBtn">Reset</button>
                </div>
                <p>Limit the number of messages sent from one device on the iframe and chat bubble (this limit will not be applied to you on siteagent.ai, only on your website for your users to prevent abuse).</p>
                <div className="d-flex mb-4 inlineForm align-items-center">
                  <label>Limit to only</label>
                  <Form.Control type="text" placeholder='20' />
                  <label>Messages Every</label>
                  <Form.Control type="text" placeholder='240' />
                  <label>seconds.</label>
                </div>
                <div className="mb-4">
                  <label className="mb-2">Show this message to show when limit is hit</label>
                  <Form.Control type="text" placeholder='Too many messages in a row' />
                </div>
              </div>
            </div>
          </div>
                
        </div>
        <div className="mb-3 d-flex justify-content-end">
          <button className="btnprimary">Save</button>
        </div>
      </div>
    </>
  );
}
