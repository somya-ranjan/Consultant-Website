import React, { useState } from 'react'
import PortfolioApi from '../api/PortfolioSectionApi';
import './style.css'

function PortfolioSection() {

    const [portfolioApiItem, setPortfolioApi] = useState(PortfolioApi);

    const filterItem =(categoryItems)=>{
        const updateItems = PortfolioApi.filter((curElem)=>{
            return(
                curElem.category === categoryItems
            )
        });
        setPortfolioApi(updateItems)
    }
    return (
        <div className="container-fluid portfolio_section_main">
            <div className="portfolio_section">
                <h1>our <span>portfolio</span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis a quasi nobis. <br />Nam ipsa earum quis in quidem quasi laborum.</p>
                <ul className="d-flex justify-content-center">
                    <li onClick={()=>setPortfolioApi(PortfolioApi)}>all</li>
                    <li onClick={()=>filterItem("web design")}>web design</li>
                    <li onClick={()=>filterItem("graphic design")}>graphic design</li>
                    <li onClick={()=>filterItem("branding")}>branding</li>
                    <li onClick={()=>filterItem("marketing")}>marketing</li>
                </ul>
                <div className="row justify-content-center">
                    {
                        portfolioApiItem.map((items)=>{
                            const { id, logo, heading } = items;
                            return(
                                <div className="col-4 portfolio_section_content" key={id}>
                                    <i class={logo}></i>
                                    <h6>{heading}</h6>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PortfolioSection
