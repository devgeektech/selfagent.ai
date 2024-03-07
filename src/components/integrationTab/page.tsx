"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import zapierIcon from "../../assets/images/zapierIcon.svg";
import slackIcon from "../../assets/images/slackIcon.svg";
import whatsAppIcon from "../../assets/images/whatsAppIcon.svg";
import wordpressIcon from "../../assets/images/wordpressIcon.svg";
import messengerIcon from "../../assets/images/messengerIcon.svg";
import shopifyIcon from "../../assets/images/shopifyIcon.svg";
import infoPurpleIcon from "../../assets/images/infoPurpleIcon.svg";
import "./style.scss";

export default function Integrationtab(props: any) {
  return (
    <>
      <div className="integrationTab">
        <div className="card-block">
          <h1>Integrations</h1>
          <div className="appsWrapper">
            <div className="singleAppOuter">
              <div className="singleApp">
                <div className="iconWrap">
                  <Image src={zapierIcon} alt="zapierIcon" />
                  <h5 className="mb-0">Add to Zapier</h5>
                </div>
                <h5>Subscription required</h5>
              </div>
            </div>
            <div className="singleAppOuter">
              <div className="singleApp">
                <div className="iconWrap">
                  <Image src={slackIcon} alt="slackIcon" />
                  <h5 className="mb-0">Add to Slack</h5>
                </div>
                <h5>Subscription required</h5>
              </div>
              <button className="infoBtn">
                <Image src={infoPurpleIcon} alt="infoPurpleIcon" />
              </button>
            </div>
            <div className="singleAppOuter">
              <div className="singleApp">
                <div className="iconWrap">
                  <Image src={whatsAppIcon} alt="whatsAppIcon" />
                  <h5 className="mb-0">Add to Whatsappp</h5>
                </div>
                <h5>Subscription required</h5>
              </div>
              <button className="infoBtn">
                <Image src={infoPurpleIcon} alt="infoPurpleIcon" />
              </button>
            </div>
            <div className="singleAppOuter">
              <div className="singleApp">
                <div className="iconWrap">
                  <Image src={wordpressIcon} alt="wordpressIcon" />
                  <h5 className="mb-0">Add to Wordpress</h5>
                </div>
                <h5>Subscription required</h5>
              </div>
            </div>
            <div className="singleAppOuter">
              <div className="singleApp">
                <div className="iconWrap">
                  <Image src={messengerIcon} alt="messengerIcon" />
                  <h5 className="mb-0">Add to Messenger</h5>
                </div>
                <h5>Subscription required</h5>
              </div>
            </div>
            <div className="singleAppOuter">
              <div className="singleApp">
                <div className="iconWrap">
                  <Image src={shopifyIcon} alt="shopifyIcon" />
                  <h5 className="mb-0">Add to Shopify</h5>
                </div>
                <h5>Subscription required</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
