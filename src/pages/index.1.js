import "../styles/scss/style.scss"
import LandingPage from "../subpages/LandingPage"
import Services from "../subpages/Services"
import Team from "../subpages/Team"
import End from "../subpages/End"
import Footer from "../components/Footer"
import React, { Component } from "react"

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
      <div class="main">
        <section>
          <div class="signup-content">
            <form
              method="POST"
              id="signup-form"
              class="signup-form"
              name="tailgate"
              class="needs-validation"
              method="post"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="form-name" value="tailgate" />
              <h2 class="form-title">Vender Registration</h2>
              <div class="form-group">
                <label for="agree-term" class="label-agree-term">
                  I agree all statements in{" "}
                  <a href="#" class="term-service">
                    Terms of service
                  </a>
                </label>
              </div>
              <div class="form-group">
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
              <div class="form-group">
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
              <div class="form-group">
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
              <div class="form-group">
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
              <div class="form-group">
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
              <div class="form-group">
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
              <div class="form-group">
                <input
                  name="businessstate"
                  value={businessstate}
                  onChange={this.handleChange}
                  type="text"
                  class="form-input"
                  placeholder=" State"
                  required
                />
              </div>

              <div class="form-group">
                <input
                  name="businesszip"
                  value={businesszip}
                  onChange={this.handleChange}
                  type="text"
                  class="form-input"
                  placeholder=" Zip"
                  required
                />
              </div>

              <div class="form-group">
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  class="form-submit"
                  value="Sign up"
                />
              </div>
            </form>
            <p class="loginhere">
              Have already an account ?{" "}
              <a href="#" class="loginhere-link">
                Login here
              </a>
            </p>
          </div>
        </section>
      </div>
    )
  }
}
