import React from "react";
// import PreLoader from '../components/PreLoader';
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Process from "../components/Process";
import Fact from "../components/Fact";
import Team from "../components/Team";
import Review from "../components/Review";
import Newsletter from "../components/Newsletter";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import { connect } from "react-redux";

function IndexPage(props) {
  // fetch("/blockchain")
  // .then(res => res.json())
  // .then(res=> {
  //   console.log(res);
  // })
  return (
    <div className="index-page">
      {/* <PreLoader /> */}
      <Header />
      <Hero />
      <About />
      <Features />
      <Process />
      <Fact />
      <Team />
      <Review />
      <Newsletter />
      <Blog />
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(IndexPage);
