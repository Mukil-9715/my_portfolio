import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import{MenuOutlined} from "@ant-design/icons"
import "./Nav.css"

const Nav = () => {
  return (
    <nav className='nav'>
        {/* <div className="container"> */}
            <Link to="" className="brand-link th1">Mukilan</Link>
            {/* <div className="list"> */}
                <ul className="listmain">
                    <li className="list-item th3">About</li>
                    <li className="list-item th3">Home</li>
                    <li className="list-item th3">Skill</li>
                    <li className="list-item th3">Project</li>
                    <li className="list-item th3">Contact</li>
                </ul>
            {/* </div> */}
            <Button className='toggler-button'><MenuOutlined /></Button>
        {/* </div> */}
    </nav>
  )
}

export default Nav