import React from 'react'
import Topheader from '../Elements/Topheader'
import HeroBanner from '../Elements/Herobanner'
import ScrollingNotice from '../Elements/ScrollingNotice'

import PortalUsers from '../Elements/PortalUsers'
import StudentServices from '../Elements/StudentServices'
import Mentors from '../Elements/Mentors'
import Courses from '../Elements/Course'
import HelpDesk from '../Elements/Helpdesk'
import Howtouse2 from '../Elements/Howtouse2'
import QuickLinks from '../Elements/QuickLinks'
import Feedback from '../Elements/Feedback'
import Footer from '../Elements/Footer'
import FooterBottom from '../Elements/FooterBottom'
import FloatingButton from '../Elements/FloatingButton'
import AboutNOU from '../Elements/AboutNou'

function Home() {
  return (
    <div>
              <Topheader />
        <HeroBanner />
        <ScrollingNotice />
        <AboutNOU />
        <PortalUsers />
        <StudentServices />
        <Mentors />
        <Courses />
        <Howtouse2 />
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
