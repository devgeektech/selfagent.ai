"use client";
import Image from "next/image";
import React from "react";
import  logo from '../../assets/images/logo.png';
import  arrowRightGradientIcon from '../../assets/images/arrowRightGradientIcon.svg';
import  clipoLab from '../../assets/images/clipoLab.png';
import "./style.scss";
import { Button } from "react-bootstrap";
import Link from "next/link";
import TwitterIcon from "@/app/icons/TwitterIcon";
import InstagramIcon from "@/app/icons/InstagramIcon";
import FacebookIcon from "@/app/icons/FacebookIcon";
import EmailIcon from "@/app/icons/EmailIcon";
import TiktokIcon from "@/app/icons/TiktokIcon";
import LinkedinIcon from "@/app/icons/LinkedinIcon";
import ArrowIcon from "@/app/icons/ArrowIcon";


export default function footer() {
  return (
    <footer className="footer">
      <div className="container trySelf">
        <div className="row">
          <div className="col-sm-12">
            <div className="selfsite">
            
              <div className="selfsite_inner">
             
                <h2 data-aos="fade-right" data-aos-duration="500">Join the future of AI Agents today</h2>
                
                <p data-aos="fade-left" data-aos-duration="500">
                  Embrace tomorrow's AI revolution! Join the forefront of AI Agent innovation today<br/> and experience the future of seamless communication
                </p>
              
               
                <Button className="btnprimary" data-aos="zoom-in-right" data-aos-duration="500">Try for Free<ArrowIcon/></Button>
              
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <div className="container footerMenus text-center">
        <div className="row">
          <div className="col-xl-12 col-md-12">
            <div className="logo_wrapper">
        
              <Link href={"/"} ><Image src={logo} alt='logo' data-aos="zoom-in-left" data-aos-duration="500"/></Link>
            
            </div>
            <div className="text-center logoText">
           
              <div data-aos="zoom-in" data-aos-duration="1500"><Link href={"/"} >info@siteagent.ai</Link></div>
             
            </div>
          </div>
          <div className="col-xl-12 col-md-12">
         
            <div className="footerMenu" data-aos="fade-right" data-aos-duration="500" data-aos-easing="linear" >
           
              <ul className="mainMenu">
                <li><Link href={"/"}>About</Link></li>
                <li><Link href={"/"}>Affiliate program</Link></li>
                <li><Link href={"/"}>Careers</Link></li>
                <li><Link href={"/"}>Newsletter</Link></li>
                <li><Link href={"/privacypolicy"}>Privacy policy</Link></li>
                <li><Link href={"/"}>Support</Link></li>
                <li><Link href={"/termsofservice"}>Terms of service</Link></li>
              </ul>
             
            </div>
            
          </div>
          <div className="col-xl-12 col-md-12">
            <div className="footerMenu" data-aos="fade-left" data-aos-duration="500" data-aos-easing="linear" >
           
              <ul className="socialMenu">
                <li><Link href={"/"}><TwitterIcon/></Link></li>
                <li><Link href={"/"}><FacebookIcon/></Link></li>
                <li><Link href={"/"}><InstagramIcon/></Link></li>
                <li><Link href={"/"}><EmailIcon/> </Link></li>
                <li><Link href={"/"}><LinkedinIcon/></Link></li>
                <li><Link href={"/"}><TiktokIcon/></Link></li>
              </ul>
            
            </div>
          </div>
        </div>
        <div className="col-md-12">
       
          <div className="copyright">
            <p  className="mb-3"> ©2024 Selfagent. All Rights Reserved.</p>
            <p><Image src={clipoLab} alt="clipoLab" /></p>
          </div>     
        </div>
      </div>
    </footer>
  );
}
