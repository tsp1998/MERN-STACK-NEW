import React from 'react'
import PageInfo from '../components/PageInfo'
import SignUp from '../components/SignUp'
// import PreLoader from '../components/PreLoader'
import Header from '../components/Header'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import SignIn from '../components/SignIn'

export default function SignUpPage() {
  return (
    <div className="sign-up-page">
      {/* <PreLoader /> */}
      <Header />
      <PageInfo />
      <section className="contact-page spad">
        <div className="container">
          <div className="row">
            <SignIn />
            <SignUp />
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </div>
  )
}