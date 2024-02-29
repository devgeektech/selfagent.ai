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

  const showdeletefun = () => {
    setShowDelete(true);
  };

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
                <Tab.Container id="left-tabs" defaultActiveKey="first">
                  <Row>
                    <Col xl={2} lg={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <Nav.Link eventKey="first">
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
                          <Nav.Link eventKey="second">
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
                          <Nav.Link eventKey="third">
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
                          <Nav.Link eventKey="fourth">
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
                          <Nav.Link eventKey="fifth">
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
                        <Tab.Pane eventKey="first">
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
                        <Tab.Pane eventKey="second">
                          Second tab content
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">third tab content</Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                          fourth tab content
                        </Tab.Pane>
                        <Tab.Pane eventKey="fifth">fifth tab content</Tab.Pane>
                      </Tab.Content>
                    </Col>
                    <Col xl={3} lg={3}>
                      <div className="block-total text-center">
                        <h4>Sources</h4>
                        <h5>Total detected characters</h5>
                        <p>
                          <strong>0</strong>/300,000 limit
                        </p>
                        <button className="btnprimary">Create Chatbot</button>
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
    </>
  );
}
