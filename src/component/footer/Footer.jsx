import React from "react";
import "../../index.css";
import { Outlet } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-3 border-top">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="/" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f network" />
            </a>
            <a href="/" className="me-4 text-reset">
              <MDBIcon fab icon="twitter network" />
            </a>
            <a href="/" className="me-4 text-reset">
              <MDBIcon fab icon="google network" />
            </a>
            <a href="/" className="me-4 text-reset">
              <MDBIcon fab icon="instagram network" />
            </a>
            <a href="/" className="me-4 text-reset">
              <MDBIcon fab icon="linkedin network" />
            </a>
            <a href="/" className="me-4 text-reset">
              <MDBIcon fab icon="github network" />
            </a>
          </div>
        </section>

        {/* <section className="row text-center text-md-start mt-4">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-2">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-2">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </section> */}
        <section className="row text-center text-md-start mt-4 pe-3">
          {/* <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-2">
            <h6 className="text-uppercase fw-bold mb-4">
              <MDBIcon icon="gem" className="me-3" />
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </MDBCol> */}
          <div className="col-md-3 ps-5 mx-auto mb-2">
            <h6 className="text-uppercase fw-bold mb-4">
              <MDBIcon icon="gem" className="me-3" />
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          {/* <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-2">
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Laravel
              </a>
            </p>
          </MDBCol> */}
          <div className="col-md-2 mx-auto mb-2">
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Laravel
              </a>
            </p>
          </div>
          {/* <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-2">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </MDBCol> */}
          <div className="col-md-2 mx-auto mb-2">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>
          {/* <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-2">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              New York, NY 10012, US
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              info@example.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
            </p>
            <p>
              <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
            </p>
          </MDBCol> */}
          <div className="col-md-2 mx-auto  mb-2">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              New York, NY 10012, US
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              info@example.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
            </p>
            <p>
              <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
            </p>
          </div>
          <div className="col-md-3 mx-auto ps-4 mb-2">
            <h6 className="text-uppercase fw-bold mb-4">General Feedback</h6>
            <form id="sample_form">
              <div className="row">
                <div className="col form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control form_data"
                    id="name"
                    placeholder="Your Name "
                    required
                  />
                  <span id="name_error" className="text-danger"></span>
                </div>
                <div className="col form-group">
                  <input
                    type="email"
                    className="form-control form_data"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                  <span id="email_error" className="text-danger"></span>
                </div>
              </div>

              <div className="form-group mt-2">
                <textarea
                  className="form-control form_data"
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="Enter Message"
                  required
                ></textarea>
                <span id="message_error" className="text-danger"></span>
                <span id="suc" className="text-success"></span>
              </div>
              <br />
              <div className="text-center group" id="fed">
                <input
                  className="btn btn-primary"
                  style={{
                    backgroundColor: "rgb(255,106,0)",
                    border: " rgb(255,106,0)",
                  }}
                  type="submit"
                  id="submit"
                  name="submit"
                  value="Send Feedback"
                />
              </div>
            </form>
          </div>
        </section>

        <div
          className="text-center p-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            Metamart.com
          </a>
        </div>
      </MDBFooter>

      <Outlet />
    </>
  );
};

export default Footer;
