"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Col, Modal, Nav, Row, Tab } from "react-bootstrap";
import Sourcecode from "@/components/tabsSources/page";
import closeIcon from "../../assets/images/closeIcon.svg";
import copyIcon from "../../assets/images/copyIcon.svg";
import visitIcon from "../../assets/images/visitIcon.svg";
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

  const [showshare, setShowShare] = useState(false);
  const handleCloseShare = () => setShowShare(false);
  const handleShowShare = () => setShowShare(true);

  return (
    <>
      <div>
        <Headertwo />
        <div className="background-image-color">
          <div className="container">
            <div className="for-radius">
              <Tab.Container id="left-tabs" defaultActiveKey="Settings">
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
                          <Nav.Link eventKey="Embedonsite" onClick={handleShow}>
                            Embed on site
                          </Nav.Link>
                          <Nav.Link eventKey="Share" onClick={handleShowShare}>Share</Nav.Link>
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
                        <Siteagenttab />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Settings">
                        <Settingtab />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Dashboard">
                        <Dashboardtab />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Sources">
                        <Sourcecode />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Integrations">
                        <Integrationtab />
                      </Tab.Pane>
                      <Tab.Pane eventKey="Embedonsite">
                        <Embedtab />
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
        className="iframeModal"
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            www.Siteagent.ai
          </Modal.Title>
          <button className="crossBtn" onClick={handleClose}>
            <Image src={closeIcon} alt="closeIcon" />
          </button>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">
            To add the chatbot any where on your website, add this iframe to
            your html code
          </p>
          <div className="iframe">
            <pre>
            <code>
           
            &lt;iframe
               src="https://www.siteagent.ai/chatbot-iframe/bo7UCgTiHMHnJWpZYhou3"
               width="100%" 
               frameBorder="0"&gt;
               &lt;/iframe&gt;
              </code>
              </pre>
          </div>
          <div className="d-flex justify-content-center">
            <button>
              Copy Iframe <Image src={copyIcon} alt="copyIcon" />
            </button>
          </div>
          <p className="mb-0">
            To add a chat bubble to the bottom right of your website add this
            script tag to your html
          </p>
          <div className="iframe">
          <pre>
            <code>
            &lt;script&gt;
            window.embeddedChatbotConfig = {
            `chatbotId: "bo7UCgTiHMHnJWpZYhou3",
              domain: "www.siteagent.ai"`
              }
              &lt;/script&gt; <br/><br/>
              &lt;script
              src="https://www.siteagent.ai/embed.min.js"
              chatbotId="bo7UCgTiHMHnJWpZYhou3"
              domain="www.siteagent.ai"
              defer&gt;
              &lt;/script&gt;
            </code>
            </pre>
          </div>
          <div className="d-flex justify-content-center">
            <button>
              Copy Script <Image src={copyIcon} alt="copyIcon" />
            </button>
          </div>
        </Modal.Body>
      </Modal>
      {/* modal Html End */}


      {/* ShareSite  modal Html Start */}
      <Modal
        className="iframeModal"
        show={showshare}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            www.Siteagent.ai
          </Modal.Title>
          <button className="crossBtn" onClick={handleCloseShare}>
            <Image src={closeIcon} alt="closeIcon" />
          </button>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">
            To add the chatbot any where on your website, add this iframe to
            your html code
          </p>
          <div className="iframe">
            <pre>
            <code>
           
            https://www.siteagent.ai/chatbot-iframe/bo7UCgTiHMHnJWpZYhou3
            </code>
            </pre>
          </div>
          <div className="d-flex justify-content-center btns">
            <button>
              Copy  <Image src={copyIcon} alt="copyIcon" />
            </button>
            <button>
              Visit <Image src={visitIcon} alt="visitIcon" />
            </button>
          </div>
        </Modal.Body>
      </Modal>
      {/* ShareSite modal Html End */}

    </>
  );
}
