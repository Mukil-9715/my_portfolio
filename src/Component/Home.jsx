import React from 'react'
import "./Home.css"
import pic from "../Assest/boy.png"


const Home = () => {
  return (
    <section className='home-content'>
        <div className="homeleft">
            <h2 className="">hey It's Mukil</h2>
            <h2 className="">I am a frontend Develper</h2>
            <p className="">Welcome to my digital playground! I'm [Your Name], a frontend magician, and I'm on a mission to turn ideas into captivating web realities.</p>
            <div className="maintext th1">Welcome to my digital playground!</div>
            <div className="maintext th1">I'm Mukilan, a frontend magician,</div>
            <div className="maintext th3">and I'm on a mission to turn ideas into captivating web realities.</div>
            
            </div>
        <div className="homeright">
            <img className='' src={pic}alt=''/>
        </div>
    </section>
  )
}

export default Home