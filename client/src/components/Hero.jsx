import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import { changeEmail } from "../redux/actions/user-actions";
// import { Link } from 'react-router-dom'

function Hero(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push("/signin-signup");
  };
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 hero-text">
              <h3 style={{ fontSize: "40px" }}>
                Invest in <span>Securum</span> <br />
                Securum Trading
              </h3>
              <h6>
                Use modern progressive technologies of Securum to earn money
              </h6>
              <h4
                id="blink_text"
                style={{
                  textAlign: "center",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                Sign Up for free and get 20 Securum Coins
              </h4>
              <form onSubmit={handleSubmit} className="hero-subscribe-from">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={props.email}
                  onChange={(e) => props.changeEmail(e.target.value)}
                />
                <button className="site-btn sb-gradients">Get Started</button>
              </form>
            </div>
            <div className="col-md-6">
              <img src="img/laptop.png" className="laptop-image" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    email: state.user.email,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Hero));
