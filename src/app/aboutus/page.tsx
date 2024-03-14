"use client";
import Image from "next/image";
import Link from "next/link";
import bannerVideo from "../../assets/images/bannerVideo.jpg";
import userIcon from "../../assets/images/userIcon.png";
import userIcon_2 from "../../assets/images/userIcon_2.png";
import userIcon_3 from "../../assets/images/userIcon_3.png";
import userIcon_4 from "../../assets/images/userIcon_4.png";
import starIcon from "../../assets/images/starIcon.svg";
import React from "react";

import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
export default function About() {
  return (
    <div className="AboutPage">
      {/* banner Html start  */}
      <div className="priceBanner">
        <div className="container">
          <div className="col-sm-12">
            <div className="priceBannerContent">
              <h1>About Us</h1>
              <div className="breadcrumb">
                <ul>
                  <li>
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li>
                    <span>About Us</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner Html end  */}
      <section className="aboutContent">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="contentBlock">
                <h2>
                  <span>Lorem Ipsum</span>
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="imgfull">
                <Image className="w-100 h-auto" src={bannerVideo} alt='bannerVideo'/>
              </div>
            </div>
          </div>
          <div className=""></div>
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
                          Since integrating SiteAgent into our website, customer
                          engagement has skyrocketed. It’s like having a 24/7
                          digital concierge that truly understands our visitors’
                          needs. A game-changer for our online business!
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
                          SiteAgent to match our brand’s voice and style. It not
                          only looks like an integral part of our site but also
                          interacts in a way that feels incredibly natural and
                          helpful.
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
                          questions with the kind of precision and friendliness
                          we didn’t think was possible from AI.
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
                          have significantly improved our conversion rates. It’s
                          truly set a new standard for customer service on our
                          site.
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
  );
}
