import React from 'react'
import AboutNav from './aboutNav'
import AboutHero from './aboutHero'
import ProblemTry from './problemTry'
import OurTeam from './ourTeam'
import Companies from './companies'
import WorkWithUs from './workWithUs'
import Footer from '../components/footer'

const About = () => {
  return (
    <div>
        <AboutNav/>
        <AboutHero/>
        <ProblemTry/>
        <OurTeam/>
        <Companies/>
        <WorkWithUs/>
        <Footer/>

    </div>
  )
}

export default About