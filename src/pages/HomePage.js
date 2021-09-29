import React from 'react'
import TopBar from '../component/TopBar'
import NavBar from '../component/NavBar'
import MainBackground from '../component/MainBackground'
import AdvantageSection from '../component/AdvantageSection'
import AboutSection from '../component/AboutSection'
import ServiceSection from '../component/ServiceSection'
import PortfolioSection from '../component/PortfolioSection'
import OurProcesSection from '../component/OurProcesSection'
import OurSkillsSection from '../component/OurSkillsSection'
import Testimonial from '../component/Testimonial'
import FooterSection from '../component/FooterSection'
function HomePage() {
    return (
        <>
            <TopBar/>
            <NavBar/>
            <MainBackground/>
            <AdvantageSection/>
            <AboutSection/>
            <ServiceSection/>
            <PortfolioSection/>
            <OurProcesSection/>
            <OurSkillsSection/>
            <Testimonial/>
            <FooterSection/>

        </>
    )
}

export default HomePage
