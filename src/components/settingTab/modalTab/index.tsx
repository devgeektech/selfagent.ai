"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import minusCircle from "../../../assets/images/minusCircle.svg";
import deleteIcon from "../../../assets/images/deleteIcon.png";
import uploadIcon from "../../../assets/images/uploadIcon.svg";
import "./style.scss";
import { Col, Form, FormControl, ProgressBar, Row, Tab } from "react-bootstrap";

export default function Modaltab(props: any) {
  return (
    <>
      <div className="modalTab">
        <div className="tab_content mb-3">
          <div className="title">
            <h2>Training</h2>
          </div>
          <div className="">
            <div className="content-wrapper">
              <div className="modal-content">
                <div className="mb-3">
                  <label>Last trained at</label>
                  <p>February 7, 2024 at 02:53 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3 d-flex justify-content-end">
          <button className="btnprimary">Save</button>
        </div>
        <div className="tab_content mb-3">
          <div className="title">
            <h2>Model</h2>
          </div>
          <div className="content-wrapper">
            <div className="modal-content">
              <div className="d-flex justify-content-between align-items-center">
                <h4>Instructions</h4>
                <button className="resetBtn">Reset</button>
              </div>
              <div className="instructionWrap">
                  <p>I want you to act as a support agent. Your name is "AI Assistant". You will provide me with answers from the given info. If the answer is not included, say exactly "Hmm, I am not sure." and stop after that. Refuse to answer any question not about the info. Never break character.</p>
              </div>
              <p className="instructionAllow">The instructions allows you to customize your chatbot's personality and style. Please make sure to experiment with the instructions by making it very specific to your data and use case.</p>
              <div className="title_field">
                <h4 className="mb-3">Model</h4>
                <Form.Control type='text'/>
              </div>
              <p className="instructionAllow">gpt-4 is much better at following the instructions and not hallucinating, but it's slower and more expensive than gpt-3.5-turbo (1 message using gpt-3.5-turbo costs 1 message credit. 1 message using gpt-4 costs 20 message credits)</p>
              <div className="rangesliderWrapper">
                <Form.Range  min="1" max="100" />
                <div className="d-flex justify-content-between">
                  <span>Reserved</span>
                  <span>Creative</span>
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
