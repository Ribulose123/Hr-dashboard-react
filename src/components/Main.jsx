import React from 'react'
import MainLeft from './MainLeft'
import MainRight from './MainRight'

const Main = () => {
  return (
    <div className='main-page'>
        <div className="main-content">
            <MainLeft/>
            <MainRight/>
        </div>
      
    </div>
  )
}

export default Main
