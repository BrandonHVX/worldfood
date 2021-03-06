import Fade from "react-reveal/Fade"

import React, { Component } from "react"
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
export default class End extends Component {
  constructor(props) {
    super(props)
    this.state = {
      businessname: "",
      businessemail: "",
      businessowner: "",
      businessphone: "",
      businessaddress: "",
      businesscity: "",
      businessstate: "",
      businesszip: "",
    }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })
  render() {
    const {
      businessname,
      businessowner,
      businessemail,
      businessaddress,
      businesscity,
      businessstate,
      businesphone,
      businesszip,
    } = this.state
    return (
      <div
        className="container-fluid"
        style={{ backgroundColor: "#57c2a4", color: "white" }}
      >
        <div className="container">
          <div className="flexbox">
            <Fade left>
              <h1 className="text-center my-5">Vendor Registration</h1>
              <form
                name="contact"
                class="needs-validation"
                method="post"
                action="/success"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                {/* You still need to add the hidden input with the form name to your JSX form */}
                <input type="hidden" name="form-name" value="contact" />
                <div className="row justify-content-md-center my-4">
                  <div class="col-md-6 mb-3">
                    <div class="input-group">
                      <input
                        id="validationTooltipUsername"
                        name="businessname"
                        value={businessname}
                        onChange={this.handleChange}
                        type="text"
                        className="inputBox"
                        placeholder="Name Of Business"
                        aria-describedby="validationTooltipUsernamePrepend"
                        required
                      />
                      <div class="invalid-tooltip">Name Required.</div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <input
                      name="businessowner"
                      value={businessowner}
                      onChange={this.handleChange}
                      type="text"
                      className="inputBox"
                      placeholder="Business Owner's Name"
                      required
                      id="validationTooltipUsername"
                    />
                  </div>
                  <div className="col-lg-5 mb-4">
                    <input
                      type="name"
                      name="businessaddress"
                      value={businessaddress}
                      onChange={this.handleChange}
                      className="inputBox"
                      placeholder="Address"
                      required
                    />
                  </div>
                  <div className="col-lg-4 mb-4">
                    <input
                      name="businesscity"
                      value={businesscity}
                      onChange={this.handleChange}
                      type="text"
                      className="inputBox"
                      placeholder=" City"
                      required
                    />
                  </div>
                  <div className="col-lg-3 mb-4">
                    <input
                      name="businessstate"
                      value={businessstate}
                      onChange={this.handleChange}
                      type="text"
                      className="inputBox"
                      placeholder=" State"
                      required
                    />
                  </div>
                  <div className="col-lg-3 mb-4">
                    <input
                      name="businesszip"
                      value={businesszip}
                      onChange={this.handleChange}
                      type="text"
                      className="inputBox"
                      placeholder=" Zip"
                      required
                    />
                  </div>
                  <div className="col-lg-4 mb-4">
                    <input
                      name="businessphone"
                      value={businesphone}
                      onChange={this.handleChange}
                      type="number"
                      className="inputBox"
                      placeholder="Telephone"
                      required
                    />
                  </div>
                  <div className="col-lg-5 mb-4">
                    <input
                      name="businessemail"
                      value={businessemail}
                      onChange={this.handleChange}
                      type="email"
                      className="inputBox"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <button className="btn btn-light mb-4 " type="submit">
                  Send
                </button>
              </form>
            </Fade>
          </div>
        </div>
      </div>
    )
  }
}
