import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import{MenuOutlined} from "@ant-design/icons"
import "./Nav.css"

const Nav = () => {
  return (
    <nav className='nav sticky-top'>
        {/* <div className="container"> */}
            <Link to="" className="brand-link th1">Mukilan</Link>
            {/* <div className="list"> */}
                <ul className="listmain">
                    <li className="list-item th3"><Link to={"#About"}>About</Link></li>
                    <li className="list-item th3"><Link to={"#Home"}>Home</Link></li>
                    <li className="list-item th3"><Link to={"#Skill"}>Skill</Link></li>
                    <li className="list-item th3"><Link to={"#Project"}>Project</Link></li>
                    <li className="list-item th3"><Link to={"#Contact"}>Contact</Link></li>
                </ul>
            {/* </div> */}
            <Button className='toggler-button'><MenuOutlined /></Button>
        {/* </div> */}
    </nav>
  )
}

export default Nav