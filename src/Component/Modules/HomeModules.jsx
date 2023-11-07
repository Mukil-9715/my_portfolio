import React from 'react'
import About from '../About'
import Home from '../Home'
import Project from '../Project'
import Projects from '../Projects'
import Contact from '../Contact'
import Skill from '../Skill'
import ScrollToTop from '../ScrollToTop'
// import Ct from '../Ct'

const HomeModules = () => {
  return (
    <div>
        <ScrollToTop/>
        <Home/>
        <About/>
        <Skill />
        <Project/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default HomeModules