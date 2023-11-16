import { Button } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import{MenuOutlined} from "@ant-design/icons"
import "./Nav.css"

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setisShow] = useState(false);

  const toggleOpenClass = () => {
    setIsOpen(!isOpen);
    setisShow(!isShow);
  };


  return (
    <nav className='nav sticky-top'>
            <Link to="/" className="brand-link th1"> <span className='clr th1'>&lt; </span>Mukilan<span className='th1 clr'> /&gt;</span></Link>
                <ul className="listmain">
                    <li className="list-item btn th3"><Link className='li-btn' to={"/"}>Home</Link></li>
                    <li className="list-item btn th3"><Link  className='li-btn' to={"/AboutModules"}>About</Link></li>
                    <li className="list-item btn th3"><Link  className='li-btn' to={"/ProjectModules"}>Project</Link></li>
                    <li className="list-item btn th3"><Link  className='li-btn' to={"/Contact"}>Contact</Link></li>
                </ul>
            <Button onClick={toggleOpenClass} className='toggler-button'><MenuOutlined style={{width:"70 px"}} /></Button>
                <ul className={`dropdown ${isOpen ? 'open' : ''} p-0`}>
                    <li className="list-items btn th3"><Link className={`li-btns ${isShow ? 'show' : ''}`} to={"/"}>Home</Link></li>
                    <li className="list-items btn th3"><Link className={`li-btns ${isShow ? 'show' : ''}`} to={"/AboutModules"}>About</Link></li>
                    <li className="list-items btn th3"><Link className={`li-btns ${isShow ? 'show' : ''}`} to={"/ProjectModules"}>Project</Link></li>
                    <li className="list-items btn th3"><Link className={`li-btns ${isShow ? 'show' : ''}`} to={"/Contact"}>Contact</Link></li>
                </ul>
    </nav>
  )
}

export default Nav