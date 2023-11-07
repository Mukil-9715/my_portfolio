import React from "react";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact black ">
      <div className="container black">
        <div c className="contact-title text-center th1">
          Contact With Me
        </div>
        <div className="row d-flex pb-5 justify-content-evenly align-items-stretch">
          <div className="col-lg-5 bg-gray mb-5 d-flex flex-column p-5 align-items-start justify-content-center  ">
            <div className="contact-subtitle th2">Contact Infomation</div>
            <div className="contact-content-items">
              <div>
                <MailOutlined style={{ color: "rgb(88, 73, 201)" }} />
              </div>
              <ul className="contactlist">
                <li className="list-title th3">Email</li>
                <li>mukilanmurugan15@gmail.com</li>
              </ul>
            </div>
            <div className="contact-content-items">
              <div>
                <PhoneOutlined style={{ color: "rgb(88, 73, 201)" }} />
              </div>
              <ul className="contactlist">
                <li className="list-title th3">Phone</li>
                <li>+91 6379745680</li>
              </ul>
            </div>
            <div className="contact-content-items">
              <div>
                <EnvironmentOutlined style={{ color: "rgb(88, 73, 201)" }} />
              </div>
              <ul className="contactlist">
                <li className="list-title th3">Address</li>
                <li>16 Ilango Sdigal Street,</li>
                <li>Meenachipet,</li>
                <li>Pondicherry,</li>
                <li>India.</li>
              </ul>
            </div>
            <div className="contact-content-items">
              Visit my social Profile and get connected
            </div>
            <div className="contact-content-items"></div>
          </div>
          <div className=" col-lg-5 mb-5 bg-gray  ">
            <div className="contact-subtitle d-flex  justify-content-center th2 pt-5">
              Send Me Message
            </div>
            <div className="contact-subtitle d-flex  justify-content-center py-3">
              <form className=" d-flex flex-column justify-content-center align-items-start w-100 ">
                <input
                  className="form-control-plaintext contact-form-input-text "
                  type="text"
                  placeholder="Write your name"
                />
                <input
                  className="form-control-plaintext contact-form-input-text "
                  type="text"
                  placeholder="Write your email"
                />
                <input
                  className="form-control-plaintext contact-form-input-text "
                  type="text"
                  placeholder="Write your Mobile Number"
                />
                <textarea
                  className="form-control-plaintext contact-form-input-text-area "
                  placeholder="Write your Message"
                  cols="10"
                  rows="10"
                ></textarea>
                <Button className="ms-3 mb-3 mt-3 btn align-self-start  Submit-btn">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
