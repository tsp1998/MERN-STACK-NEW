import React from "react";
import { Link, withRouter } from "react-router-dom";

//css
import "./css/Header.css";

//redux
import { connect } from "react-redux";

class Header extends React.Component {
  signOut = () => {
    localStorage.removeItem("securum");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="header">
        <header className="header-section clearfix">
          <div className="container-fluid">
            <Link to="/" className="site-logo">
              <img src="img/logo.png" alt="" />
            </Link>
            <div className="responsive-bar">
              <i className="fa fa-bars"></i>
            </div>

            <Link to="" className="user">
              <i className="fa fa-user"></i>
            </Link>
            {localStorage.getItem("securum") === null ? (
              <Link to="/signin-signup" className="site-btn">
                Sign In
              </Link>
            ) : (
              <button
                style={{ background: "transparent" }}
                className="site-btn"
                onClick={this.signOut}
              >
                Sign Out
              </button>
            )}

            <nav className="main-menu">
              <ul className="menu-list">
                {this.props.user.currentUser &&
                  this.props.user.currentUser.userType == "miner" && (
                    <li>
                      <Link to="/blockchain">Blockchain</Link>
                    </li>
                  )}
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="">Features</Link>
                </li>
                <li>
                  <Link to="">News</Link>
                </li>
                <li>
                  <Link to="/send-coins">Send Coins</Link>
                </li>
                {/* <li><Link to="/blog">Blog</Link></li> */}
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
