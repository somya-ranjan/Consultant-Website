import React from 'react'
import './style.css'
function TopBar() {
    return (
        <div className="container-fluid bg-dark top_bar d-none d-lg-block">
            <div className="row justify-content-between">
                <div className="col-5 text-light d-flex align-items-center top_bar_left">
                    <h6> <a href="https://www.facebook.com/ranjansomya.sethy" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a> </h6>
                    <h6> <a href="https://twitter.com/somya_ranjan_" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a> </h6>
                    <h6> <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fab fa-google-plus-g"></i></a> </h6>
                    <h6> <a href="https://www.linkedin.com/in/somya-ranjan/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a> </h6>
                    <h6> <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a> </h6>
                </div>
                <div className="col-lg-6 col-xl-4 text-light d-flex justify-content-evenly align-items-center top_bar_right">
                    <h6><i className="fas fa-phone-alt"></i> +91 5112122552</h6>
                    <h6><i className="fas fa-phone-alt"></i> +91 5146163464</h6>
                    <button>Call Me Back</button>
                </div>
            </div>
        </div>
    )
}

export default TopBar
