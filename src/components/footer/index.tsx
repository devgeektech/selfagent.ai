"use client";
import Image from "next/image";
import React from "react";
import  logo from '../../assets/images/logo.svg';
import  arrowRightGradientIcon from '../../assets/images/arrowRightGradientIcon.svg';
import  twitterIcon from '../../assets/images/twitterIcon.svg';
import  fbIcon from '../../assets/images/fbIcon.svg';
import  instagramIcon from '../../assets/images/instagramIcon.svg';
import  linkedinIcon from '../../assets/images/linkedinIcon.svg';
import  youtubeIcon from '../../assets/images/youtubeIcon.svg';
import "./style.scss";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function footer() {
  return (
    <footer className="footer">
      <div className="container trySelf">
        <div className="row">
          <div className="col-sm-12">
            <div className="selfsite">
              <div className="selfsite_inner">
                <h2>Join the future of AI Agents today</h2>
                <p>
                  Embrace tomorrow's AI revolution! Join the forefront of AI Agent innovation today<br/> and experience the future of seamless communication
                </p>
                <Button className="whitebtn"><span>Try for Free</span>
                  <Image src={arrowRightGradientIcon} alt='arrowRightGradientIcon'/>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footerMenus text-center">
        <div className="row">
          <div className="col-xl-12 col-md-12">
            <div className="logo_wrapper">
              <Link href={"/"}><Image src={logo} alt='logo'/></Link>
            </div>
          </div>
          <div className="col-xl-12 col-md-12">
            <div className="footerMenu">
              <ul>
                <li><Link href={"/"}>About</Link></li>
                <li><Link href={"/"}>Affiliate program</Link></li>
                <li><Link href={"/"}>Careers</Link></li>
                <li><Link href={"/"}>Newsletter</Link></li>
                <li><Link href={"/"}>Privacy policy</Link></li>
                <li><Link href={"/"}>Support</Link></li>
                <li><Link href={"/"}>Terms of service</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-12 col-md-12">
            <div className="footerMenu">
              <ul className="socialMenu">
                <li><Link href={"/"}><Image src={twitterIcon} alt='twitterIcon'/></Link></li>
                <li><Link href={"/"}><Image src={fbIcon} alt='fbIcon'/></Link></li>
                <li><Link href={"/"}><Image src={instagramIcon} alt='instagramIcon'/></Link></li>
                <li><Link href={"/"}><Image src={linkedinIcon} alt='linkedinIcon'/></Link></li>
                <li><Link href={"/"}><Image src={youtubeIcon} alt='youtubeIcon'/></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="copyright">
            <p>©2024 Selfagent. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
