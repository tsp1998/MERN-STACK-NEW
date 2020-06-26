import React from "react";

//css
import "./css/BlockchainPage.css";

//redux
import { connect } from "react-redux";

//Components
import Header from "../components/Header";
import Blockchain from "../components/Blockchain";
import Footer from "../components/Footer";

function BlockchainPage(props) {
  // fetch("/blockchain")
  // .then(res => res.json())
  // .then(res=> {
  //   console.log(res);
  // })
  return (
    <div className="index-page">
      <div className="header">
        <Header style={{}} />
      </div>
      <Blockchain />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(BlockchainPage);
