import React from 'react'
import PageInfo from '../components/PageInfo'
// import PreLoader from '../components/PreLoader'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import SendCoins from '../components/SendCoins'

export default function SendCoinsPage() {
  return (
    <div className="sign-up-page">
      {/* <PreLoader /> */}
      <Header />
      <PageInfo />
      <section className="contact-page spad">
        <div className="container">
          <div className="row">
            <SendCoins />
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  )
}