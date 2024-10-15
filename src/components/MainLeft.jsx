import React from 'react'
import { IoEllipsisHorizontalSharp, IoLogoSteam, IoPerson } from "react-icons/io5";
import Lin from './Lin';
import PieChart from './PieChart';

const MainLeft = () => {
  return (
    <div className='main-left'>
        <div className="workers-info">
            <div className="total-users">
                <div className="dot-int">
                    <p>Numbers of Employees</p>
                    <IoEllipsisHorizontalSharp/>
                </div>
                <div className="user-present">
                    <div className='users-info'>
                        <div className="steam">
                        <IoLogoSteam className='logoteam'/>
                        </div>
                        <div className='month-info'>
                            <h2>78</h2>
                            <p>Last month:68</p>
                        </div>
                    </div>
                    <p className="info-n">+12%</p>
                </div>
            </div>
            <div className="total-users">
                <div className="dot-int">
                    <p>New Employees</p>
                    <IoEllipsisHorizontalSharp/>
                </div>
                <div className="user-present">
                    <div className='users-info'>
                        <div className="steam">
                        <IoPerson className='logoteam2'/>
                        </div>
                        <div className='month-info'>
                            <h2>32</h2>
                            <p>Last month:16</p>
                        </div>
                    </div>
                    <p className="info-n">+8%</p>
                </div>
            </div>
        </div>

        <div className='line-graph'>
            <div className="dot-int">
                <p>Employer Satisfaction</p>
                <IoEllipsisHorizontalSharp/>
            </div>
            <Lin/>
           <PieChart/>
           
        </div>
    </div>
  )
}

export default MainLeft
