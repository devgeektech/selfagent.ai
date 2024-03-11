"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import minusCircle from "../../assets/images/minusCircle.svg";
import deleteIcon from "../../assets/images/deleteIcon.png";
import tabSettingGradientIcon from "../../assets/images/tabSettingGradientIcon.png";
import tabSettingBlackIcon from "../../assets/images/tabSettingBlackIcon.png";
import tabTextBlackIcon from "../../assets/images/tabTextBlackIcon.png";
import tabTextIcon from "../../assets/images/tabTextIcon.png";
import tabChatGradientIcon from "../../assets/images/tabChatGradientIcon.png";
import tabChatBlackIcon from "../../assets/images/tabChatBlackIcon.png";
import tabSecurityGradientIcon from "../../assets/images/tabSecurityGradientIcon.png";
import tabSecurityBlackIcon from "../../assets/images/tabSecurityBlackIcon.png";
import tabLeadsGradientIcon from "../../assets/images/tabLeadsGradientIcon.png";
import tabLeadsBlackIcon from "../../assets/images/tabLeadsBlackIcon.png";
import tabNotificationBlackIcon from "../../assets/images/tabNotificationBlackIcon.png";
import tabNotificationGradientIcon from "../../assets/images/tabNotificationGradientIcon.png";
import tabWebhookGradientIcon from "../../assets/images/tabWebhookGradientIcon.png";
import tabWebhookBlackIcon from "../../assets/images/tabWebhookBlackIcon.png";
import tabWebsiteIcon from "../../assets/images/tabWebsiteIcon.png";
import tabWebsiteBlackIcon from "../../assets/images/tabWebsiteBlackIcon.png";
import uploadIcon from "../../assets/images/uploadIcon.svg";
import circleTickGreenIcon from "../../assets/images/circleTickGreenIcon.svg";
import connectNotion from "../../assets/images/Connect-Notion.svg";
import yellowCard from "../../assets/images/connect-notion-modal.svg";


import Genraltab from "@/components/settingTab/generalTab";

import "./style.scss";
import {
  Button,
  Col,
  Form,
  Modal,
  Nav,
  ProgressBar,
  Row,
  Tab,
} from "react-bootstrap";
import Delete from "@/components/delete";
import Modaltab from "./modalTab";
import Notificationtab from "./notificationTab";
import Webhookstab from "./webhooksTab";
import Domaintab from "./domaintab";
import Leadstab from "./leadsTab";
import Securitytab from "./securityTab";
import Chatinterfacetab from "./chatInterfaceTab";

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
      <div className="settingTab">
        <div className="card-block">
          <div className="leftTabsWrapper">
            <Tab.Container id="left-tabs" defaultActiveKey="Chat">
              <Row>
                <Col xl={2} lg={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="General">
                        <strong>
                          <Image
                            className="gradientIcon"
                            src={tabSettingGradientIcon}
                            alt="tabSettingGradientIcon"
                          />
                          <Image
                            className="blackIcon"
                            src={tabSettingBlackIcon}
                            alt="tabSettingBlackIcon"
                          />
                        </strong>
                        <span>General</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Model">
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
                        <span>Model</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Chat">
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
                        <span>Chat Interface</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Security">
                        <strong>
                          <Image
                            className="gradientIcon"
                            src={tabSecurityGradientIcon}
                            alt="tabSecurityGradientIcon"
                          />
                          <Image
                            className="blackIcon"
                            src={tabSecurityBlackIcon}
                            alt="tabSecurityBlackIcon"
                          />
                        </strong>
                        <span>Security</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Leads">
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
                      <Nav.Link eventKey="Notifications">
                        <strong>
                          <Image
                            className="gradientIcon"
                            src={tabNotificationGradientIcon}
                            alt="tabNotificationGradientIcon"
                          />
                          <Image
                            className="blackIcon"
                            src={tabNotificationBlackIcon}
                            alt="tabNotificationBlackIcon"
                          />
                        </strong>
                        <span>Notifications</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Webhooks">
                        <strong>
                          <Image
                            className="gradientIcon"
                            src={tabWebhookGradientIcon}
                            alt="tabWebhookGradientIcon"
                          />
                          <Image
                            className="blackIcon"
                            src={tabWebhookBlackIcon}
                            alt="tabWebhookBlackIcon"
                          />
                        </strong>
                        <span>Webhooks</span>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Domains">
                        <strong>
                          <Image
                            className="gradientIcon"
                            src={tabWebsiteIcon}
                            alt="tabWebsiteIcon"
                          />
                          <Image
                            className="blackIcon"
                            src={tabWebsiteBlackIcon}
                            alt="tabWebsiteBlackIcon"
                          />
                        </strong>
                        <span>Domains</span>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col xl={10} lg={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="General">
                      <Genraltab/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Model" className="">
                      <Modaltab/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Chat">
                      <Chatinterfacetab/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Security">
                      <Securitytab/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Leads">
                      <Leadstab/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Notifications">
                      <Notificationtab/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Webhooks">
                      <Webhookstab/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Domains">
                        <Domaintab/>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
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
