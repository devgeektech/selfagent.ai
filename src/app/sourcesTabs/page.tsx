"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Col, Nav, Row, Tab } from "react-bootstrap";
import Sourcecode from "@/components/tabsSources/page";
import Logo from "../../assets/images/logo.svg";
import "./style.scss";

export default function SourceTabs() {
  return (
    <div>
      <section className="main-top-bar">
        <div className="row mx-0">
          <div className="col-md-12 p-3">
            <div className="inr-topbar">
              <Link href="/">
                <Image src={Logo} alt="Logo" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="background-image-color">
        <div className="container">
          <div className="for-radius">
            <Tab.Container id="left-tabs" defaultActiveKey="Sources">
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
                        <Nav.Link eventKey="Embedonsite">
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
                    <Tab.Pane eventKey="Siteagent"></Tab.Pane>
                    <Tab.Pane eventKey="Settings"></Tab.Pane>
                    <Tab.Pane eventKey="Dashboard"></Tab.Pane>
                    <Tab.Pane eventKey="Sources">
                      <Sourcecode />
                    </Tab.Pane>
                    <Tab.Pane eventKey="Integrations"></Tab.Pane>
                    <Tab.Pane eventKey="Embedonsite"></Tab.Pane>
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
  );
}
