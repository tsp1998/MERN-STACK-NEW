import React from 'react'

export default function Fact() {
  return (
    <div>
      <section className="fact-section gradient-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="fact">
                <h2>60</h2>
                <p>
                  Support <br />
                  Countries
            </p>
                <i className="ti-basketball"></i>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="fact">
                <h2>12K</h2>
                <p>
                  Transactions <br />
                  per hour
            </p>
                <i className="ti-panel"></i>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="fact">
                <h2>5B</h2>
                <p>
                  Largest <br />
                  Transactions
            </p>
                <i className="ti-stats-up"></i>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="fact">
                <h2>240</h2>
                <p>
                  Years <br />
                  of Experience
            </p>
                <i className="ti-user"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
