import React from 'react'

export default function Review() {
  return (
    <div>
      <section className="review-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 push-8">
              <img src="img/quote.png" alt="" className="quote mb-5" />
              <div className="review-text-slider owl-carousel">
                <div className="review-text">
                  <p>
                    "Securum is exciting because it shows how cheap it can be.
                    Securum is better than currency in that you don’t have to be
                    physically in the same place and, of course, for large
                    transactions, currency can get pretty inconvenient.”
              </p>
                </div>
                <div className="review-text">
                  <p>
                    "Securum is exciting because it shows how cheap it can be.
                    Securum is better than currency in that you don’t have to be
                    physically in the same place and, of course, for large
                    transactions, currency can get pretty inconvenient.”
              </p>
                </div>
                <div className="review-text">
                  <p>
                    "Securum is exciting because it shows how cheap it can be.
                    Securum is better than currency in that you don’t have to be
                    physically in the same place and, of course, for large
                    transactions, currency can get pretty inconvenient.”
              </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 pr-0 pull-3">
              <div className="review-meta-slider owl-carousel pt-5">
                <div className="author-meta">
                  <div className="author-avatar set-bg" data-setbg="img/review/1.jpg"></div>
                  <div className="author-name">
                    <h4>Aaron Ballance</h4>
                    <p>Ceo Securum</p>
                  </div>
                </div>
                <div className="author-meta">
                  <div className="author-avatar set-bg" data-setbg="img/review/2.jpg"></div>
                  <div className="author-name">
                    <h4>Jackson Nash</h4>
                    <p>Head of Design</p>
                  </div>
                </div>
                <div className="author-meta">
                  <div className="author-avatar set-bg" data-setbg="img/review/3.jpg"></div>
                  <div className="author-name">
                    <h4>Katy Abrams</h4>
                    <p>Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
