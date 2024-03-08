"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import minusCircle from "../../../assets/images/minusCircle.svg";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import uploadIcon from "../../../assets/images/uploadIcon.svg";
import "./style.scss";
import { Col, Form, FormControl, ProgressBar, Row, Tab } from "react-bootstrap";

export default function Notificationtab(props: any) {
  return (
    <>
      <div className="notificationsTab">
        <div className="tab_content mb-3">
          <div className="title">
            <h2>Notifications</h2>
          </div>
          <div className="">
            <div className="content-wrapper">
              <div className="modal-content">
               <div className="centerContent">
                <h5>Notifications are available for subscribed users only</h5>
                <button className="btnprimary">Upgrade now</button>
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
