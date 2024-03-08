"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import pdfIcon from "../../assets/images/pdfIcon.png";

import "./style.scss";
import Headertwo from "@/components/headertwo";
import { Button, Form, Modal } from "react-bootstrap";

export default function Uploads() {
  return (
    <>
      <div className="uploadsPage">
        <Headertwo />
        <div className="innerpage">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="card-block">
                  <h1>Siteagent</h1>
                  <div className="filesWrapper">
                    <ul>
                      <li>
                        <div className="iconWrap">
                          <Image src={pdfIcon} alt="pdfIcon" />
                        </div>
                        <div className="name_icon">
                          <Image src={pdfIcon} alt="pdfIcon" />
                          <h5>Help_Angular_Succi.pdf</h5>
                        </div>
                        <p className="text-center mb-0">26.9 Mb</p>
                      </li>
                    </ul>
                    <div className="d-flex justify-content-center">
                      <button className="btnprimary">
                        Website agent Chatbot
                      </button>
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
