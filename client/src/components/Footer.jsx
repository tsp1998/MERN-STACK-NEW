import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="footer-section">
        <div className="container">
          <div className="row spad">
            <div className="col-md-6 col-lg-3 footer-widget">
              <img src="img/logo.png" className="mb-4" alt="" />
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia dese mollit anim id est laborum.
          </p>
              <span>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright &copy;
            <script>
                  document.write(new Date().getFullYear());
            </script>
                All rights reserved | This template is made with
            <i className="fa fa-heart-o" aria-hidden="true"></i> by
            <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </span>
            </div>
            <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
              <h5 className="widget-title">Resources</h5>
              <ul>
                <li><Link to="#">How to Buy Coin</Link></li>
                <li><Link to="#">Coin Overview</Link></li>
                <li><Link to="#">Blog News</Link></li>
                <li><Link to="#">How to Sell Coin</Link></li>
                <li><Link to="#">Purchase Theme</Link></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 offset-lg-1 footer-widget">
              <h5 className="widget-title">Quick Links</h5>
              <ul>
                <li><Link to="#">Network Stats</Link></li>
                <li><Link to="#">Block Explorers</Link></li>
                <li><Link to="#">Governance</Link></li>
                <li><Link to="#">Exchange Markets</Link></li>
                <li><Link to="#">Get Theme</Link></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 footer-widget pl-lg-5 pl-3">
              <h5 className="widget-title">Follow Us</h5>
              <div className="social">
                <Link to="" className="facebook"><i className="fa fa-facebook"></i></Link>
                <Link to="" className="google"><i className="fa fa-google-plus"></i></Link>
                <Link to="" className="instagram"><i className="fa fa-instagram"></i></Link>
                <Link to="" className="twitter"><i className="fa fa-twitter"></i></Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div className="col-lg-4 store-links text-center text-lg-left pb-3 pb-lg-0">
                <Link to=""><img src="img/appstore.png" alt="" className="mr-2" /></Link>
                <Link to=""><img src="img/playstore.png" alt="" /></Link>
              </div>
              <div className="col-lg-8 text-center text-lg-right">
                <ul className="footer-nav">
                  <li><Link to="">DPA</Link></li>
                  <li><Link to="">Terms of Use</Link></li>
                  <li><Link to="">Privacy Policy </Link></li>
                  <li><Link to="">support@company.com</Link></li>
                  <li><Link to="">(123) 456-7890</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
