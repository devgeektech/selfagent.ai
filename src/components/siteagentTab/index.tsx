"use client";
import Image from "next/image";
import React from "react";
import "./style.scss";
import logo from "../../assets/images/logo.svg";
import repeatCircle from "../../assets/images/repeatCircle.svg";
import lightBulb from "../../assets/images/lightBulb.svg";
import helloIcon from "../../assets/images/helloIcon.png";
import sendGreyIcon from "../../assets/images/sendGreyIcon.svg";
import voiceBtn from "../../assets/images/voiceBtn.svg";
import infoIcon from "../../assets/images/infoIcon.svg";
import soundRobotIcon from "../../assets/images/soundRobotIcon.svg";
import listenIcon from "../../assets/images/listenIcon.svg";
import { Form } from "react-bootstrap";
import Link from "next/link";

function Siteagenttab() {
  return (
    <>
      <div className="siteagnetTab">
        <div className="tab_content">
            <div className="title"><h2>Help_Angular_Succinctly.pdf </h2></div>
            <div className="content-Wrapper">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="id_status">
                            <div className="mb-40 d-flex justify-content-between">
                                <div className="">
                                    <label>Siteagent ID</label>
                                    <p className="mb-0">bo7UCgTiHMHnJWpZYhou3</p>
                                </div>
                                <div className="lightIcon">
                                    <button>
                                        <Image src={lightBulb} alt='lightBulb'/>
                                    </button>
                                    <div className="infoModal">
                                        <div className="infoModalInner d-flex">
                                            <div className="">
                                                <Image src={infoIcon} alt='infoIcon'/>
                                            </div>
                                            <div className="">
                                                <p>Tips to improve your siteagent responses!</p>
                                                <ol>
                                                    <li>Experiment with changing the chatbot's instructions by being very clear on its role, name, goal, behaviour, etc...</li>
                                                    <li>Revise answers that you don't like to teach the chatbot how to respond to similar questions in the future</li>
                                                    <li>Set your chatbot to use gpt-4 for better responses as it is better at understanding context and following the instructions.</li>
                                                    <p>For more information, check out our guide!</p>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-40 d-flex wrapStstusModal">
                                <div className="status">
                                    <label>Status</label>
                                    <p className="status_id mb-0">Trained</p>
                                </div>
                                <div className="modal_id">
                                    <label>Model</label>
                                    <p className="modal_id mb-0">gpt-3.5-turbo</p>
                                </div>
                            </div>
                            <div className="mb-40">
                                <label>Number of characters</label>
                                <p className="mb-0">1,312</p>
                            </div>
                            <div className="mb-40">
                                <label>Visiblity</label>
                                <p className="mb-0">Private</p>
                            </div>
                            <div className="mb-40">
                                <label>Temperature</label>
                                <p className="mb-0">0</p>
                                <div className="rangeslider">
                                    <Form.Range />
                                </div>
                            </div>
                            <div className="mb-40">
                                <label>Last trained at</label>
                                <p className="mb-0 dateTime">February 7, 2024 at 02:53 PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="chatBlock">
                            <div className="topbar d-flex justify-content-between">
                                <div className="">
                                    <Link href={'/'}>
                                        <Image src={logo} alt='logo'/>
                                    </Link>
                                </div>
                                <div className="">
                                    <button>
                                        <Image src={repeatCircle} alt='repeatCircle'/>
                                    </button>
                                </div>
                            </div>
                            <div className="chatMian">
                                {/* <div className="aiMessage">
                                    <Image src={helloIcon} alt='helloIcon'/>
                                    <p className="mb-0">Hi! What can I help you with?</p>
                                </div> */}
                                <div className="alenaMessage">
                                    <h5>Ask Elena</h5>
                                    <div className="aiMessage">
                                        <Image src={soundRobotIcon} alt='helloIcon'/>
                                        <div className="sms">
                                            Hi, I am Elena.<br/>
                                            What can I do dor you today?
                                        </div>
                                    </div>
                                </div>
                                <div className="listingMessage">
                                <div className="listingMessageinner">
                                    <h5>Listening...</h5>
                                    <div className="aiMessage">
                                        <Image src={listenIcon} alt='listenIcon'/>
                                        <div className="sms">
                                            Hi, Elena.<br/>
                                            Can you show me today’s forecast?
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className="bottomMessgae">
                                    <div className="d-flex justify-content-end">
                                        <button className="voiceBtn">
                                            <Image src={voiceBtn} alt='voiceBtn'/>
                                        </button>
                                    </div>
                                    <div className="messagetyper">
                                        <Form.Control type='text' placeholder="Message..."/>
                                        <button className="messageSendBtn">
                                            <Image src={sendGreyIcon} alt='sendGreyIcon'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Siteagenttab;
