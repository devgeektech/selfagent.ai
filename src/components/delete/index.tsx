"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import deleteIcon from "../../assets/images/deleteIcon.png";
import fileIcon from "../../assets/images/fileIcon.png";
import "./style.scss";
import InputField from "../Inputs/Inputfield";

function Delete(props: any) {
  useEffect(() => {
    console.log("prop delete modal---", props);
  }, []);

  const [showdelete, setShowDelete] = useState(false);
  const deleteClose = () => setShowDelete(false);


  return (
    <>
      <Modal
        className="deleteModal"
        show={props.show}
        onHide={props.hide}
        keyboard={false}
        // backdrop="static"
        backdrop={props.Static}
        centered
      >
        <div className="iconWrapper text-center">
          <span>
            <Image src={deleteIcon} alt="deleteIcon" />
          </span>
        </div>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.desc}</p>
          <p className="text-center">{props.DatasourecsDesc_1}</p>
          <p className="text-center">
            <strong>{props.DatasourecsDesc_2}</strong>
          </p>
          {props.inputfield && (
            <InputField
              label="Type delete my account to confirm"
              type="email"
              placeholder="Enter your email"
            ></InputField>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={deleteClose}
            className="cancelBtn"
            variant="secondary"
          >
            Cancel
          </Button>
          <Button className="btnprimary" variant="primary">
            {props.Submit}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Delete;
