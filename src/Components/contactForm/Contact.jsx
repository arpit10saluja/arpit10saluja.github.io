import React, { Fragment } from "react";
import "./Contact.css";
import { useColorMode } from "@chakra-ui/react";

const Contact = () => {
  const { colorMode } = useColorMode();

  return (
    <div id="Contact" style={{ color: "black" }}>
      {" "}
      <Fragment>
        <section className="contact">
          <div className="contact-heading">
            <h2>Contact Me </h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="column">
                <div className="contact-widget ">
                  <div className="contact-widget-item">
                    <div className="icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="text">
                      <h5>Address</h5>
                      <p>Kashipur, Uttarakhand</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="text">
                      <h5>Contact me</h5>
                      <p>+917983760582</p>
                    </div>
                  </div>

                  <div className="contact-widget-item">
                    <div className="icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="text">
                      <h5>Email</h5>
                      <p>arpitsaluja1234@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="contact-form">
                  <form
                    action="https://getform.io/f/d72aeccd-342e-437d-ba5e-ed371e37cc83"
                    method="POST">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea
                      placeholder="Message"
                      type="text"
                      name="message"></textarea>
                    <button
                      type="submit"
                      className="site-btn"
                      formTarget="_blank">
                      {" "}
                      Send Message 
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </div>
  );
};

export default Contact;