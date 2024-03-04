"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/logo.svg";
import './style.scss'

export default function Chatbox() {
  return (
    <>
      <section className="main-top-bar">
        <div className="row mx-0">
          <div className="col-md-12 p-3">
            <div className="inr-topbar">
              <Link href="/">
                <Image src={Logo} alt="Logo" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="website-agent-site">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="inr-site-agent">
                <h2>Website agent Site</h2>
                <Link href="/datasources" className="btnprimary">Website agent Chatbot</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
