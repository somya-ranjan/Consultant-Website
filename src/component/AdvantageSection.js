import React, { useState } from 'react'
import AdvantageApi from '../api/AdvantagesApi'
import './style.css'

function AdvantageSection() {
    const [advApi, setAdvApi] = useState(AdvantageApi)
    return (
        <div className="container-fluid">
            <div className="advantage_section">
                <h1>our <span>advantages</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis a quasi nobis. <br /> Nam ipsa earum quis in quidem quasi laborum.</p>
                <div className="row justify-content-evenly">
                    {
                        advApi.map((item)=>{
                            return(
                                <div className="col-lg-2 col-md-5 advantage_content_section" key={item.id}>
                                    <i className={item.logo}></i>
                                    <h6>{item.heading}</h6>
                                    <p>{item.para}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AdvantageSection
