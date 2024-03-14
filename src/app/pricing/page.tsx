"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import deanLogo from "../../assets/images/dean-logo.png";
import EstateSkillslogo from "../../assets/images/Estate-Skills-logo.png";
import BallpointMarketing from "../../assets/images/Ballpoint-marketing.png";
import WholesalingIncLogo from "../../assets/images/Wholesaling-inc-logo.png";
import starIcon from "../../assets/images/starIcon.svg";
import userIcon from "../../assets/images/userIcon.png";
import userIcon_2 from "../../assets/images/userIcon_2.png";
import userIcon_3 from "../../assets/images/userIcon_3.png";
import userIcon_4 from "../../assets/images/userIcon_4.png";
import arrowAngle from "../../assets/images/arrowAngle.svg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";

import "./style.scss";
import {
  Accordion,
  Button,
  Col,
  Form,
  Modal,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
// import Monthlytab from "@/components/monthlytab";
import Yearlytab from "@/components/yearlytab";
import Monthlytabs from "@/components/monthlyTabs";

export default function Pricing() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="PricePage">
        {/* banner Html start  */}
        <div className="priceBanner">
          <div className="container">
            <div className="col-sm-12">
              <div className="priceBannerContent">
                <h1>
                  Get started for free We offer non-branded solution for
                  Enterprises and Agencies. For more detail please
                  <button onClick={handleShow}>
                    <span>Contact Us</span>
                  </button>
                </h1>
                <div className="breadcrumb">
                  <ul>
                    <li>
                      <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                      <span>Pricing Plans</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner Html end  */}
        {/* price section Html start */}
        <section className="price_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="price_content text-center">
                  <h2>
                    Pricing plans for teams
                    <br /> of all sizes
                  </h2>
                  <p>
                    Shopify websites get 50% off for the next 30 days for all
                    tiers! (purchased through Shopify store)
                    <br /> All tiers get 3 months free when paid annually.
                  </p>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="price_wrapper">
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="monthly"
                  >
                    <Row>
                      <Col sm={12}>
                        <div className="price_tab_buttons d-flex justify-content-center align-items-center">
                          <Nav variant="pills">
                            <Nav.Item>
                              <Nav.Link eventKey="monthly">Monthly </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="yearly">Yearly</Nav.Link>
                              <span className="disPer">
                                <Image src={arrowAngle} alt="arrowAngle" />
                                Save 20% OFF
                              </span>
                            </Nav.Item>
                          </Nav>
                        </div>
                      </Col>
                      <Col sm={12}>
                        <div className="price_tab_content">
                          <Tab.Content>
                            <Tab.Pane eventKey="monthly">
                              <Monthlytabs />
                            </Tab.Pane>
                            <Tab.Pane eventKey="yearly">
                              <Monthlytabs />
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* price section Html end */}
        {/* trusted by html start */}
        <section className="trusted_section text-center">
          <div className="container">
            <div className="row">
              <div className="col-m-12">
                <h2>Trusted By Industry Leaders</h2>
                <ul>
                  <li>
                    <Image src={deanLogo} alt="dean-logo" />
                  </li>
                  <li>
                    <Image src={EstateSkillslogo} alt="dean-logo" />
                  </li>
                  <li>
                    <Image src={BallpointMarketing} alt="dean-logo" />
                  </li>
                  <li>
                    <Image src={deanLogo} alt="dean-logo" />
                  </li>
                  <li>
                    <Image src={WholesalingIncLogo} alt="WholesalingIncLogo" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* trusted by html end */}
        {/* faq section html start */}
        <section className="faq_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="text-center">Frequently Asked Questions</h2>
                <div className="faq_wrapper">
                  <Accordion defaultActiveKey="0" flush>
                    <div className="row">
                      <div className="col-sm-6">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Do I need Podio? </Accordion.Header>
                          <Accordion.Body>
                            Absolutely not! REsimpli is 100% Podio-free. We
                            wouldn’t even touch Podio with a 10 foot pole.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            How is REsimpli different from other software?{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>
                            How long does it take to set up REsimpli?{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>
                            How long does it take to set up REsimpli?{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          <Accordion.Header>
                            How long does it take to set up REsimpli?{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                          <Accordion.Header>
                            How long does it take to set up REsimpli?{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                          <Accordion.Header>
                            How long does it take to set up REsimpli?{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                      </div>
                      <div className="col-sm-6">
                        <Accordion.Item eventKey="7">
                          <Accordion.Header>
                            How long does it take to set up REsimpli?{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                          <Accordion.Header>
                            How long does it take to set up REsimpli?{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                          <Accordion.Header>
                            How long does it take to set up REsimpli?{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="10">
                          <Accordion.Header>
                            How long does it take to set up REsimpli?{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="11">
                          <Accordion.Header>
                            How long does it take to set up REsimpli?{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="12">
                          <Accordion.Header>
                            How long does it take to set up REsimpli?{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </Accordion.Body>
                        </Accordion.Item>
                      </div>
                    </div>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* faq section html end */}
        <section className="slider_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>
                  <span>WHAT PEOPLE ARE SAYING</span>
                </h2>
                <p className="sliderDesc">
                  Site Agent is the easiest way to create a AI Agent for your
                  website. Don't take our word for it! Here's what people are
                  saying.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="swiperSliderWrapper">
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    slidesPerView={3}
                    spaceBetween={20}
                    className="mySwiper"
                    breakpoints={{
                      // when window width is >= 640px
                      100: {
                        slidesPerView: 1,
                      },
                      // when window width is >= 768px
                      768: {
                        width: 768,
                        slidesPerView: 3,
                        spaceBetween: "10px",
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: "20px",
                      },
                      1920: {
                        slidesPerView: 3,
                        spaceBetween: "20px",
                      },
                    }}
                  >
                    <SwiperSlide>
                      <div className="swiperSlide">
                        <ul>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                        </ul>
                        <div className="slideDesc">
                          <p>
                            Since integrating SiteAgent into our website,
                            customer engagement has skyrocketed. It’s like
                            having a 24/7 digital concierge that truly
                            understands our visitors’ needs. A game-changer for
                            our online business!
                          </p>
                        </div>
                        <div className="userInfo">
                          <div className="userImg">
                            <Image src={userIcon} alt="userIcon" />
                          </div>
                          <div className="name_designation">
                            <h5>Emma Ava</h5>
                            <p>VP @ Meta</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiperSlide">
                        <ul>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                        </ul>
                        <div className="slideDesc">
                          <p>
                            I was blown away by how seamless it was to customize
                            SiteAgent to match our brand’s voice and style. It
                            not only looks like an integral part of our site but
                            also interacts in a way that feels incredibly
                            natural and helpful.
                          </p>
                        </div>
                        <div className="userInfo">
                          <div className="userImg">
                            <Image src={userIcon_2} alt="userIcon_2" />
                          </div>
                          <div className="name_designation">
                            <h5>Inaya Maeve</h5>
                            <p>CMO @ uniliver</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiperSlide">
                        <ul>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                        </ul>
                        <div className="slideDesc">
                          <p>
                            Our support team has been able to focus on more
                            complex issues since SiteAgent took over routine
                            inquiries. It’s impressively intuitive, handling
                            questions with the kind of precision and
                            friendliness we didn’t think was possible from AI.
                          </p>
                        </div>
                        <div className="userInfo">
                          <div className="userImg">
                            <Image src={userIcon_3} alt="userIcon_3" />
                          </div>
                          <div className="name_designation">
                            <h5>Luna Iris</h5>
                            <p>SVP @ Shopify</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiperSlide">
                        <ul>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                          <li>
                            <Image src={starIcon} alt="starIcon" />
                          </li>
                        </ul>
                        <div className="slideDesc">
                          <p>
                            Implementing SiteAgent was a breeze, and the results
                            have been phenomenal. The personalized interactions
                            have significantly improved our conversion rates.
                            It’s truly set a new standard for customer service
                            on our site.
                          </p>
                        </div>
                        <div className="userInfo">
                          <div className="userImg">
                            <Image src={userIcon_4} alt="userIcon_4" />
                          </div>
                          <div className="name_designation">
                            <h5>Jream Arlet</h5>
                            <p>SVP @ Shopify</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Modal Start */}
      <Modal show={show} onHide={handleClose} centered className="contactusModal">
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button  variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button className="btnprimary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* Modal End */}
    </>
  );
}
