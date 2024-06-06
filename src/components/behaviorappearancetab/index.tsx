"use client";
import Image from "next/image";
import React from "react";
import "./style.scss";
import learnmoreIcon from "../../assets/images/learnmoreIcon.svg";
import tabCustomize from "../../assets/images/tabCustomize.png";
import Link from "next/link";
import ArrowUpIcon from "@/app/icons/ArrowUpIcon";

function Behaviorappearancetab() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="content-tab-left">
              <h2 data-aos="fade-right" data-aos-duration="500">Customize behavior and <span>appearance</span></h2>
              <p data-aos="fade-right" data-aos-duration="600">SIteAgent offers full control over your AI agent's tone, voice, and behavior, ensuring it aligns perfectly with your brand's identity. Customize its interaction style to fit your audience, from professional to friendly or anything in between. Visual customization lets you integrate the AI seamlessly into your website’s design. Adjust the icon, chat interface, colors, and fonts to match your site’s aesthetic, enhancing user experience and reinforcing your brand’s online presence. With SelfSite, make every interaction uniquely yours.
              </p>
              <Link className="learnmore" href={"/"} data-aos="fade-right" data-aos-duration="700">
                Learn more
                <ArrowUpIcon/>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="fullImage">
              <Image className="w-100" src={tabCustomize} alt="tabCustomize" data-aos="fade-left" data-aos-duration="500"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Behaviorappearancetab;
