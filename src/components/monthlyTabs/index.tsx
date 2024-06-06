"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./style.scss";
import cricleTick from "../../assets/images/cricleTick.svg";
import freeIcon from "../../assets/images/freeIcon.svg";
import startPlanImg from "../../assets/images/startPlanImg.svg";
import standardPlanImg from "../../assets/images/standardPlanImg.svg";
import proPlanImg from "../../assets/images/proPlanImg.svg";
import Link from "next/link";
import { Button, Form, Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArrowIcon from "@/app/icons/ArrowIcon";


function Monthlytabs() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="monthly_wrapper_Tabs">
        <div className="btm-price-grid">
          <div className="topbar">
         <button className="freePlanBtn"  data-aos="fade-right" data-aos-duration="500"><span>Free plan</span></button>
          </div>
          <div className="price_block free_block price_block starter_block">
          
            <div className="for-lft leftSide" >
              <div  data-aos="fade-right" data-aos-duration="500">
                <div className="d-flex planName" >
                  <div className="planImg">
                    <Image src={freeIcon} alt='freeIcon'/>
                  </div>
                  <div className="d-flex flex-column">
                    <p className="mb-1">Plan name</p>
                    <h4>Free</h4>
                  </div>
                </div>
                <p className="limit">Limited to websites with no more than 20 pages total</p>
              </div>
              <div className="priceMonth"  data-aos="fade-right" data-aos-duration="500">
                  <h1>$0<span>/Month</span></h1>
              </div>
       
              </div>
           
           
            <div className="for-ryt rightSide">
           
              <ul  data-aos="fade-left" data-aos-duration="500">
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  1 initial scan (no monthly recurring scan)
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  400 messages per month
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  No analytics
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  No Capture Contact
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  No CRM integration
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  Unlimited Website Deployment
                </li>
              </ul>
              <Button className="btnprimary btnget w-100"  data-aos="fade-left" data-aos-duration="500">Get Started<ArrowIcon/></Button>
             
            </div>
           
          </div>
          
        </div>
        <div className="price-grid">
          {/* <div className="price_block free_block">
            <h4 className="text-start">Free</h4>
            <div className="priceBoxs text-start">
              <h2>
                $0<span>/month</span>
              </h2>
              <p>
                limited to websites with no more than 20 pages total 1 initial
                scan (no monthly recurring scan) 400 messages per month
              </p>
            </div>
            <hr></hr>
            <ul>
              <li>
                <Image src={cricleTick} alt="cricleTick" />
                No analytics
              </li>
              <li>
                <Image src={cricleTick} alt="cricleTick" />
                No Capture Contact
              </li>
              <li>
                <Image src={cricleTick} alt="cricleTick" />
                No CRM integration
              </li>
              <li>
                <Image src={cricleTick} alt="cricleTick" />
                Unlimited Website Deployment
              </li>
            </ul>
            <Button className="btnprimary btnget w-100">Get Started</Button>
          </div> */}
           
          <div className="price_block free_block price_block starter_block"  data-aos="fade-up" data-aos-duration="500">
            <div className="for-off topBarWrap">
              <button className="discountBtn"  data-aos="fade-right" data-aos-duration="500"><span>50% Off</span></button>
            </div>
            <div className="planWrapper">
                <div className="d-flex planName"  data-aos="fade-right" data-aos-duration="500">
                      <div className="planImg">
                        <Image src={startPlanImg} alt='startPlanImg'/>
                      </div>
                      <div className="d-flex flex-column">
                        <p className="mb-1">Plan name</p>
                        <h4>Starter</h4>
                      </div>
                    </div>
                <div className="title_para"  data-aos="fade-right" data-aos-duration="500">
                  <h3>20 pages per site</h3>
                  <p>
                    1 scan per month *SiteAgent scans your entire site and digests
                    all content for easy retrieval of information for your
                    customers. The AI needs to re-scan the site if additional items
                    or info is added to your site.{" "}
                  </p>
                </div>
                <div className="priceBoxs text-start"  data-aos="fade-right" data-aos-duration="500">
                  <h2>
                    <strong className="offerDis"></strong>$20<span>/month</span>
                  </h2>
                
                <h3>What’s included</h3>
                </div>
                <ul  data-aos="fade-right" data-aos-duration="500">
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    10K messages
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    Analytics
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    CRM integration
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    Unlimited Website Deployment
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    $0.03 Per Additional Message
                  </li>
                </ul>
                <Button className="btnprimary btnget w-100"  data-aos="zoom-in" data-aos-duration="500">Get Started</Button>
            </div>
           
          </div>
       
         
          <div className="price_block free_block price_block professional_block standardPlan"  data-aos="fade-up" data-aos-duration="600">
            <div className="for-off topBarWrap">
              <button className="discountBtn"  data-aos="fade-right" data-aos-duration="500"><span>50% Off</span></button>
            </div>
            <div className="planWrapper">
                <div className="d-flex planName"  data-aos="fade-right" data-aos-duration="500">
                      <div className="planImg">
                        <Image src={standardPlanImg} alt='standardPlanImg'/>
                      </div>
                      <div className="d-flex flex-column">
                        <p className="mb-1">Plan name</p>
                        <h4>Standard</h4>
                      </div>
                    </div>
                <div className="title_para"  data-aos="fade-right" data-aos-duration="500">
                  <h3>80 pages per site</h3>
                  <p>
                    2 scans per month *SiteAgent scans your entire site and digests all content for easy retrieval of information for your customers. The AI needs to re-scan the site if additional items or info is added to your site.
                  </p>
                </div>
                <div className="priceBoxs text-start"  data-aos="fade-right" data-aos-duration="500">
                  <h2>
                    <strong className="offerDis"></strong>$49.50<span>/month</span>
                  </h2>
                
                <h3>What’s included</h3>
                </div>
                <ul  data-aos="fade-right" data-aos-duration="500">
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    30K messages
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    Analytics
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    CRM integration
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    Unlimited Website Deployment
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    $0.03 Per Additional Message
                  </li>
                </ul>
                <Button className="btnprimary btnget w-100"  data-aos="zoom-in" data-aos-duration="500">Get Started <ArrowIcon/></Button>
            </div>
          </div>
         
       
          <div className="price_block free_block price_block starter_block"  data-aos="fade-up" data-aos-duration="500">
            <div className="for-off topBarWrap">
              <button className="discountBtn"  data-aos="fade-right" data-aos-duration="1000"><span>50% Off</span></button>
            </div>
            <div className="planWrapper">
                <div className="d-flex planName"  data-aos="fade-right" data-aos-duration="500">
                      <div className="planImg">
                        <Image src={proPlanImg} alt='proPlanImg'/>
                      </div>
                      <div className="d-flex flex-column">
                        <p className="mb-1">Plan name</p>
                        <h4>Pro</h4>
                      </div>
                    </div>
                <div className="title_para"  data-aos="fade-right" data-aos-duration="500">
                  <h3>200 pages per site</h3>
                  <p>
                    4 scans per month *SiteAgent scans your entire site and digests all content for easy retrieval of information for your customers. The AI needs to re-scan the site if additional items or info is added to your site.
                  </p>
                </div>
                <div className="priceBoxs text-start"  data-aos="fade-right" data-aos-duration="500">
                  <h2>
                    <strong className="offerDis"></strong>$249.50<span>/month</span>
                  </h2>
               
                <h3>What’s included</h3>
                </div>
                <ul  data-aos="fade-right" data-aos-duration="500">
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    50K messages
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    500 captured contact
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    Analytics
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    Remove “Powered by SiteAgent.AI”
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    Customize logo
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    CRM integration
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    Unlimited Website Deployment
                  </li>
                  <li>
                    <Image src={cricleTick} alt="cricleTick" />
                    $0.02 Per Additional Message
                  </li>
                </ul>
                <Button className="btnprimary btnget w-100"  data-aos="zoom-in" data-aos-duration="500">Get Started <ArrowIcon/></Button>
            </div>
          </div>
         
        </div>
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

export default Monthlytabs;
