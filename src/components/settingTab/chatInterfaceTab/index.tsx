"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import listenIcon from "../../../assets/images/listenIcon.svg";
import sendGreyIcon from "../../../assets/images/sendGreyIcon.svg";
import soundRobotIcon from "../../../assets/images/soundRobotIcon.svg";
import logo from "../../../assets/images/logo.svg";
import repeatCircle from "../../../assets/images/repeatCircle.svg";
import voiceBtn from "../../../assets/images/voiceBtn.svg";
import "./style.scss";
import {
  Form,
  InputGroup,
} from "react-bootstrap";

export default function Chatinterfacetab() {
  return (
    <>
      <div className="chatinterfaceTab">
        <div className="tab_content">
          <div className="title">
            <h2>Chat Interface</h2>
          </div>
          <div className="chatwrapper">
            <div className="row">
              <div className="col-lg-5">
                <div className="chatFieldsWrapper">
                  <h3>Note: Applies when embedded on a website</h3>
                  <div className="mb-4">
                    <div className="mb-2 d-flex justify-content-between">
                      <label>Initial Messages</label>
                      <button className="resetBtn">Reset</button>
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="Hi! What can I help you with?"
                    />
                  </div>
                  <div className="mb-4">
                    <label>Enter each message in a new line.</label>
                  </div>
                  <div className="mb-4">
                    <label>Suggested Messages</label>
                    <Form.Control
                      type="text"
                      placeholder="What is example.com?"
                    />
                  </div>
                  <div className="mb-4">
                    <label>Enter each message in a new line.</label>
                  </div>
                  <div className="mb-4">
                    <label>Message Placeholder</label>
                    <Form.Control type="text" placeholder="Message..." />
                  </div>
                  <div className="mb-4">
                    <label>Theme</label>
                    <Form.Select aria-label="Default select example">
                      <option>Light</option>
                      <option value="1">Dark</option>
                    </Form.Select>
                  </div>
                  <div className="mb-4">
                    <label>Update chatbot profile picture</label>
                    <Form.Control
                      type="file"
                      placeholder="Choose file No file chosen"
                    />
                  </div>
                  <div className="mb-4">
                    <InputGroup className="">
                      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      <Form.Control aria-label="Text input with checkbox" />
                    </InputGroup>
                  </div>
                  <div className="mb-4">
                    <label>Display name</label>
                    <Form.Control type="text" placeholder="Display name" />
                  </div>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between">
                      <label>User Message Color</label>
                      <button className="resetBtn">Reset</button>
                    </div>
                    <Form.Control
                      type="color"
                      id="exampleColorInput"
                      defaultValue="#3B81F6"
                      title="Choose your color"
                    />
                    <p className="mt-3">
                      **If the changes here don't show up immediately on your
                      website try clearing your browser cache or use incognito.
                      (New users will see the changes immediately)**
                    </p>
                  </div>
                  <div className="mb-4">
                    <label>Update chat icon</label>
                    <Form.Control
                      type="file"
                      placeholder="Choose file No file chosen"
                    />
                  </div>
                  <div className="mb-4">
                    <InputGroup className="">
                      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      <Form.Control
                        aria-label="Remove chat icon"
                        placeholder="Remove chat icon"
                      />
                    </InputGroup>
                  </div>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between">
                      <label>Chat Bubble Button Color</label>
                      <button className="resetBtn">Reset</button>
                    </div>
                    <Form.Control
                      type="color"
                      id="exampleColorInput"
                      defaultValue="#7C3AED"
                      title="Choose your color"
                    />
                  </div>
                  <div className="mb-4">
                    <label>Auto show initial messages pop-ups after</label>
                    <Form.Control
                      type="file"
                      placeholder="Choose file No file chosen"
                    />
                  </div>
                  <p className="secondsCount mb-0">
                    seconds (negative to disable)
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="chatBlock">
                  <div className="topbar d-flex justify-content-between">
                    <div className="">
                      <Link href={"/"}>
                        <Image src={logo} alt="logo" />
                      </Link>
                    </div>
                    <div className="">
                      <button>
                        <Image src={repeatCircle} alt="repeatCircle" />
                      </button>
                    </div>
                  </div>
                  <div className="chatMian">
                    <div className="alenaMessage">
                      <div className="aiMessage">
                        <Image src={soundRobotIcon} alt="helloIcon" />
                        <div className="sms">
                          Hi, I am Elena.
                          <br />
                          What can I do dor you today?
                        </div>
                      </div>
                    </div>
                    <div className="listingMessage">
                      <div className="listingMessageinner">
                        <div className="aiMessage">
                          <Image src={listenIcon} alt="listenIcon" />
                          <div className="sms">
                            Hi, Elena.
                            <br />
                            Can you show me today’s forecast?
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottomMessgae">
                      <div className="d-flex justify-content-end">
                        <button className="voiceBtn">
                          <Image src={voiceBtn} alt="voiceBtn" />
                        </button>
                      </div>
                      <div className="messagetyper">
                        <Form.Control type="text" placeholder="Message..." />
                        <button className="messageSendBtn">
                          <Image src={sendGreyIcon} alt="sendGreyIcon" />
                        </button>
                      </div>
                    </div>
                  </div>
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
