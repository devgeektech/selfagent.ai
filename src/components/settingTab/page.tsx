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
import connectNotion from "../../assets/images/Connect-Notion.svg";
import yellowCard from "../../assets/images/connect-notion-modal.svg";

import Headertwo from "@/components/headertwo";
import './style.scss';
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

export default function Settingtab(props: any) {
  const [showdelete, setShowDelete] = useState(false);
  const deleteClose = () => setShowDelete(false);
  const deleteShow = () => setShowDelete(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showquestion, setShowQuestion] = useState(false);
  const removeForm = () => setShowQuestion(false);
  const addForm = () => setShowQuestion(true);

  const [connectshow, connectsetShow] = useState(false);

  const connectNotionClose = () => connectsetShow(false);
  const connectNotionShow = () => connectsetShow(true);

  return (
    <>
      {/* <div className="dataSourecsPage">
        <div className="innerpage"> */}
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
                                  Drag & drop files here, or click to select files
                                  <br />
                                  Supported File Types: .pdf, .doc, .docx, .txt
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
                                    <p className="countChar mb-0">(1,287 chars)</p>
                                    <p className="successMessage mb-0">
                                      File uploaded successfully
                                    </p>
                                  </div>
                                  <button
                                    onClick={deleteShow}
                                    className="deleteBtn"
                                  >
                                    <Image src={deleteIcon} alt="deleteIcon" />
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
                                        <ProgressBar variant="success" now={64} />
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
                            <h3 className="text-center">870 characters</h3>
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
                                <Form.Control
                                  type="text"
                                  placeholder="https://selfsite.ai"
                                />
                                <button className="btnprimary">
                                  Fatch More link
                                </button>
                              </div>
                              <div className="progress_percentage   my-3">
                                <div className="d-flex justify-content-between mb-1">
                                  <p className="countChar mb-0">100%</p>
                                </div>
                                <ProgressBar
                                  variant="dark"
                                  now={100}
                                  className="custom-progress"
                                />
                              </div>
                              <div className="progress-btm-desc">
                                <p>
                                  This will crawl all the links starting with the
                                  URL (not including files on the website).
                                </p>
                              </div>
                              <div className="crawl-and-or">
                                <p>OR</p>
                              </div>
                              <h4>Submit Sitemap</h4>
                              <div className="position-relative link_btn">
                                <Form.Control
                                  type="text"
                                  placeholder="https://www.example.com/sitemap.xml"
                                />
                                <button className="btnprimary">
                                  Load additional sitemap
                                </button>
                              </div>
                              <div className="crawl-and-or">
                                <p>Included Links</p>
                              </div>
                              <div className="include-links-deletes">
                                <div className="delete-all text-end">
                                  <Button onClick={deleteShow}>Delete all</Button>
                                </div>
                                {/* includes links row */}
                                <div className="d-flex justify-content-start align-items-center gap-3 mb-3">
                                  <Form.Control
                                    type="text"
                                    placeholder="https://www.example.com/sitemap.xml"
                                  />
                                  <span>3961</span>
                                  <button
                                    onClick={deleteShow}
                                    className="deleteBtn"
                                  >
                                    <Image src={deleteIcon} alt="deleteIcon" />
                                  </button>
                                </div>
                                <div className="d-flex justify-content-start align-items-center gap-3 mb-3">
                                  <Form.Control
                                    type="text"
                                    placeholder="https://www.example.com/sitemap.xml"
                                  />
                                  <span>3961</span>
                                  <button
                                    onClick={deleteShow}
                                    className="deleteBtn"
                                  >
                                    <Image src={deleteIcon} alt="deleteIcon" />
                                  </button>
                                </div>
                                {/* end includes links row */}
                              </div>
                              <div className="Add_btn-Btm text-end">
                                <Button>Add</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="q&a">
                        <div className="tab_content websiteTab">
                          <div className="title">
                            <h2>Q&A</h2>
                          </div>
                          <div className="content-wrapper">
                            <div className="q-and-a-inr-data">
                              <div className="Add-btn-Btm text-center">
                                <Button onClick={addForm}>Add</Button>
                              </div>
                            </div>
                            <div
                              className={`main-add-form ${
                                showquestion ? "show" : ""
                              }`}
                              onClick={removeForm}
                            >
                              <div className="text-end">
                                <Button className="delete-Btn">Delete all</Button>
                              </div>
                              <div className="inr-add-form">
                                <Form>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                  >
                                    <Form.Label className="justify-content-between w-100 d-flex align-items-center">
                                      Question
                                      <button
                                        onClick={deleteShow}
                                        className="deleteBtn"
                                      >
                                        <Image src={deleteIcon} alt="deleteIcon" />
                                      </button>
                                    </Form.Label>
                                    <Form.Control type="text" />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                  >
                                    <Form.Label>Answer</Form.Label>
                                    <Form.Control as="textarea" rows={6} />
                                  </Form.Group>
                                </Form>
                              </div>
                              <div className="text-end">
                                <Button className="btnprimary">Save</Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="notion">
                        <div className="tab_content websiteTab">
                          <div className="title">
                            <h2>Q&A</h2>
                          </div>
                          <div className="content-wrapper">
                            <div className="q-and-a-inr-data">
                              <div className="connect-notion text-center">
                                <Button onClick={connectNotionShow}>
                                  <Image src={connectNotion} alt="connectNotion" />
                                  Connect Notion
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
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
        {/* </div>
      </div> */}

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

      {/* Connect Notion Modal start */}
      <Modal show={connectshow} className="connectNotionModal" onHide={connectNotionClose} centered size="lg" role="Connect Notion"> 
        <Modal.Header closeButton>
          <div className="inr-yellow-card">
            <Image src={yellowCard} alt="yellowCard"></Image>
          </div>
          <Modal.Title>Connect Notion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>A Notion popup will now appear.</h6>
          <h6>Please don't unselect already selected pages.</h6>
          <p>Please note that the pages you select will affect the Notion pages Siteagent has access to across all your chatbots, as well as any other Siteagent accounts connected to the same Notion account.</p>
          <p>If you have any previously selected pages for other active Siteagent. Please leave them selected.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className="close" onClick={connectNotionClose}>
          Cancel
          </Button>
          <Button variant="primary" className="btnprimary" onClick={connectNotionClose}>
          I understand
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Connect Notion Modal end */}


    </>
  );
}
