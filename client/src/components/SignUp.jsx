import React from "react";
import { withRouter } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { signUp } from "../redux/actions/user-actions";

//samples
import { signUpUserData } from "../utils/samples/user-samples";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      userType: "user",
      password: "",
      password2: "",
    };
  }

  clearState = () => {};

  componentDidMount() {
    this.setState(signUpUserData);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phone,
      userType,
      password,
      password2,
    } = this.state;
    if (!firstName || !lastName || !email || !phone || !userType || !password)
      return alert("All Fields Are Necessary...");
    else {
      if (password !== password2) return alert("Password Didn't Matched");
      else {
        this.setState({ msg: "Please Wait..." });
        const user = { firstName, lastName, email, phone, password, userType };
        this.props.signUp(user);
      }
    }
  };

  handleChane = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="col-lg-7">
        <form className="contact-form" id="sign-up-form">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="firstName"
                  onChange={this.handleChane}
                  value={this.state.firstName}
                  className="check-form"
                  type="text"
                  placeholder="First Name*:"
                />
                <span>
                  <i className="ti-check"></i>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="lastName"
                  onChange={this.handleChane}
                  value={this.state.lastName}
                  className="check-form"
                  type="text"
                  placeholder="Last Name*:"
                />
                <span>
                  <i className="ti-check"></i>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="email"
                  onChange={this.handleChane}
                  value={this.state.email}
                  className="check-form"
                  type="text"
                  placeholder="Email Adress*:"
                />
                <span>
                  <i className="ti-check"></i>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="phone"
                  onChange={this.handleChane}
                  value={this.state.phone}
                  className="check-form"
                  type="text"
                  placeholder="Phone Number*:"
                />
                <span>
                  <i className="ti-check"></i>
                </span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <select
                  className="form-control"
                  name="userType"
                  value={this.state.userType}
                  onChange={this.handleChane}
                >
                  <option value="user">User</option>
                  <option value="miner">Miner</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="password"
                  onChange={this.handleChane}
                  value={this.state.password}
                  className="check-form"
                  type="password"
                  placeholder="Enter Password*:"
                />
                <span>
                  <i className="ti-check"></i>
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="password2"
                  onChange={this.handleChane}
                  value={this.state.password2}
                  className="check-form"
                  type="password"
                  placeholder="Confirm Password*:"
                />
                <span>
                  <i className="ti-check"></i>
                </span>
              </div>
            </div>
            <div className="col-md-12">
              {(this.props.user.success && (
                <div className="alert alert-success">
                  Registration Completed
                </div>
              )) ||
                (this.props.user.error && (
                  <div className="alert alert-danger">
                    Registration Failed Try Again
                  </div>
                ))}
              <button
                onClick={this.handleSubmit}
                className="site-btn sb-gradients mt-4"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUp));
