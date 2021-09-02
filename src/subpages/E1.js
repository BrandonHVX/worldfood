import React from "react"
import Fade from "react-reveal/Fade"

export default function End() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#57c2a4", color: "white" }}
    >
      <div className="container">
        <div className="flexbox">
          <Fade left>
            <h1 className="text-center my-5">Vendor Registration</h1>
            <h5 className="text-center my-5">Vendor Registration</h5>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <div className="row my-4">
                <div className="col-lg-6 mb-4">
                  <input
                    type="name"
                    className="inputBox"
                    placeholder="Business Name"
                  />
                </div>
                <div className="col-lg-6 mb-4">
                  <input
                    type="email"
                    className="inputBox"
                    placeholder="Business Owner's Name"
                  />
                </div>
                <div className="col-lg-5 mb-4">
                  <input
                    type="name"
                    className="inputBox"
                    placeholder=" Address"
                  />
                </div>
                <div className="col-lg-4 mb-4">
                  <input type="name" className="inputBox" placeholder=" City" />
                </div>
                <div className="col-lg-3 mb-4">
                  <input
                    type="name"
                    className="inputBox"
                    placeholder=" State"
                  />
                </div>
                <div className="col-lg-4 mb-4">
                  <input
                    type="email"
                    className="inputBox"
                    placeholder="Telephone"
                  />
                </div>
                <div className="col-lg-8 mb-4">
                  <input
                    type="email"
                    className="inputBox"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row my-4">
                <div className="col-lg-6 mb-4">
                  <input
                    type="name"
                    className="inputBox"
                    placeholder="Contact Name"
                  />
                </div>
                <div className="col-lg-6 mb-4">
                  <input
                    type="name"
                    className="inputBox"
                    placeholder="Contact Phone"
                  />
                </div>
                <div className="col-lg-5 mb-4">
                  <input
                    type="name"
                    className="inputBox"
                    placeholder=" Address"
                  />
                </div>
                <div className="col-lg-4 mb-4">
                  <input type="name" className="inputBox" placeholder=" City" />
                </div>
                <div className="col-lg-3 mb-4">
                  <input
                    type="name"
                    className="inputBox"
                    placeholder=" State"
                  />
                </div>
                <div className="col-lg-4 mb-4">
                  <input
                    type="email"
                    className="inputBox"
                    placeholder="Telephone"
                  />
                </div>
                <div className="col-lg-8 mb-4">
                  <input
                    type="email"
                    className="inputBox"
                    placeholder="Email"
                  />
                </div>
              </div>

              <button className="btn btn-light mb-4 py-3">Submit</button>
            </form>
          </Fade>
        </div>
      </div>
    </div>
  )
}
