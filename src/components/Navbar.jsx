import React from 'react'
import { FaCalendar, FaClock, FaDollarSign, FaParagraph, FaBell, FaSearch} from 'react-icons/fa'
import { IoGridOutline, IoLogoSteam,  IoBarChartOutline, IoFolderOpen  } from 'react-icons/io5'
import { MdEventNote } from "react-icons/md";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="label-logo">
           <div className="logo">
                <img src="/public/image/logo1.jpeg" alt=""  width={20} height={20}/>
                <h3>Metplay</h3>
           </div>
           <div className="morning">
                <p>Good Morning</p>
                <h3>Ralph Schliefer</h3>
           </div>
            <div className="input-search">
            <input type="text" placeholder='Search anything' />
            <FaSearch className='search-icon'/>
            </div>
           <div className="bell-icon">
                <FaBell className='bell-in'/>
           </div>
           <div className="folder-icon">
           <IoFolderOpen className='floder'/>
           </div>
           <div className="hr-page">
                <img src="/public/image/man.jpeg" alt="" width={20} height={20} />
                <div className='rephel'>
                    <h3>Ralph Schliefer</h3>
                    <p>HR Manger</p>
                </div>
           </div>
        </div>

        <div className="nav-link">
            <ul>
                <li>
                    <Link to="/">
                        <IoGridOutline className='nav-icon'/>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link>
                        <IoLogoSteam className='nav-icon'/>
                        <span>Team</span>
                    </Link>
                </li>
                <li>
                    <Link>
                        < IoBarChartOutline className='nav-icon'/>
                        <span>Preformance</span>
                    </Link>
                </li>
                <li>
                    <Link to="/employees">
                        < FaCalendar className='nav-icon'/>
                        <span>Schedule</span>
                    </Link>
                </li>
                <li>
                    <Link>
                        < CiDollar className='nav-icon'/>
                        <span>Payroll</span>
                    </Link>
                </li>
                <li>
                    <Link to='/event'>
                        < MdEventNote className='nav-icon'/>
                        <span>Event</span>
                    </Link>
                </li>
                <li>
                    <Link>
                        < FaClock className='nav-icon'/>
                        <span>Working Time</span>
                    </Link>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
