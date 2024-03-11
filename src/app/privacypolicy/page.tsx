"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./style.scss";
export default function Privacy() {
  return (
    <div className="PrivacyPage">
      {/* banner Html start  */}
      <div className="priceBanner">
        <div className="container">
          <div className="col-sm-12">
            <div className="priceBannerContent">
              <h1>Privacy Policy</h1>
              <div className="breadcrumb">
                <ul>
                  <li>
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li>
                    <span>Privacy Policy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner Html end  */}
      <section className="privacyContent">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1>Privacy Policy</h1>
            </div>
            <div className="col-sm-12">
              <div className="mb-3">
                <h2>What is Lorem Ipsum?</h2>
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
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="mb-3">
                <h2>What is Lorem Ipsum?</h2>
                <ul>
                  <li>
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </li>
                  <li>
                    {" "}
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,{" "}
                  </li>
                  <li>
                    {" "}
                    When an unknown printer took a galley of type and scrambled
                  </li>
                  <li> It to make a type specimen book.</li>
                  <li>
                    It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially
                    unchanged.
                  </li>
                  <li>
                    {" "}
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing
                  </li>
                  <li>
                    {" "}
                    Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions
                    of Lorem Ipsum.
                  </li>
                </ul>
              </div>
              <div className="mb-3">
                <h2>What is Lorem Ipsum?</h2>
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
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="mb-3">
                <h2>What is Lorem Ipsum?</h2>
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
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="mb-3">
                <h2>What is Lorem Ipsum?</h2>
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
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
