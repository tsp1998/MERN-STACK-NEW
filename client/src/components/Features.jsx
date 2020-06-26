import React from 'react'
import { Link } from 'react-router-dom'

export default function Features() {
  return (
    <div>
      <section className="features-section spad gradient-bg">
        <div className="container text-white">
          <div className="section-title text-center">
            <h2>Our Features</h2>
            <p>Securum is the simplest way to exchange money at very low cost.</p>
          </div>
          <div className="row">
            {/* <!-- feature --> */}
        <div className="col-md-6 col-lg-4 feature">
              <i className="ti-mobile"></i>
              <div className="feature-content">
                <h4>Mobile Apps</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
            </p>
                <Link to="" className="readmore">Readmore</Link>
              </div>
            </div>
            {/* <!-- feature --> */}
        <div className="col-md-6 col-lg-4 feature">
              <i className="ti-shield"></i>
              <div className="feature-content">
                <h4>Safe & Secure</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
            </p>
                <Link to="" className="readmore">Readmore</Link>
              </div>
            </div>
            {/* <!-- feature --> */}
        <div className="col-md-6 col-lg-4 feature">
              <i className="ti-wallet"></i>
              <div className="feature-content">
                <h4>Wallet</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
            </p>
                <Link to="" className="readmore">Readmore</Link>
              </div>
            </div>
            {/* <!-- feature --> */}
        <div className="col-md-6 col-lg-4 feature">
              <i className="ti-headphone-alt"></i>
              <div className="feature-content">
                <h4>Experts Support</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
            </p>
                <Link to="" className="readmore">Readmore</Link>
              </div>
            </div>
            {/* <!-- feature --> */}
        <div className="col-md-6 col-lg-4 feature">
              <i className="ti-reload"></i>
              <div className="feature-content">
                <h4>Instant Exchange</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
            </p>
                <Link to="" className="readmore">Readmore</Link>
              </div>
            </div>
            {/* <!-- feature --> */}
        <div className="col-md-6 col-lg-4 feature">
              <i className="ti-panel"></i>
              <div className="feature-content">
                <h4>Recuring Buys</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
            </p>
                <Link to="" className="readmore">Readmore</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
