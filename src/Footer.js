import React from 'react'

const Footer = () => {
    return (
        <div className="footer__container">
    <div className="footer-div">
    <div className="footer-1">
    <section className="social__media">
        <div className="social__media--wrap">
            <div className="footer__logo">
                <a href="/" id="footer__logo">ComprasWorld</a>
                <br/>
                <br/>
                <div className="social__icons">
                    <a href="/" className="social__icon--link" target="_blank"><i className="fab fa-facebook"></i></a>
                    <a href="/" className="social__icon--link"><i className="fab fa-instagram"></i></a>
                    <a href="/" className="social__icon--link"><i className="fab fa-linkedin"></i></a>
                    <a href="/" className="social__icon--link"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </section>
    </div>
    <div className="footer-2">

    <div className="footer__links">
        <div className="footer__link--wrapper">
            <div className="footer__link--items">
                <h2>Quick Links</h2>
                <a href="/sign__up">Home</a> <a href="/">About ComprasWorld</a>
                <a href="/">Contact Us</a> <a href="/">Login</a>
                <a href="/">Register</a>
            </div>
            <div className="footer__link--items">
                <h2>Support</h2>
                <a href="/">Find nearest Store</a> 
                <a href="/">Report Complaint</a>
                <a href="/">Our Partners</a>
                <a href="/">Careers</a>
                <a href="/">Chat with us</a>
            </div>
        </div>
        <div className="footer__link--wrapper">
            <div className="footer__link--items">
                <h2>Contact Info</h2>
                <a href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="skyblue" className="bi bi-geo-alt-fill"
                        viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg><p><span>Compras corp, Room 30-Ar</span>
                  Cochin, Kerala
                  India 123456</p>
                </a> 
                <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="skyblue" className="bi bi-telephone-inbound-fill"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z" />
                </svg> +91 7510726034</a>

                <a href="/">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="skyblue" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path
                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                </svg> info@ComprasWorld.com</a> 
            </div>
        </div>
    </div>
    </div>
    </div>
    <hr color="grey " width="100%" size="1.25"/>
   <br/> 
<p className="website__rights">© ComprasWorld 2021. All rights reserved</p>
</div>

)
}
    

export default Footer;
