import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <section className="about-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6 about-text">
              <h2>What is Securum</h2>
              <h5>
                Securum is an innovative payment network and a new kind of money.
          </h5>
              <p>
                Securum is one of the most important inventions in all of human
                history. For the first time ever, anyone can send or receive any
                amount of money with anyone else, anywhere on the planet,
                conveniently and without restriction. It’s the dawn of a better,
                more free world.
          </p>
              <Link to="" className="site-btn sb-gradients sbg-line mt-5">Get Started</Link>
            </div>
          </div>
          <div className="about-img">
            <img src="img/about-img.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}
