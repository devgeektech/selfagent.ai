"use client";
import Image from "next/image";
import React from "react";
import arrowRightWhiteIcon from "../assets/images/arrowRightWhiteIcon.svg";
import playBtnIcon from "../assets/images/playBtnIcon.svg";
import arrowRight from "../assets/images/arrowRight.svg";
import bannerVideo from "../assets/images/bannerVideo.jpg";
import blockOne from "../assets/images/blockOne.png";
import blockTwo from "../assets/images/blockTwo.png";
import blockThree from "../assets/images/blockThree.png";
import blockFour from "../assets/images/blockFour.png";
import blockFive from "../assets/images/blockFive.png";
import blockSix from "../assets/images/blockSix.png";
import availabilityGradientIcon from "../assets/images/availabilityGradientIcon.svg";
import availabilityWhiteIcon from "../assets/images/availabilityWhiteIcon.svg";
import personalizeGradientIcon from "../assets/images/personalizeGradientIcon.svg";
import personalizeWhiteIcon from "../assets/images/personalizeWhiteIcon.svg";
import chatGradientIcon from "../assets/images/chatGradientIcon.svg";
import chatWhiteIcon from "../assets/images/chatWhiteIcon.svg";
import IntelligentGradientIcon from "../assets/images/IntelligentGradientIcon.svg";
import IntelligentWhiteIcon from "../assets/images/IntelligentWhiteIcon.svg";
import IntegrationGradientIcon from "../assets/images/IntegrationGradientIcon.svg";
import IntegrationWhiteIcon from "../assets/images/IntegrationWhiteIcon.svg";
import supportImg from "../assets/images/supportImg.png";
import generationImg from "../assets/images/generationImg.png";
import engageImg from "../assets/images/engageImg.png";
import chatbotsImg from "../assets/images/chatbotsImg.png";
import integrationImg from "../assets/images/integrationImg.png";
import integrationImgMobile from "../assets/images/integrationImgMobile.png";
import userIcon from "../assets/images/userIcon.png";
import starIcon from "../assets/images/starIcon.svg";
import { Button, Form, Tab, Tabs } from "react-bootstrap";
import "./style.scss";
import Link from "next/link";
import Embedwebsitetab from "@/components/Embedwebsitetab";
import Behaviorappearancetab from "@/components/behaviorappearancetab";
import Importyourdatatab from "@/components/Importyourdatatab";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css/navigation';
import "swiper/css";
import { Navigation } from "swiper/modules";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

export default function () {
  return (
    <div className="homePage">
      <section className="smartAi_section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="banner_text">
                <h1>Smart AI Agent for your website</h1>
                <h5>
                  Chatting and Engaging with Your Customers Just Like a Live
                  Customer Service Agent.
                </h5>
                <p>
                  Powered by AI, SiteAgent masters your business details to
                  offer live voice interactions, guiding customers to exactly
                  what they need
                </p>
                <div className="d-flex mt-4">
                  <button className="btnprimary chatbotBtn">
                    Build your Chatbot{" "}
                    <Image
                      src={arrowRightWhiteIcon}
                      alt="arrowRightWhiteIcon"
                    />
                  </button>
                  <button className="btndefault chatbotBtn">
                    <Image src={playBtnIcon} alt="playBtnIcon" />
                    Watch Video
                  </button>
                </div>
                <p className="ps-4">No credit card required</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="videoWrapper">
                <Image
                  className="w-100 h-auto"
                  src={bannerVideo}
                  alt="bannerVideo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="affiliate_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h4 className="text-center">Affiliate Program</h4>
              <div className="affiliate_content">
                <h2 className="text-center">
                  Join our affiliate program and receive a 20% commission on
                  payments for all customers you refer
                </h2>
              </div>
              <div className="form_wrapper">
                <Form>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group
                        className="mb-4"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="Faryar" />
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group
                        className="mb-4"
                        controlId="exampleForm.ControlInput2"
                      >
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Ghazanfari" />
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group
                        className="mb-4"
                        controlId="exampleForm.ControlInput3"
                      >
                        <Form.Label>Email </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="info@faryarghazanfari.com"
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <Button
                        type="submit"
                        className="btnprimary joinBtn w-100 d-flex align-items-center justify-content-center"
                      >
                        Join Now
                        <Image src={arrowRight} alt="arrow" />
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tabs_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="content_width">
                <h4>HOW IT WORKS</h4>
                <p>
                  SiteAgent is not just another chatbot. It's a leap forward in
                  digital customer engagement, combining the latest AI
                  technology with the nuanced touch of human-like conversation.
                  Our platform is designed to seamlessly integrate with your
                  website, providing your customers with an intelligent,
                  responsive service agent capable of understanding and
                  fulfilling their needs in real time.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="tab_wrapper">
                <Tabs
                  defaultActiveKey="Import your data"
                  id="justify-tab-example"
                  justify
                >
                  <Tab eventKey="Import your data" title="Import your data">
                    <Importyourdatatab />
                  </Tab>
                  <Tab
                    eventKey="Customize behavior & appearance"
                    title="Customize behavior & appearance"
                  >
                    <Behaviorappearancetab />
                  </Tab>
                  <Tab
                    eventKey="Embed on your website"
                    title="Embed on your website"
                  >
                    <Embedwebsitetab />
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>
                <span>Benefits</span>
              </h2>
              <p>
                Everything you need for your no-code AI chatbot is provided.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="benefit_block">
                <div className="img_block">
                  <Image
                    className="w-100 h-auto"
                    src={blockOne}
                    alt="blockOne"
                  />
                </div>
                <div className="benefit_block_text">
                  <h3>Increased Engagement</h3>
                  <p>
                    Engage visitors the moment they arrive on your site,
                    reducing bounce rates and fostering a positive brand image.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="benefit_block">
                <div className="img_block">
                  <Image
                    className="w-100 h-auto"
                    src={blockTwo}
                    alt="blockTwo"
                  />
                </div>
                <div className="benefit_block_text">
                  <h3>Higher Conversion Rates</h3>
                  <p>
                    By providing immediate, relevant assistance, SiteAgent helps
                    convert more browsers into buyers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="benefit_block">
                <div className="img_block">
                  <Image
                    className="w-100 h-auto"
                    src={blockThree}
                    alt="blockThree"
                  />
                </div>
                <div className="benefit_block_text">
                  <h3>Enhanced Customer Satisfaction</h3>
                  <p>
                    Quick, accurate, and personalized support means happier
                    customers and stronger loyalty.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="benefit_block">
                <div className="img_block">
                  <Image
                    className="w-100 h-auto"
                    src={blockFour}
                    alt="blockFour"
                  />
                </div>
                <div className="benefit_block_text">
                  <h3>Operational Efficiency</h3>
                  <p>
                    Reduce the load on your human customer service team,
                    allowing them to focus on more complex queries and tasks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="benefit_block">
                <div className="img_block">
                  <Image
                    className="w-100 h-auto"
                    src={blockFive}
                    alt="blockFive"
                  />
                </div>
                <div className="benefit_block_text">
                  <h3>Data Insights</h3>
                  <p>
                    Gain valuable insights into customer behavior and
                    preferences, helping you to continuously improve your
                    offerings.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="benefit_block">
                <div className="img_block">
                  <Image
                    className="w-100 h-auto"
                    src={blockSix}
                    alt="blockSix"
                  />
                </div>
                <div className="benefit_block_text">
                  <h3>Trustworthy, accurate answers</h3>
                  <p>
                    Quick, accurate, and personalized support means happier
                    customers and stronger loyalty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pwerful_feature_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 mb-3">
              <h2 className="gradient_color">
                <span>POWERFUL FEATURES</span>
              </h2>
              <p>
                Everything you need for your no-code AI chatbot is provided.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 mb-4">
              <div className="pwerful_block">
                <div className="feature_icon">
                  <Image
                    className="gradient_icon"
                    src={availabilityGradientIcon}
                    alt="availabilityGradientIcon"
                  />
                  <Image
                    className="white_icon"
                    src={availabilityWhiteIcon}
                    alt="availabilityWhiteIcon"
                  />
                </div>
                <h4>24/7 Availability</h4>
                <p>
                  Our AI doesn't sleep. SiteAgent is on hand round-the-clock to
                  ensure your customers receive instant assistance, anytime they
                  need it.
                </p>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="pwerful_block">
                <div className="feature_icon">
                  <Image
                    className="gradient_icon"
                    src={personalizeGradientIcon}
                    alt="personalizeGradientIcon"
                  />
                  <Image
                    className="white_icon"
                    src={personalizeWhiteIcon}
                    alt="personalizeWhiteIcon"
                  />
                </div>
                <h4>Personalized Interactions</h4>
                <p>
                  By learning about your business and its offerings, SiteAgent
                  delivers tailored conversations that resonate with your
                  customers, driving satisfaction and loyalty.
                </p>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="pwerful_block">
                <div className="feature_icon">
                  <Image
                    className="gradient_icon"
                    src={chatGradientIcon}
                    alt="chatGradientIcon"
                  />
                  <Image
                    className="white_icon"
                    src={chatWhiteIcon}
                    alt="chatWhiteIcon"
                  />
                </div>
                <h4>Live Voice Support</h4>
                <p>
                  Beyond text, SiteAgent offers live voice interactions, making
                  customer service more accessible and personal than ever
                  before. It's like having a human agent, but without the wait
                  times.
                </p>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="pwerful_block">
                <div className="feature_icon">
                  <Image
                    className="gradient_icon"
                    src={IntelligentGradientIcon}
                    alt="IntelligentGradientIcon"
                  />
                  <Image
                    className="white_icon"
                    src={IntelligentWhiteIcon}
                    alt="IntelligentWhiteIcon"
                  />
                </div>
                <h4>Intelligent Product Recommendations</h4>
                <p>
                  Utilizing advanced AI algorithms, SiteAgent can guide
                  customers to products or services they seek, boosting sales
                  and enhancing the shopping experience.
                </p>
              </div>
            </div>
            <div className="col-sm-4 mb-4">
              <div className="pwerful_block">
                <div className="feature_icon">
                  <Image
                    className="gradient_icon"
                    src={IntegrationGradientIcon}
                    alt="IntegrationGradientIcon"
                  />
                  <Image
                    className="white_icon"
                    src={IntegrationWhiteIcon}
                    alt="IntegrationWhiteIcon"
                  />
                </div>
                <h4>Seamless Integration</h4>
                <p>
                  Easy to set up and integrate with your existing website
                  infrastructure, SiteAgent starts transforming your customer
                  service experience with minimal effort from your side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fullVideo_section">
        <div className="container">
          <div className="col-sm-12">
            <div className="video_wrapper">
              <iframe
                width="100%"
                height="725"
                src="https://www.youtube.com/embed/q0EDV1HGbrc?si=AQKY1NrMhabREZVL"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="useCases_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>
                <span>Usecases</span>
              </h2>
              <p>
                Empowering Conversations: Explore Limitless Usecases with Our
                Intelligent Chatbot Solutions!
              </p>
            </div>
          </div>
          <div className="text_image_block">
            <div className="row">
              <div className="col-md-6">
                <div className="support_text">
                  <h3>
                    <span>Customer Support</span>
                  </h3>
                  <p>
                    Enhance customer support with our Chatbot AI, providing
                    instant assistance, resolving queries efficiently, and
                    ensuring a seamless and personalized experience.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="support_img">
                  <Image src={supportImg} alt="supportImg" />
                </div>
              </div>
            </div>
          </div>
          <div className="text_image_block">
            <div className="row">
              <div className="col-md-6">
                <div className="support_img">
                  <Image src={generationImg} alt="generationImg" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="support_text">
                  <h3>
                    <span>Lead Generation</span>
                  </h3>
                  <p>
                    Empower your business with Lead Generation Chatbot AI,
                    converting conversations into valuable leads for sustainable
                    growth and increased success.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="text_image_block">
            <div className="row">
              <div className="col-md-6">
                <div className="support_text">
                  <h3>
                    <span>AI Personas to Engage Your Users</span>
                  </h3>
                  <p>
                    Create AI personas about any topic and have them engage with
                    your users and provide them with a personalized experience.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="support_img">
                  <Image src={engageImg} alt="engageImg" />
                </div>
              </div>
            </div>
          </div>
          <div className="text_image_block">
            <div className="row">
              <div className="col-md-6">
                <div className="support_img">
                  <Image src={chatbotsImg} alt="chatbotsImg" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="support_text">
                  <h3>
                    <span>Multi-platform Chatbots</span>
                  </h3>
                  <p>
                    Add AI chatbots to your website, mobile app, or any other
                    platform with a simple embed code or with our API.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="integration_block">
            <div className="row align-items-end">
              <div className="col-md-7">
                <div className="full_img">
                  <Image
                    className="w-100 h-auto desktopView"
                    src={integrationImg}
                    alt="integrationImg"
                  />
                  <Image
                    className="w-100 h-auto mobileView"
                    src={integrationImgMobile}
                    alt="integrationImgMobile"
                  />
                  
                </div>
              </div>
              <div className="col-md-5">
                <h3>
                  <span>INTEGRATIONS</span>
                </h3>
                <p>
                  Enhance your workflow with seamless integrations. Our Chatbot
                  AI effortlessly integrates with your existing systems,
                  providing a frictionless experience. Streamline communication,
                  automate tasks, and unlock the full potential of your
                  processes. Elevate efficiency and collaboration through
                  intelligent integrations tailored to your unique needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="website__gradient_section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h5>
                Your website becomes more than just a place to get information
                or shop. It becomes a dynamic, engaging, and smart platform that
                understands and interacts with your customers in a whole new
                way. Upgrade your customer service, boost your sales, and stay
                ahead of the competition with the power of AI.
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className="slider_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>
                <span>WHAT PEOPLE ARE SAYING</span>
              </h2>
              <p className="sliderDesc">
                Site Agent is the easiest way to create a chatbot for your
                website. Don't take our word for it! Here's what people are
                saying.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="swiperSliderWrapper">
                <Swiper navigation={true} modules={[Navigation]}
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
                      spaceBetween:"10px"
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween:"20px"
                    },
                    1920: {
                      slidesPerView: 3,
                      spaceBetween:"20px"
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
                          Mollitia non libero iure. Voluptatem officiis enim ut
                          et ut qui voluptatem voluptatum. Qui est accusantium
                          velit aut dolores qui. Non eveniet officia corporis
                          aut perspiciatis natus sit. Sunt consequuntur possimus
                          hic dolorem eveniet qui numquam occaecati ratione.
                          Deserunt amet eaque reprehenderit non et culpa ut
                          debitis quos. Dolorum cum quas modi.
                        </p>
                      </div>
                      <div className="userInfo">
                        <div className="userImg">
                          <Image src={userIcon} alt="userIcon" />
                        </div>
                        <div className="name_designation">
                          <h5>Sophia Anderson</h5>
                          <p>Internal Implementation Officer</p>
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
                          Mollitia non libero iure. Voluptatem officiis enim ut
                          et ut qui voluptatem voluptatum. Qui est accusantium
                          velit aut dolores qui. Non eveniet officia corporis
                          aut perspiciatis natus sit. Sunt consequuntur possimus
                          hic dolorem eveniet qui numquam occaecati ratione.
                          Deserunt amet eaque reprehenderit non et culpa ut
                          debitis quos. Dolorum cum quas modi.
                        </p>
                      </div>
                      <div className="userInfo">
                        <div className="userImg">
                          <Image src={userIcon} alt="userIcon" />
                        </div>
                        <div className="name_designation">
                          <h5>Sophia Anderson</h5>
                          <p>Internal Implementation Officer</p>
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
                          Mollitia non libero iure. Voluptatem officiis enim ut
                          et ut qui voluptatem voluptatum. Qui est accusantium
                          velit aut dolores qui. Non eveniet officia corporis
                          aut perspiciatis natus sit. Sunt consequuntur possimus
                          hic dolorem eveniet qui numquam occaecati ratione.
                          Deserunt amet eaque reprehenderit non et culpa ut
                          debitis quos. Dolorum cum quas modi.
                        </p>
                      </div>
                      <div className="userInfo">
                        <div className="userImg">
                          <Image src={userIcon} alt="userIcon" />
                        </div>
                        <div className="name_designation">
                          <h5>Sophia Anderson</h5>
                          <p>Internal Implementation Officer</p>
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
                          Mollitia non libero iure. Voluptatem officiis enim ut
                          et ut qui voluptatem voluptatum. Qui est accusantium
                          velit aut dolores qui. Non eveniet officia corporis
                          aut perspiciatis natus sit. Sunt consequuntur possimus
                          hic dolorem eveniet qui numquam occaecati ratione.
                          Deserunt amet eaque reprehenderit non et culpa ut
                          debitis quos. Dolorum cum quas modi.
                        </p>
                      </div>
                      <div className="userInfo">
                        <div className="userImg">
                          <Image src={userIcon} alt="userIcon" />
                        </div>
                        <div className="name_designation">
                          <h5>Sophia Anderson</h5>
                          <p>Internal Implementation Officer</p>
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
  );
}
