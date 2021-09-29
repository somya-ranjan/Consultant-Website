import React from 'react'
import "./style.css"
function Testimonial() {
    return (
        <div class="container-fluid text-center">
            <div className="row testimonial_section">
                <h1 class="font-weight-bold">people <span>about us</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis a quasi nobis. <br />Nam ipsa earum quis in quidem quasi laborum.</p>
                <div class="owl-carousel owl-theme testimonial_content_section">
                    <div class="item first prev">
                        <div class="card border-0 py-3 px-4">
                            <div class="row justify-content-center"> 
                                <img src="https://i.imgur.com/gazoShk.jpg" class="img-fluid profile-pic mb-4 mt-3"/> 
                            </div>
                            <h6 class="mb-3 mt-2">Marielle Haag</h6>
                            <p class="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
                        </div>
                    </div>
                    <div class="item show">
                        <div class="card border-0 py-3 px-4">
                            <div class="row justify-content-center"> 
                                <img src="https://i.imgur.com/oW8Wpwi.jpg" class="img-fluid profile-pic mb-4 mt-3"/> 
                            </div>
                            <h6 class="mb-3 mt-2">Ximena Vegara</h6>
                            <p class="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
                        </div>
                    </div>
                    <div class="item next">
                        <div class="card border-0 py-3 px-4">
                            <div class="row justify-content-center"> 
                                <img src="https://i.imgur.com/ndQx2Rg.jpg" class="img-fluid profile-pic mb-4 mt-3"/> 
                            </div>
                            <h6 class="mb-3 mt-2">John Paul</h6>
                            <p class="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
                        </div>
                    </div>
                    <div class="item last">
                        <div class="card border-0 py-3 px-4">
                            <div class="row justify-content-center"> 
                            <img src="https://i.imgur.com/T5aOhwh.jpg" class="img-fluid profile-pic mb-4 mt-3"/> 
                            </div>
                            <h6 class="mb-3 mt-2">William Doe</h6>
                            <p class="content mb-5 mx-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
