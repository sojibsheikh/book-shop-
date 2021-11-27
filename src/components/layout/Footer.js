import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
    return (
        <React.Fragment>
            <div class="container-fluid bg-dark px-0">
        
                <div class="dropdown-divider mt-3"></div>

                <div class="row mt-3 mx-0 px-0">
                    <div class="col-md-12 text-center">
                        <img src="img/amazon_logo_white.png" height="30" width="100" alt="logo white footer" />
                    </div>
                </div>


                <div class="py-3 mt-3 shadow-lg" style={{backgroundColor: "131a22", fontSize: "12px"}}>
                    <div class="container">

                        <div class="row text-white">

                            <div class="col-md-3">
                                <p>Get to know us</p>
                                <a href="/" class="text-white">About</a> <br />
                                <a href="/" class="text-white">Careers</a> <br />
                                <a href="/" class="text-white">Press Release</a> <br />
                                <a href="/" class="text-white">Investment</a> <br />
                                <a href="/" class="text-white">Offers</a> <br />
                            </div>

                            <div class="col-md-3">
                                <p>Connect With Us</p>
                                <a href="/" class="text-white">Facebook</a> <br />
                                <a href="/" class="text-white">Twitter</a> <br />
                                <a href="/" class="text-white">Instagram</a> <br />
                            </div>

                            <div class="col-md-3">
                                <p>Make Money With Us</p>
                                <a href="/" class="text-white">Sell on Amazon</a> <br />
                                <a href="/" class="text-white">Affiliate Marketing</a> <br />
                                <a href="/" class="text-white">Fullfilment Center</a> <br />
                                <a href="/" class="text-white">Advertise Your Product</a> <br />
                                <a href="/" class="text-white">Amazon Pay</a> <br />
                            </div>

                            <div class="col-md-3">
                                <p>Let Us Help You</p>
                                <a href="/" class="text-white">COVID 19</a> <br />
                                <a href="/" class="text-white">Your Account</a> <br />
                                <a href="/" class="text-white">Returns</a> <br />
                                <a href="/" class="text-white">Funding</a> <br />
                                <a href="/" class="text-white">Help</a> <br />
                            </div>

                        </div>


                        <div class="row my-5">
                            <div class="col-md-12 text-center text-white">
                                <p>
                                    <i class="far fa-copyright"></i> 1996-2020, Amazon.com Inc.
                                </p>
                            </div>
                        </div>

                    </div>
                </div> 

            </div>
        </React.Fragment>
    )
}

Footer.propTypes = {

}

export default Footer

