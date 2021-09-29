import React from 'react'
import TopBar from '../component/TopBar'
import NavBar from '../component/NavBar'
import ServiceSection from '../component/ServiceSection'
import PortfolioSection from '../component/PortfolioSection'
import OurProcesSection from '../component/OurProcesSection'
import FooterSection from '../component/FooterSection'
function ServicePage() {
    return (
        <>
            <TopBar/>
            <NavBar/>
            <ServiceSection/>
            <PortfolioSection/>
            <OurProcesSection/>
            <FooterSection/>
        </>
    )
}

export default ServicePage
