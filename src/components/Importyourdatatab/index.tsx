"use client";
import Image from "next/image";
import React from "react";
import "./style.scss";
import learnmoreIcon from "../../assets/images/learnmoreIcon.svg";
import tabImage from "../../assets/images/tabImage.jpg";
import Link from "next/link";
import ArrowUpIcon from "@/app/icons/ArrowUpIcon";

function Importyourdatatab() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 tab-down">
            <div className="content-tab-left">
             <h2 data-aos="fade-right" data-aos-duration="500">Import <span>Your Benefits</span></h2>
             
             <p data-aos="fade-right" data-aos-duration="600">Effortlessly integrate and enhance your system with our AI Agent. Streamline processes by importing your data seamlessly, empowering the AI Agent to provide personalized and efficient interactions, creating a more intuitive and responsive user experience.
              </p>
              <Link className="learnmore" href={"/"} data-aos="fade-right" data-aos-duration="700">
                Learn more<ArrowUpIcon/>
              </Link>
            </div>
          </div>
          <div className="col-md-6 tab-up">
            <div className="fullImage">
             
                 
              <Image className="w-100" src={tabImage} alt="tabImage" data-aos="fade-left" data-aos-duration="500"/>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Importyourdatatab;
