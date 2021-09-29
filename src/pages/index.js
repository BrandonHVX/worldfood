import "../styles/scss/style.scss"
import LandingPage from "../subpages/LandingPage"
import Services from "../subpages/Services"
import Team from "../subpages/Team"
import End from "../subpages/End"
import Footer from "../components/Footer"
import React, { Component } from "react"
import Pic from "../images/tailgate.png"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class index extends Component {
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

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "tailgate", ...this.state }),
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
      <div class="page-content">
        <div class="form-v8-content">
          <div class="form-left">
            <img src={Pic} alt="form" />
          </div>
          <div class="form-right">
            <div class="tab"></div>
            <form
              class="form-detail"
              method="POST"
              id="signup-form"
              // class="signup-form"
              name="tailgate"
              class="needs-validation"
              method="post"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <div className="row ">
                <div
                  class="col-md-12 
              "
                >
                  <label for="inputEmail4" class="form-label">
                    Business Name
                  </label>
                  <input
                    class="form-input"
                    id="validationTooltipUsername"
                    name="businessname"
                    value={businessname}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Name Of Business"
                    aria-describedby="validationTooltipUsernamePrepend"
                    required
                  />
                </div>
                <div
                  class="col-md-12
              "
                >
                  <label for="inputEmail4" class="form-label">
                    Business Owner Name
                  </label>
                  <input
                    class="form-input"
                    name="businessowner"
                    value={businessowner}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Business Owner's Name"
                    required
                    id="validationTooltipUsername"
                  />
                </div>

                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label">
                    Phone
                  </label>
                  <input
                    name="businessphone"
                    value={businesphone}
                    onChange={this.handleChange}
                    type="number"
                    class="form-input"
                    placeholder="Telephone"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label">
                    Email
                  </label>
                  <input
                    name="businessemail"
                    value={businessemail}
                    onChange={this.handleChange}
                    type="email"
                    class="form-input"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label">
                    Address
                  </label>
                  <input
                    class="form-input"
                    type="name"
                    name="businessaddress"
                    value={businessaddress}
                    onChange={this.handleChange}
                    placeholder="Address"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label">
                    City
                  </label>
                  <input
                    class="form-input"
                    name="businesscity"
                    value={businesscity}
                    onChange={this.handleChange}
                    type="text"
                    placeholder=" City"
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label">
                    State
                  </label>
                  <select
                    name="businessstate"
                    value={businessstate}
                    onChange={this.handleChange}
                    type="text"
                    class="form-input"
                    placeholder=" State"
                    requiredid="inputState"
                  >
                    <option selected>State...</option>
                    <option>Florida</option>
                  </select>
                </div>

                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label">
                    Email
                  </label>
                  <input
                    class="form-input"
                    name="businesszip"
                    value={businesszip}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Zip"
                    required
                  />
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      Click the Submit Button to Register your Business
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
