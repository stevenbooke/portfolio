import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaDiscord,
  FaXTwitter,
  FaTelegram,
  FaReddit,
  FaCopyright,
  FaRegCopyright,
} from "react-icons/fa6";

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const location = useLocation();

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          {location.pathname !== "/" && (  // Check if not on root path
              <Link className="navbar-brand nav_ac" to="/">
                {logotext}
              </Link>
          )}
          {location.pathname === "/" && (  // Check if not on root path
              <p className="navbar-brand nav_ac">
                {logotext}
              </p>
          )}
          {/* <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link> */}
          <div className="d-flex align-items-center">
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              {socialprofils.twitter && (
                  <a href={socialprofils.twitter}>
                    <FaTwitter />
                  </a>
              )}
              {socialprofils.twitter && (
                  <a href={socialprofils.twitter}>
                    <FaXTwitter />
                  </a>
              )}
              {socialprofils.instagram && (
                  <a href={socialprofils.instagram}>
                    <FaInstagram />
                  </a>
              )}
              {socialprofils.discord && (
                  <a href={socialprofils.discord}>
                    <FaDiscord />
                  </a>
              )}
              {socialprofils.github && (
                  <a href={socialprofils.github}>
                    <FaGithub />
                  </a>
              )}
              {socialprofils.facebook && (
                  <a href={socialprofils.facebook}>
                    <FaFacebookF />
                  </a>
              )}
              {socialprofils.linkedin && (
                  <a href={socialprofils.linkedin}>
                    <FaLinkedin />
                  </a>
              )}
              {socialprofils.youtube && (
                  <a href={socialprofils.youtube}>
                    <FaYoutube />
                  </a>
              )}
              {socialprofils.twitch && (
                  <a href={socialprofils.twitch}>
                    <FaTwitch />
                  </a>
              )}
              {socialprofils.telegram && (
                  <a href={socialprofils.telegram}>
                    <FaTelegram />
                  </a>
              )}
              {socialprofils.reddit && (
                  <a href={socialprofils.reddit}>
                    <FaReddit />
                  </a>
              )}
            </div>
            <p className="copyright m-0"> <FaCopyright /> <FaRegCopyright /> 2024 {logotext}. All rights reserved.</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
      
    </>
  );
};

export default Headermain;
