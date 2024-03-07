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
import exportIcon from "../../assets/images/exportIcon.svg";
import yellowCard from "../../assets/images/connect-notion-modal.svg";
import tabChatBlackIcon from "../../assets/images/tabChatBlackIcon.svg";
import tabChatGradientIcon from "../../assets/images/tabChatGradientIcon.svg";
import tabLeadsBlackIcon from "../../assets/images/tabLeadsBlackIcon.svg";
import tabLeadsGradientIcon from "../../assets/images/tabLeadsGradientIcon.svg";
import tabAnalyticsBlackIcon from "../../assets/images/tabAnalyticsBlackIcon.svg";
import tabAnalyticsGradientIcon from "../../assets/images/tabAnalyticsGradientIcon.svg";

import Headertwo from "@/components/headertwo";
import 'bootstrap-daterangepicker/daterangepicker.css';
import "./style.scss";
import {
  Button,
  Col,
  Dropdown,
  Form,
  FormControl,
  Modal,
  Nav,
  ProgressBar,
  Row,
  Tab,
} from "react-bootstrap";
import Delete from "@/components/delete";
import DateRangePicker from "react-bootstrap-daterangepicker";

export default function Dashboardtab(props: any) {
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
      <div className="card-block dashboardTab">
        <div className="leftTabsWrapper">
          <Tab.Container id="left-tabs" defaultActiveKey="files">
            <Row>
              <Col sm={12}>
                <h1>Dashboard</h1>
              </Col>
            </Row>
            <Row>
              <Col xl={2} lg={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="files">
                      <strong>
                        <Image
                          className="gradientIcon"
                          src={tabChatGradientIcon}
                          alt="tabChatGradientIcon"
                        />
                        <Image
                          className="blackIcon"
                          src={tabChatBlackIcon}
                          alt="tabChatBlackIcon"
                        />
                      </strong>
                      <span>Chat Logs</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="text">
                      <strong>
                        <Image
                          className="gradientIcon"
                          src={tabLeadsGradientIcon}
                          alt="tabLeadsGradientIcon"
                        />
                        <Image
                          className="blackIcon"
                          src={tabLeadsBlackIcon}
                          alt="tabLeadsBlackIcon"
                        />
                      </strong>
                      <span>Leads</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="analytics">
                      <strong>
                        <Image
                          className="gradientIcon"
                          src={tabAnalyticsGradientIcon}
                          alt="tabAnalyticsGradientIcon"
                        />
                        <Image
                          className="blackIcon"
                          src={tabAnalyticsBlackIcon}
                          alt="tabAnalyticsBlackIcon"
                        />
                      </strong>
                      <span>Analytics</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col xl={10} lg={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="files">
                    <div className="tab_content">
                      <div className="title">
                        <h2>Chat Logs</h2>
                      </div>
                      <div className="content-wrapper">
                        <p>Filter</p>
                        <div className="content-wrapper-inner">
                          <div className="d-flex fieldsWrapper">
                            <Form.Control type="date" />
                            <Form.Select className="scoreField" aria-label="Default select example">
                              <option>Confidence Score</option>
                              <option>0.1</option>
                              <option value="1">0.2</option>
                              <option value="3">0.3</option>
                              <option value="4">0.4</option>
                              <option value="5">0.5</option>
                              <option value="6">0.6</option>
                              <option value="7">0.7</option>
                            </Form.Select>
                            <Dropdown className="sourceField">
                              <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                              >
                                Source
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <div className="selectCheck">
                                  <Form.Check 
                                    type='checkbox'
                                  />
                                  Widget or Iframe
                                </div>
                                <div className="selectCheck">
                                  <Form.Check 
                                    type='checkbox'
                                  />
                                  API
                                </div>
                                <div className="selectCheck">
                                  <Form.Check 
                                    type='checkbox'
                                  />
                                  Siteagent Site
                                </div>
                                <div className="selectCheck">
                                  <Form.Check 
                                    type='checkbox'
                                  />
                                  Whatsapp
                                </div>
                                <div className="selectCheck">
                                  <Form.Check 
                                    type='checkbox'
                                  />
                                  Slack
                                </div>
                                <div className="selectCheck">
                                  <Form.Check 
                                    type='checkbox'
                                  />
                                  Unspecified
                                </div>
                              </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown className="exportBtns">
                              <Dropdown.Toggle className="btnprimary" id="dropdown-basic1">
                                  Export <Image src={exportIcon} alt="exportIcon" />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <button>CSV</button>
                                <button>PDF</button>
                              </Dropdown.Menu>
                            </Dropdown>
                            {/* <button >
                              Export 
                            </button> */}
                          </div>
                        </div>
                        <div className="converationNotFound">
                          <h5>No conversations found</h5>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="text" className="leadsTab">
                  <div className="tab_content">
                      <div className="title">
                        <h2>Chat Logs</h2>
                      </div>
                      <div className="content-wrapper">
                        <p>Filter</p>
                        <div className="content-wrapper-inner">
                          <div className="d-flex fieldsWrapper">
                            <DateRangePicker
                              // initialSettings={{ startDate: '01/01/2020', endDate: '01/15/2020' }}
                            >
                              <input type="text" className="form-control" />
                            </DateRangePicker>
                            {/* <Dropdown className="sourceField">
                              <Dropdown.Toggle 
                                variant="success"
                                id="dropdown-basic"
                              >
                                Source
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <div className="selectCheck">
                                  <Form.Check 
                                    type='checkbox'
                                  />
                                  Widget or Iframe
                                </div>
                                <div className="selectCheck">
                                  <Form.Check 
                                    type='checkbox'
                                  />
                                  API
                                </div>
                                <div className="selectCheck">
                                  <Form.Check 
                                    type='checkbox'
                                  />
                                  Siteagent Site
                                </div>
                                <div className="selectCheck">
                                  <Form.Check 
                                    type='checkbox'
                                  />
                                  Whatsapp
                                </div>
                                <div className="selectCheck">
                                  <Form.Check 
                                    type='checkbox'
                                  />
                                  Slack
                                </div>
                                <div className="selectCheck">
                                  <Form.Check 
                                    type='checkbox'
                                  />
                                  Unspecified
                                </div>
                              </Dropdown.Menu>
                            </Dropdown> */}

                            <Dropdown className="exportBtns">
                              <Dropdown.Toggle className="btnprimary" id="dropdown-basic1">
                                  Export <Image src={exportIcon} alt="exportIcon" />
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <button>CSV</button>
                                <button>PDF</button>
                              </Dropdown.Menu>
                            </Dropdown>
                            {/* <button >
                              Export 
                            </button> */}
                          </div>
                        </div>
                        <div className="converationNotFound">
                          <h5>No customers found</h5>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="analytics">
                    <div className="tab_content analyticsTab">
                        <div className="analyticsContent">
                            <h4>Analytics are not available for your plan
                              Subscribe to see your analytics</h4>
                              <button className="btnprimary">Upgrade now</button>
                        </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              {/* <Col xl={3} lg={3}>
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
                  </Col> */}
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
      <Modal
        show={connectshow}
        className="connectNotionModal"
        onHide={connectNotionClose}
        centered
        size="lg"
        role="Connect Notion"
      >
        <Modal.Header closeButton>
          <div className="inr-yellow-card">
            <Image src={yellowCard} alt="yellowCard"></Image>
          </div>
          <Modal.Title>Connect Notion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>A Notion popup will now appear.</h6>
          <h6>Please don't unselect already selected pages.</h6>
          <p>
            Please note that the pages you select will affect the Notion pages
            Siteagent has access to across all your chatbots, as well as any
            other Siteagent accounts connected to the same Notion account.
          </p>
          <p>
            If you have any previously selected pages for other active
            Siteagent. Please leave them selected.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="close"
            onClick={connectNotionClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="btnprimary"
            onClick={connectNotionClose}
          >
            I understand
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Connect Notion Modal end */}
    </>
  );
}
