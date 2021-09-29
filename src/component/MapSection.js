import React from 'react'
import './style.css'

function MapSection() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center map_section">
                <h1>our <span>contact</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis a quasi nobis. <br />Nam ipsa earum quis in quidem quasi laborum.</p>
                <div className="col-12">
                    <h2><i class="far fa-map-marker-alt"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit,  Hic eos nesciunt odit</h2>
                </div>
                <div className="row justify-content-center pt-2">
                    <div className="col-3">
                        <h2><i class="fad fa-phone-alt"></i>9898125022</h2>
                    </div>
                    <div className="col-3">
                        <h2><i class="fad fa-phone-alt"></i>9898125025</h2>
                    </div>
                    <div className="col-3">
                        <h2><i class="fad fa-envelope"></i>s2@info.com</h2>
                    </div>
                </div>
                <div className="col-12">
                    <iframe src=
                        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59891.779238801864!2d86.13212521521116!3d20.249036474904592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19822fbc87ba77%3A0xc43e8674c6ef0301!2sJagatsinghpur%2C%20Odisha!5e0!3m2!1sen!2sin!4v1629540857653!5m2!1sen!2sin">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default MapSection
