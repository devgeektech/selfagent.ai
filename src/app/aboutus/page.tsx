"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./style.scss";
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
          <div className="row">
            <div className="col-md-6">
              
            </div>
            <div className="col-md-6">
              
            </div>
           
          </div>
          <div className=""></div>
        </div>
      </section>
    </div>
  );
}
