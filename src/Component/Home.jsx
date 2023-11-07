import React from 'react'
import "./Home.css"
import pic from "../Assest/boy.png"
import pics from "../Assest/folks-man-programmer-writing-code.png"


const Home = () => {
  return (
    <section id='Home' className='home-content black'>
        <div className="  container row px-auto  "> 
        <div className="homeleft col-md py-5"> 
              {/* <h2 className="">hey It's Mukil</h2>
              <h2 className="">I am a frontend Develper</h2>
              <p className="">Welcome to my digital playground! I'm [Your Name], a frontend magician, and I'm on a mission to turn ideas into captivating web realities.</p> */}
            <div className=" text-justify pb-2 w-100 th1">Welcome to my digital playground!</div>
            <div className="maintext pb-2 th1">I'm Mukilan, a frontend magician,</div>
            <div className="maintext  th3">and I'm on a mission to turn ideas into captivating web realities.</div>
            
            </div>
        <div className="homeright col-md p-0">
            <img className='Destop-picture' src={pic}alt=''/>
            <img className='Phone-picture p-0' src={pics}alt=''/>
        </div>
        </div>
    </section>
  )
}

export default Home