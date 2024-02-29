"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import deleteIcon from "../../assets/images/deleteIcon.png";
import fileIcon from "../../assets/images/fileIcon.png";

export default function InputField(props: any) {
 

  return (
    <>      
            <Modal.Title>{props.title}</Modal.Title>
            <p>{props.desc}</p>
            <p>{props.DatasourecsDesc_1}</p>
            <p><strong>{props.DatasourecsDesc_2}</strong></p>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{props.label}</Form.Label>
              <div className="position-relative">
                 <Form.Control type = {props.text} placeholder={props.placeholder} /> 
              </div>
            </Form.Group> 
    </>
  );
}

