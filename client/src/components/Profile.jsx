import React from "react";
import { Link } from "react-router-dom";
import DashBoard from "./DashBoard";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      account: {},
      recipient: "",
      coins: "",
      msg: "",
      users: [],
    };
  }
  componentDidMount() {
    // let token = localStorage.getItem("mern");
    // if (token) {
    //   jwt.verify(token, "mern", async (err, decoded) => {
    //     if (err) {
    //       console.log("err");
    //       console.error(err);
    //     } else {
    //       console.log("decoded");
    //       await this.setState({
    //         user: { ...decoded },
    //       });
    //       await fetch(`/account/${this.state.user._id}`)
    //         .then((res) => res.json())
    //         .then((res) => {
    //           this.setState({
    //             account: res.account,
    //           });
    //         });
    //     }
    //   });
    // }
    // fetch("/users")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     this.setState({
    //       users: res.users,
    //     });
    //   });
  }

  render() {
    return (
      <div>
        <section className="blog-page spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <DashBoard />
              </div>
              <div className="col-lg-4 col-md-6 sideber pt-5 pt-lg-0">
                <div className="widget-area">
                  <h4 className="widget-title">Profile</h4>
                  <p>Balance: {this.state.account.balance} </p>
                  <form className="widget-subscribe-from">
                    <input type="text" placeholder="Search Here..." />
                    <button className="site-btn sb-full-- sb-gradients">
                      Search
                    </button>
                  </form>
                </div>
                <div className="widget-area">
                  <div className="widget">
                    <h4 className="widget-title">Categories</h4>
                    <ul>
                      <li>
                        <Link to="#">DashBoard</Link>
                      </li>
                      <li>
                        <Link to="#">Buy/Sell</Link>
                      </li>
                      <li>
                        <Link to="#">Send/Request</Link>
                      </li>
                      <li>
                        <Link to="#">Accounts</Link>
                      </li>
                      <li>
                        <Link to="#">Tools</Link>
                      </li>
                      <li>
                        <Link to="#">Settings</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="widget">
                    <h4 className="widget-title">Popular Posts</h4>
                    <ul className="popular-posts">
                      <li>
                        <span>22 dec 2018</span>
                        <h5>
                          <Link to="">
                            Lightning and Mainnet: A Look at the Protocol’s
                            Hype, Trials, and Error
                          </Link>
                        </h5>
                      </li>
                      <li>
                        <span>22 dec 2018</span>
                        <h5>
                          <Link to="">
                            This Week in Securum: Japan Gets Goxxed and Iota
                            Gets Into a Tangle
                          </Link>
                        </h5>
                      </li>
                      <li>
                        <span>22 dec 2018</span>
                        <h5>
                          <Link to="">
                            Securum Futures Report Shows Bullish Sentiment Is In
                            the Air
                          </Link>
                        </h5>
                      </li>
                      <li>
                        <span>22 dec 2018</span>
                        <h5>
                          <Link to="">
                            Why Venezuela’s New National Cryptocurrency El Petro
                            Will Fail
                          </Link>
                        </h5>
                      </li>
                    </ul>
                  </div>
                  <div className="widget">
                    <h4 className="widget-title">Recent Tweets</h4>
                    <ul className="twitter-widget">
                      <li>
                        <h5>Why Does The Securum Price Move So Much?</h5>
                        <Link to="https://t.co/MSQVkamNwa">
                          https://t.co/MSQVkamNwa
                        </Link>
                        <span>4 days ago</span>
                      </li>
                      <li>
                        <h5>How Can I Trade Securum without an Exchange?</h5>
                        <Link to="https://t.co/MSQVkamNwa">
                          https://t.co/MSQVkamNwa
                        </Link>
                        <span>4 days ago</span>
                      </li>
                    </ul>
                  </div>
                  <div className="widget">
                    <h4 className="widget-title">Follow Us</h4>
                    <div className="social">
                      <Link to="" className="facebook">
                        <i className="fa fa-facebook"></i>
                      </Link>
                      <Link to="" className="google">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                      <Link to="" className="instagram">
                        <i className="fa fa-instagram"></i>
                      </Link>
                      <Link to="" className="twitter">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
