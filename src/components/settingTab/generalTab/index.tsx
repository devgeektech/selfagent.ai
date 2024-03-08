"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import minusCircle from "../../../assets/images/minusCircle.svg";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import uploadIcon from "../../../assets/images/uploadIcon.svg";
import "./style.scss";
import { Col, Form, FormControl, ProgressBar, Row, Tab } from "react-bootstrap";

export default function Genraltab(props: any) {
  return (
    <>
      <div className="generalTab">
        <div className="tab_content">
          <div className="title">
            <h2>General</h2>
          </div>
          <div className="content-wrapper">
            <div className="general-content">
                <div className="mb-3">
                    <label>Siteagent ID</label>
                    <p>bo7UCgTiHMHnJWpZYhou3</p>
                </div>
                <div className="mb-3">
                    <label>Number of characters</label>
                    <p>1,312</p>
                </div>
                <div className="mb-3">
                    <label>Name</label>
                    <Form.Control type='text' placeholder='Help_Angular_Succinctly.pdf '/>
                </div>
                <div className="mb-3 d-flex justify-content-end">
                    <button className="btnprimary">Save</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
