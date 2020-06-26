import React from "react";
import { withRouter } from "react-router-dom";

//redux
import { connect } from "react-redux";
import { signIn } from "../redux/actions/user-actions";

//samples
import { signInUserData } from "../utils/samples/user-samples";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) return alert("All Fields Are Necessary...");
    else {
      const user = { email, password };
      this.props.signIn(user, this.props.history);
    }
  };

  handleChane = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="col-lg-5">
        <form className="contact-form" id="sign-up-form">
          <div className="row">
            <div className="form-group col-lg-12">
              <input
                name="email"
                className="check-form"
                type="email"
                placeholder="Username / Email*:"
                value={this.state.email}
                onChange={this.handleChane}
              />
              <span>
                <i className="ti-check"></i>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-12">
              <input
                name="password"
                className="check-form"
                type="password"
                placeholder="Password*:"
                value={this.state.password}
                onChange={this.handleChane}
              />
              <span>
                <i className="ti-check"></i>
              </span>
            </div>
          </div>
          <div className="row">
            {(this.props.user.signInSuccess && (
              <div className="alert alert-success">SignIn Success</div>
            )) ||
              (this.props.user.signInError && (
                <div className="alert alert-danger">
                  Wrong Email or Password
                </div>
              ))}
            <div className="col-lg-4"></div>
            <div className="form-group col-lg-4">
              <button
                onClick={this.handleSubmit}
                className="site-btn sb-gradients mt-4"
              >
                Sign In
              </button>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  signIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn));
