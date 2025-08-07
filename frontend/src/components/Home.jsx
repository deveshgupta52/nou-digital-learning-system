import React from 'react'
import Topheader from '../Elements/Topheader'
import HeroBanner from '../Elements/Herobanner'
import ScrollingNotice from '../Elements/ScrollingNotice'
import AboutSection from '../Elements/AboutSection'
import PortalUsers from '../Elements/PortalUsers'
import StudentServices from '../Elements/StudentServices'
import Mentors from '../Elements/Mentors'
import Courses from '../Elements/Course'
import HelpDesk from '../Elements/Helpdex'
import HowToUse from '../Elements/HowtoUse'
import QuickLinks from '../Elements/QuickLinks'
import Feedback from '../Elements/Feedback'
import Footer from '../Elements/Footer'
import FooterBottom from '../Elements/FooterBottom'
import FloatingButton from '../Elements/FloatingButton'

function Home() {
  return (
    <div>
              <Topheader />
        <HeroBanner />
        <ScrollingNotice />
        <AboutSection />
        <PortalUsers />
        <StudentServices />
        <Mentors />
        <Courses />
        <HowToUse />
        <HelpDesk />
        <QuickLinks />
        <Feedback />
        <Footer />
        <FooterBottom />
        <FloatingButton />
    </div>
  )
}

export default Home
