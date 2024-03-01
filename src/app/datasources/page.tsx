"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import minusCircle from "../../assets/images/minusCircle.svg";
import deleteIcon from "../../assets/images/deleteIcon.png";
import tabFileIcon from "../../assets/images/tabFileIcon.png";
import tabFileBlackIcon from "../../assets/images/tabFileBlackIcon.png";
import tabTextBlackIcon from "../../assets/images/tabTextBlackIcon.png";
import tabTextIcon from "../../assets/images/tabTextIcon.png";
import tabWebsiteIcon from "../../assets/images/tabWebsiteIcon.png";
import tabWebsiteBlackIcon from "../../assets/images/tabWebsiteBlackIcon.png";
import tabQABlackIcon from "../../assets/images/tabQABlackIcon.png";
import tabQAIcon from "../../assets/images/tabQAIcon.png";
import tabNotionBlackIcon from "../../assets/images/tabNotionBlackIcon.png";
import tabNotionIcon from "../../assets/images/tabNotionIcon.png";
import uploadIcon from "../../assets/images/uploadIcon.svg";
import circleTickGreenIcon from "../../assets/images/circleTickGreenIcon.svg";

import "./style.scss";
import Headertwo from "@/components/headertwo";
import {
  Button,
  Col,
  Form,
  FormControl,
  Modal,
  Nav,
  ProgressBar,
  Row,
  Tab,
} from "react-bootstrap";
import Delete from "@/components/delete";

export default function Datasourecs(props: any) {
  const [showdelete, setShowDelete] = useState(false);
  const deleteClose = () => setShowDelete(false);
  const deleteShow = () => setShowDelete(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="dataSourecsPage">
        <Headertwo />
        <div className="innerpage">
          <div className="container">
            <div className="title_desc text-center">
              <h1>Data Sources</h1>
              <p className="mb-0">
                Add your data sources to train your siteagent
              </p>
            </div>
            <div className="card-block">
              <div className="leftTabsWrapper">
                <Tab.Container id="left-tabs" defaultActiveKey="files">
                  <Row>
                    <Col xl={2} lg={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="files">
                            <strong>
                              <Image
                                className="gradientIcon"
                                src={tabFileIcon}
                                alt="tabFileIcon"
                              />
                              <Image
                                className="blackIcon"
                                src={tabFileBlackIcon}
                                alt="tabFileBlackIcon"
                              />
                            </strong>
                            <span>Files</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="text">
                            <strong>
                              <Image
                                className="gradientIcon"
                                src={tabTextIcon}
                                alt="tabTextIcon"
                              />
                              <Image
                                className="blackIcon"
                                src={tabTextBlackIcon}
                                alt="tabTextBlackIcon"
                              />
                            </strong>
                            <span>Text</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="website">
                            <strong>
                              <Image
                                className="gradientIcon"
                                src={tabWebsiteIcon}
                                alt="tabTextIcon"
                              />
                              <Image
                                className="blackIcon"
                                src={tabWebsiteBlackIcon}
                                alt="tabTextBlackIcon"
                              />
                            </strong>
                            <span>Website</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="q&a">
                            <strong>
                              <Image
                                className="gradientIcon"
                                src={tabQAIcon}
                                alt="tabTextIcon"
                              />
                              <Image
                                className="blackIcon"
                                src={tabQABlackIcon}
                                alt="tabTextBlackIcon"
                              />
                            </strong>
                            <span>Q&A</span>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="notion">
                            <strong>
                              <Image
                                className="gradientIcon"
                                src={tabNotionIcon}
                                alt="tabTextIcon"
                              />
                              <Image
                                className="blackIcon"
                                src={tabNotionBlackIcon}
                                alt="tabTextBlackIcon"
                              />
                            </strong>
                            <span>Notion</span>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col xl={7} lg={6}>
                      <Tab.Content>
                        <Tab.Pane eventKey="files">
                          <div className="tab_content">
                            <div className="title">
                              <h2>Files</h2>
                            </div>
                            <div className="content-wrapper">
                              <div className="dragfileWrapper">
                                <FormControl type="file"></FormControl>
                                <div className="dargText text-center">
                                  <Image src={uploadIcon} alt="uploadIcon" />
                                  <p>
                                    Drag & drop files here, or click to select
                                    files
                                    <br />
                                    Supported File Types: .pdf, .doc, .docx,
                                    .txt
                                  </p>
                                </div>
                              </div>
                              <h3 className="text-center">
                                If you are uploading a PDF, make sure you can
                                select/highlight the text.
                              </h3>
                              <div className="uploadFileWrapper">
                                <div className="borderWrap">
                                  <span>Attached Files</span>
                                </div>
                                <div className="uploadedFiles">
                                  <div className="fileName padding-20">
                                    <div className="">
                                      <h5>Help_Angular_Succinctly.pdf </h5>
                                      <p className="countChar mb-0">
                                        (1,287 chars)
                                      </p>
                                      <p className="successMessage mb-0">
                                        File uploaded successfully
                                      </p>
                                    </div>
                                    <button
                                      onClick={deleteShow}
                                      className="deleteBtn"
                                    >
                                      <Image
                                        src={deleteIcon}
                                        alt="deleteIcon"
                                      />
                                    </button>
                                  </div>
                                  <div className="fileName progreesBar padding-20 w-100">
                                    <div className="">
                                      <h5>Help_Angular_Succinctly.pdf </h5>
                                      <div className="d-flex justify-content-between">
                                        <div className="progress_percentage">
                                          <div className="d-flex justify-content-between">
                                            <p className="countChar mb-0">
                                              (1,287 chars)
                                            </p>
                                            <span>64%</span>
                                          </div>
                                          <ProgressBar
                                            variant="success"
                                            now={64}
                                          />
                                        </div>
                                        <button className="minusBtn">
                                          <Image
                                            src={minusCircle}
                                            alt="minusCircle"
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="text" className="">
                          <div className="tab_content textTab">
                            <div className="title">
                              <h2>Text</h2>
                            </div>
                            <div className="content-wrapper">
                              <Form.Control as="textarea" placeholder="data" />
                              <h3 className="text-center">
                              870 characters
                              </h3>
                              
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="website">
                          <div className="tab_content websiteTab">
                            <div className="title">
                              <h2>Website</h2>
                            </div>
                            <div className="content-wrapper">
                              <div className="websiteTab-content">
                                  <h4>Crawl</h4>
                                  <div className="position-relative link_btn">
                                    <Form.Control type="text" placeholder="https://selfsite.ai" />
                                    <button className="btnprimary">Fatch More link</button>
                                  </div>
                                  <div className="progress_percentage">
                                  <div className="d-flex justify-content-between">
                                    <p className="countChar mb-0">100%</p>
                                  </div>
                                  <ProgressBar variant="success" now={100} />
                                </div>
                              </div>
                              
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="q&a">
                          fourth tab content
                        </Tab.Pane>
                        <Tab.Pane eventKey="notion">fifth tab content</Tab.Pane>
                      </Tab.Content>
                    </Col>
                    <Col xl={3} lg={3}>
                      <div className="block-total text-center">
                        <h4>Sources</h4>
                        <h5>Total detected characters</h5>
                        <p>
                          <strong>0</strong>/300,000 limit
                        </p>
                        <button className="btnprimary" onClick={handleShow}>
                          Create Chatbot
                        </button>
                        <div className="progress_percentage">
                          <div className="d-flex justify-content-between">
                            <p className="countChar mb-0">20%</p>
                          </div>
                          <ProgressBar variant="success" now={20} />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showdelete && (
        <Delete
          title={"Delete source"}
          DatasourecsDesc_1={
            'Are you sure you want to delete "Help.pdf"? This action cannot be undone.'
          }
          DatasourecsDesc_2={
            "Make sure to retrain your siteagent after deleting a source!"
          }
          inputfield={false}
          show={deleteShow}
          hide={deleteClose}
        />
      )}

      {/* siateagentReadyModal Modal start  */}
        <Modal
          show={show}
          onHide={handleClose}
          keyboard={false}
          centered
          className="siateagentReadyModal"
        >
          <div className="iconWrapper text-center">
            <span>
              <Image src={circleTickGreenIcon} alt="circleTickGreenIcon" />
            </span>
          </div>
          <Modal.Header>
            <Modal.Title>Your siteagent is trained and ready</Modal.Title>
          </Modal.Header>
          <Modal.Body>You can now use your siteagent</Modal.Body>
          <Modal.Footer>
            <Button
              className="btnprimary"
              href={"/"}
              variant="secondary"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      {/* siateagentReadyModal Modal end  */}
    </>
  );
}
