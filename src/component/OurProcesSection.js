import React, { useState } from 'react'
import OurProcesApi from '../api/OurProcesApi'
import './style.css'

function OurProcesSection() {
    const [ourProcesApi, OurProcesApistate] = useState(OurProcesApi)
    return (
        <div className="container-fluid">
            <div className="our_proces_section">
                <h1>our <span>process</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis a quasi nobis. <br /> Nam ipsa earum quis in quidem quasi laborum.</p>
                <div className="row justify-content-center">
                    {
                        ourProcesApi.map((items)=>{
                            const { id, logo, heading, para} = items
                            return(
                                <div className="col-2 our_proces_section_content" key={id}>
                                    <div className="our_proces_section_content_logo">
                                        <h5>{id}</h5>
                                        <i class={logo}></i>
                                    </div>
                                    <h6>{heading}</h6>
                                    <p>{para}</p>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default OurProcesSection
