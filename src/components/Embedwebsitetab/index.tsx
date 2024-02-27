"use client";
import Image from "next/image";
import React from "react";
import "./style.scss";
import learnmoreIcon from "../../assets/images/learnmoreIcon.svg";
import tabEmbed from "../../assets/images/tabEmbed.png";
import Link from "next/link";

function Embedwebsitetab() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="content-tab-left">
              <h2>Embed on your <br/> Website</h2>
              <p>Add the AI agent to any website with a simple embed code
              </p>
              <Link className="learnmore" href={"/"}>
                Learn more
                <Image src={learnmoreIcon} alt="icon" />
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div className="fullImage">
              <Image className="w-100" src={tabEmbed} alt="tabEmbed" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Embedwebsitetab;
