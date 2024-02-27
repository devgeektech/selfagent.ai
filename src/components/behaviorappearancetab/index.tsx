"use client";
import Image from "next/image";
import React from "react";
import "./style.scss";
import learnmoreIcon from "../../assets/images/learnmoreIcon.svg";
import tabCustomize from "../../assets/images/tabCustomize.png";
import Link from "next/link";

function Behaviorappearancetab() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="content-tab-left">
              <h2>Customize behavior <br/>and appearance</h2>
              <p>SelfSite offers full control over your AI agent’s tone, voice, and behavior, ensuring it aligns perfectly with your brand’s identity. Customize its interaction style to fit your audience, from professional to friendly or anything in between. Visual customization lets you integrate the AI seamlessly into your website’s design. Adjust the icon, chat interface, colors, and fonts to match your site’s aesthetic, enhancing user experience and reinforcing your brand’s online presence. With SelfSite, make every interaction uniquely yours.
              </p>
              <Link className="learnmore" href={"/"}>
                Learn more
                <Image src={learnmoreIcon} alt="icon" />
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div className="fullImage">
              <Image className="w-100" src={tabCustomize} alt="tabCustomize" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Behaviorappearancetab;
