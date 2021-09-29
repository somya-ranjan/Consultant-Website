import React from 'react'
import { NavLink } from 'react-router-dom'

function FooterSection() {
    return (
        <div className="container-fluid">
            <div className="row footer_section justify-content-evenly">
                <div className="col-md-3 footer_section_content">
                    <h1>S2 <span>Solution</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cupiditate neque perspiciatis aliquid officiis! Iusto accusamus soluta fugiat eligendi perferendis ipsa rerum, dolor vel eos, repellendus, ab hic nobis. Tempore!</p>
                </div>
                <div className="col-md-2 footer_section_content">
                    <h3>services</h3>
                    <ul>
                        <li> <NavLink to="/service">web design</NavLink> </li>
                        <li> <NavLink to="/service">graphic design</NavLink> </li>
                        <li> <NavLink to="/service">seo</NavLink> </li>
                        <li> <NavLink to="/service">branding</NavLink> </li>
                        <li> <NavLink to="/service">marketing</NavLink> </li>
                    </ul>
                </div>
                <div className="col-md-2 footer_section_content">
                    <h3>useful links</h3>
                    <ul>
                        <li> <NavLink to="/">home</NavLink> </li>
                        <li> <NavLink to="/about">about</NavLink> </li>
                        <li> <NavLink to="/service">services</NavLink> </li>
                        <li> <NavLink to="/review">reviews</NavLink> </li>
                        <li> <NavLink to="/contact">contact us</NavLink> </li>
                    </ul>
                </div>
                <div className="col-md-2 footer_section_content">
                    <h3>contact</h3>
                    <ul>
                        <li> <i class="fad fa-phone-alt"></i> 9898125022 </li>
                        <li> <i class="fad fa-phone-alt"></i> 9898125025 </li>
                        <li> <i class="fad fa-envelope"></i> s2@info.com </li>
                    </ul>
                    <div className="row follow_us_section">
                        <div className="col-12 follow_us_content_section">
                            <h3>follow us</h3>
                            <a href="https://www.facebook.com/ranjansomya.sethy" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com/somya_ranjan_" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                            <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-google-plus-g"></i></a>
                            <a href="https://www.linkedin.com/in/somya-ranjan/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                            <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row  align-items-center copy_rignt">
                <div className="col-6">
                    <h4> @ S2 Solution</h4>
                </div>
                <div className="col-6 credit">
                    <h5> <a href="https://www.linkedin.com/in/somya-ranjan/" target="_blank">devloped by <img src="./media/s.png" alt="" /></a></h5>
                </div>
            </div>
        </div>
    )
}

export default FooterSection
