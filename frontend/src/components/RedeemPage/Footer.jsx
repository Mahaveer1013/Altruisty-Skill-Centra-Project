import logo from "./images/logo_design.altruisty 5.png";

import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="border-t-2 border-black relative h-fit">
      <div className="bg-white w-full h-fit">
        <div className="flex justify-between bg-white">
          <img src={logo} height={60} width={200} />
          <div className="flex md:flex-row gap-4 mr-10 justify-center align-middle items-center">
            <FaFacebook size={36} />
            <FaSquareXTwitter size={36} />
            <FaLinkedin size={36} />
            <FaSquareInstagram size={36} />
          </div>
        </div>
        <div className="mb-2">
          <h1 className="border-t-2 font-bold"></h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg font-bold pb-5">
          <h1>©Copyright 2024. All rights reserved.</h1>
          <h1>| AffiliateProgram</h1>
          <h1>Privacy Policy</h1>
          <h1>Terms & Conditions</h1>
          <h1>Contact Us</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
