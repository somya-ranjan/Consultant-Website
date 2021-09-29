import React from 'react'
import TopBar from '../component/TopBar'
import NavBar from '../component/NavBar'
import ContactFormSetion from '../component/ContactFormSetion'
import MapSection from '../component/MapSection'
import FooterSection from '../component/FooterSection'

function ContactPage() {
    return (
        <>
            <TopBar/>
            <NavBar/>
            <ContactFormSetion/>
            <MapSection/>
            <FooterSection/>
        </>
    )
}

export default ContactPage
