"use client";
import Image from "next/image";
import React from "react";
import "./style.scss";
import learnmoreIcon from "../../assets/images/learnmoreIcon.svg";
import tabImage from "../../assets/images/tabImage.jpg";
import Link from "next/link";

function Importyourdatatab() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="content-tab-left">
              <h2>Import your <br/> data</h2>
              <p>Effortlessly integrate and enhance your system with our Chatbot AI. Streamline processes by importing your data seamlessly, empowering the chatbot to provide personalized and efficient interactions, creating a more intuitive and responsive user experience.
              </p>
              <Link className="learnmore" href={"/"}>
                Learn more
                <Image src={learnmoreIcon} alt="icon" />
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div className="fullImage">
              <Image className="w-100" src={tabImage} alt="tabImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Importyourdatatab;
