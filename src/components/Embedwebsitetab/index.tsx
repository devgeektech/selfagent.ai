"use client";
import Image from "next/image";
import React from "react";
import "./style.scss";
import learnmoreIcon from "../../assets/images/learnmoreIcon.svg";
import tabEmbed from "../../assets/images/tabEmbed.png";
import Link from "next/link";
import ArrowUpIcon from "@/app/icons/ArrowUpIcon";

function Embedwebsitetab() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="content-tab-left">
              <h2 data-aos="fade-right" data-aos-duration="500">Embed on your <span> Website</span></h2>
              <p data-aos="fade-right" data-aos-duration="600">Add the AI agent to any website with a simple embed code
              </p>
              <Link className="learnmore" href={"/"} data-aos="fade-right" data-aos-duration="700">
                Learn more
                <ArrowUpIcon/>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="fullImage">
              <Image className="w-100" src={tabEmbed} alt="tabEmbed" data-aos="fade-left" data-aos-duration="500" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Embedwebsitetab;
