"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Col, Modal, Nav, Row, Tab } from "react-bootstrap";
import Sourcecode from "@/components/tabsSources/page";
import Logo from "../../assets/images/logo.svg";
import "./style.scss";
import Siteagenttab from "@/components/siteagentTab";
import Settingtab from "@/components/settingTab/page";
import Dashboardtab from "@/components/dashboardTab/page";
import Headertwo from "@/components/headertwo";
import Integrationtab from "@/components/integrationTab/page";
import Embedtab from "@/components/embedTab/page";

export default function Siteagent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div>
      <Headertwo/>
      <div className="background-image-color">
        <div className="container">
          <div className="for-radius">
            <Tab.Container id="left-tabs" defaultActiveKey="Siteagent">
              <div className="top-tabs-main">
                <Row>
                  <Col xl={12} lg={12}>
                    <Nav variant="tabs" className="flex-row w-100">
                      <Nav.Item>
                        <Nav.Link eventKey="Siteagent">Siteagent</Nav.Link>
                        <Nav.Link eventKey="Settings">Settings</Nav.Link>
                        <Nav.Link eventKey="Dashboard">Dashboard</Nav.Link>
                        <Nav.Link eventKey="Sources">Sources</Nav.Link>
                        <Nav.Link eventKey="Integrations">
                          Integrations
                        </Nav.Link>
                        <Nav.Link eventKey="Embedonsite"  onClick={handleShow}>
                          Embed on site
                        </Nav.Link>
                        <Nav.Link eventKey="Share">Share</Nav.Link>
                        <Nav.Link eventKey="Delete">Delete</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>
              </div>
              <Col xl={12} lg={12} bg="white">
                <div className="for-tabs-bg">
                  <Tab.Content>
                    <Tab.Pane eventKey="Siteagent">
                      <Siteagenttab/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Settings">
                      <Settingtab/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Dashboard">
                      <Dashboardtab/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Sources">
                      <Sourcecode />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Integrations">
                      <Integrationtab/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Embedonsite">
                      <Embedtab/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Share"></Tab.Pane>
                    <Tab.Pane eventKey="Delete"></Tab.Pane>
                  </Tab.Content>
                </div>
              </Col>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>

          {/* modal Html Start */}
          <Modal
          show={show}
          // onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              www.Siteagent.ai
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>To add the chatbot any where on your website, add this iframe to your html code</p>
            <p className="iframe">
              <code>
            <iframe
              src="https://www.siteagent.ai/chatbot-iframe/bo7UCgTiHMHnJWpZYhou3"
              width="100%"
              // style="height: 100%; min-height: 700px"
              frameBorder="0">
              </iframe>
              </code>

            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
          {/* modal Html End */}

    </>    
  );
}
