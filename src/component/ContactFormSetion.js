import React from 'react'
import './style.css'
function ContactFormSetion() {
    
    return (
        <div className="container-fluid ">
            <div className="row justify-content-center contact_form_setion">
                <h1>start your new project</h1>
                <form className="row justify-content-evenly">
                    <div className="col-md-3 contact_form_content_section">
                        <input type="text" autoComplete="off" required placeholder="Enter Your Name"/>
                    </div>
                    <div className="col-md-3 contact_form_content_section">
                        <input type="email" autoComplete="off" required placeholder="Enter Your Email"/>
                    </div>
                    <div className="col-md-3 contact_form_content_section">
                        <input type="number" autoComplete="off" required placeholder="Enter Your Phone"/>
                    </div>
                    <div className="col-md-2 contact_form_content_section">
                        <button>send request</button>
                    </div>
                </form>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum assumenda incidunt exercitationem nesciunt sed quas! Totam, tempora nisi earum facilis <br /> sequi voluptatibus enim recusandae exercitationem quis odio, fugit consequuntur ducimus.</p>
            </div>
        </div>
    )
}

export default ContactFormSetion
