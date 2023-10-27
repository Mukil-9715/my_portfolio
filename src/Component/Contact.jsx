import React from "react";
import "./Contact.css";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

const Contact = () => {




  
  return (
    <div className="contact">
      <div className="contact-title th1">Contact With Me</div>
      <div className="contact-container">
        <div className="contact-content">
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
        <div className="contact-form">
          <div className="contact-subtitle th2">Contact Infomation</div>
          <form className="contact-form-input">
            <input className="contact-form-input-text" type="text"  placeholder="Write your name"/>
            <input className="contact-form-input-text" type="text"  placeholder="Write your email"/>
            <input className="contact-form-input-text" type="text"  placeholder="Write your Mobile Number"/>
            <textarea className="contact-form-input-text-area" placeholder="Write your Message" cols="30" rows="10"></textarea>
          </form>
            <Button className="Submit-btn">Send Message</Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
