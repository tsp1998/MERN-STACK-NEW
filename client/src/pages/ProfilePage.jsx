import React from "react";
import { withRouter } from "react-router";

//redux
import { connect } from "react-redux";

//components
// import PreLoader from '../components/PreLoader';
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
// import DashBoard from '../components/DashBoard'
import Profile from "../components/Profile";
import PageInfo from "../components/PageInfo";

class ProfilePage extends React.Component {
  render() {
    if (localStorage.getItem("securum") === null) this.props.history.push("/");
    return (
      <div className="profile-page">
        {/* <PreLoader /> */}
        <Header />
        <PageInfo />
        <Profile />
        <Newsletter />
        <Footer />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfilePage));
