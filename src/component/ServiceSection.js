import React, { useState } from 'react'
import ServiceSectionApi from '../api/ServiceSectionApi'
import "./style.css"
function ServiceSection() {
    const [serviceApi, setServiceApi] = useState(ServiceSectionApi)
    return (
        <div className="container-fluid">
        <div className="services_section">
            <h1>Our <span>services</span></h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis a quasi nobis. <br /> Nam ipsa earum quis in quidem quasi laborum.</p>
            <div className="row justify-content-evenly">
                {
                    serviceApi.map((items)=>{
                        return(
                            <div className="col-xl-2 col-md-5 services_section_content" key={items.id}>
                                <i class={items.logo}></i>
                                <h6>{items.heading}</h6>
                                <p>{items.para}</p>
                                <a href="">read more</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </div>
    )
}

export default ServiceSection
