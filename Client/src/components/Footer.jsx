import React from "react";
import { assets } from "../assets/assets";
import logo from "../assets/logoPictoria.png";

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-4 py-3 mt-20">
      <img src={logo} alt="" width={150} className="" />
      <p className="flex-l border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        CopyRight @ROHAN2025.dev | All Rights Reserved
      </p>
      <div className="flex gap-2.5">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.instagram_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
      </div>
    </div>
  );
};

export default Footer;
