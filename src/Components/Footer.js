import React from "react";
import {
  FaMapPin,
  FaMailBulk,
  FaFacebookSquare,
  FaGoogle,
  FaYoutubeSquare,
} from "react-icons/fa";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="total-footer bg-black text-white">
      <div className="footer ">
        {/* ------------------------------our services section----------------------------------- */}
        <div className="m-2">
          <h4>Our Services</h4>
          <hr className="border border-2 bg-white " />
          <div className="d-flex align-items-center justify-content-center">
            <div>
              <p>Home</p>
              <p>Universities</p>
              <p>About Us</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>

        {/* --------------------------------Follow Us section------------------------------------- */}
        <div className="m-2" id="follow">
          <h4>Follow Us</h4>
          <hr className="border border-2 bg-white" />
          <div className="d-flex align-items-center ">
            <div>
              <FaFacebookSquare className="icon m-2" />
            </div>
            <div>
              <FaGoogle className="icon m-2" />
            </div>
            <div>
              <FaYoutubeSquare className="icon m-2" />
            </div>
          </div>
          <div className="d-flex align-items-center ">
            <div className="d-flex align-items-center">
              <div>
                <FaMailBulk className="icon m-2" />
              </div>
              <div>
                <p>info@worlduniversities.com.bd</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------ending of footer------------------------------- */}
      <div>
        <hr className="border border-2 bg-white m-0" />
        <p className="p-2 ms-4 ">2022 Company . Inc . Privacy . Terms</p>
      </div>
    </div>
  );
}

export default Footer;
