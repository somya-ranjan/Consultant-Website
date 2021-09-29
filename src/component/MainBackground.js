import React from 'react'
import './style.css'

function MainBackground() {
    return (
        <div className="container-fluid ">
            <div className="row justify-content-around align-items-center main_background">
                <div className="col-md-4">
                    <h1>Lorem Ipsum</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente alias eum vitae nisi sed dolorem assumenda commodi? Molestias sed debitis maxime? Totam in, dignissimos eius maxime laboriosam beatae dolorum quasi.</p>
                    <a href="">Explore More</a>
                </div>
                <div className="col-5 d-none d-md-block">
                    <img src="media/baner_right.png" alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    )
}

export default MainBackground
