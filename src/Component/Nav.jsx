import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import{MenuOutlined} from "@ant-design/icons"
import "./Nav.css"

const Nav = () => {
  return (
    <nav className='nav sticky-top'>
        {/* <div className="container"> */}
            <Link to="/" className="brand-link th1"> <span className='clr th1'>&lt; </span>Mukilan<span className='th1 clr'> /&gt;</span></Link>
            {/* <div className="list"> */}
                <ul className="listmain">
                    <li className="list-item btn  th3"><Link className='li-btn' to={"/"}>Home</Link></li>
                    <li className="list-item btn th3"><Link  className='li-btn' to={"/AboutModules"}>About</Link></li>
                    <li className="list-item btn th3"><Link  className='li-btn' to={"/ProjectModules"}>Project</Link></li>
                    <li className="list-item btn th3"><Link  className='li-btn' to={"/Contact"}>Contact</Link></li>
                </ul>
            {/* </div> */}
            <Button className='toggler-button'><MenuOutlined style={{width:"70 px"}} /></Button>
        {/* </div> */}
    </nav>
  )
}

export default Nav