"use client";
import Image from "next/image";
import React from "react";
import "./style.scss";
import cricleTick from "../../assets/images/cricleTick.svg";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Monthlytabs() {
  return (
    <>
      <div className="monthly_wrapper_Tabs">
        <div className="price-grid">
          <div className="price_block free_block">
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
          </div>
          <div className="price_block free_block price_block starter_block">
            <h4 className="text-start">Starter</h4>
            <div className="for-off">
              <span>50%<br/>OFF</span>
            </div>
            <div className="priceBoxs text-start">
              <h2>
                <strong className="offerDis">$40</strong>$20<span>/month</span>
              </h2>
              <i>20 pages per site</i>
              <p>
                1 scan per month *SiteAgent scans your entire site and digests
                all content for easy retrieval of information for your
                customers. The AI needs to re-scan the site if additional items
                or info is added to your site.{" "}
              </p>
            </div>
            <hr></hr>
            <ul>
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
            <Button className="btnprimary btnget w-100">Get Started</Button>
          </div>
          <div className="price_block free_block price_block professional_block">
            <h4 className="text-start">Standard</h4>
            <div className="for-off">
              <span>50%<br/>OFF</span>
            </div>
            <div className="priceBoxs text-start">
              <h2>
              <strong className="offerDis">$49.5</strong>$99<span>/month</span>
              </h2>
              <i>80 pages per site</i>
              <p>
                2 scans per month *SiteAgent scans your entire site and digests
                all content for easy retrieval of information for your
                customers. The AI needs to re-scan the site if additional items
                or info is added to your site.{" "}
              </p>
            </div>
            <hr></hr>
            <ul>
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
            <Button className="btnprimary btnget w-100">Get Started</Button>
          </div>
          <div className="price_block free_block price_block professional_block">
            <h4 className="text-start">Pro</h4>
            <div className="for-off">
              <span>50%<br/>OFF</span>
            </div>
            <div className="priceBoxs text-start">
              <h2>
              <strong className="offerDis">$249.5</strong>$499<span>/month</span>
              </h2>
              <i>200 pages per site</i>
              <p>
                4 scans per month *SiteAgent scans your entire site and digests
                all content for easy retrieval of information for your
                customers. The AI needs to re-scan the site if additional items
                or info is added to your site.{" "}
              </p>
            </div>
            <hr></hr>
            <ul>
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
            <Button className="btnprimary btnget w-100">Get Started</Button>
          </div>
          <div className="price_block free_block price_block professional_block">
            <h4 className="text-start">Business</h4>
            <div className="for-off">
              <span>50%<br/>OFF</span>
            </div>
            <div className="priceBoxs text-start">
              <h2>
              <strong className="offerDis">$499.5</strong>$999<span>/month</span>
              </h2>
              <i>Unlimited pages per site</i>
              <i>Unlimited scans</i>
            </div>
            <hr></hr>
            <ul>
              <li>
                <Image src={cricleTick} alt="cricleTick" />
                Unlimited captured contact
              </li>
              <li>
                <Image src={cricleTick} alt="cricleTick" />
                200K messages
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
                $0.01 Per Additional Message
              </li>
            </ul>
            <Button className="btnprimary btnget w-100">Get Started</Button>
          </div>
          <div className="price_block free_block price_block professional_block">
            <h4 className="text-start">Enterprise </h4>
            <hr></hr>
            <ul>
              <li>
                <Image src={cricleTick} alt="cricleTick" />
                unlimited everything
              </li>
              <li>
                <Image src={cricleTick} alt="cricleTick" />
                customize anything
              </li>
            </ul>
            <Button className="btnprimary btnget w-100">Contact us</Button>
          </div>
        </div>
        <div className="btm-price-grid">
          <div className="price_block free_block price_block starter_block">
            <div className="for-lft">
              <h4 className="text-start">Extras</h4>
              <hr></hr>
              <ul>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  $10 per additional scan
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  $99 remove “Powered by SiteAgent.AI”
                </li>
              </ul>
              <Button className="btnprimary btnget w-100">Get Started</Button>
            </div>
            <div className="for-ryt">
            <ul>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  $199 - Lead generation function (This is a feature where SiteAgent asks for customer info, name, email, phone number, and message, and passes that on to the website owner through a list that is accessible from analytics and in analytics customer can choose to receive an email for each one that is submitted)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Monthlytabs;
