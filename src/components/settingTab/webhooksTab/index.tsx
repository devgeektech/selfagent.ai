"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import minusCircle from "../../../assets/images/minusCircle.svg";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import uploadIcon from "../../../assets/images/uploadIcon.svg";
import "./style.scss";
import { Col, Form, FormControl, ProgressBar, Row, Tab } from "react-bootstrap";

export default function Webhookstab(props: any) {
  return (
    <>
      <div className="webhooksTab">
        <div className="tab_content mb-3">
          <div className="title">
            <h2>Notifications</h2>
          </div>
          <div className="">
            <div className="content-wrapper">
              <div className="modal-content">
               <div className="centerContent">
                <h5>Webhooks are not available for your plan.<br/>
                    Upgrade to be able to use your own webhooks for receiving events on your own endpoints.</h5>
                <button className="btnprimary">Upgrade now</button>
               </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
