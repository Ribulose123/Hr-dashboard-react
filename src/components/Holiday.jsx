import React, { useContext, useEffect,useState } from 'react'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { HolidayData } from '../services/LineData';
import { InterviewContext } from '../services/InterviewContent';
import { Link } from 'react-router-dom';

const Holiday = () => {
    const {events} = useContext(InterviewContext)
  const [showModal, setShowModal] = useState(false)

  useEffect (() =>{
    if(events.length ===0){
      setShowModal(true)
    } else{
      setShowModal(false)
    }
  },[events])

  const handleModalRemoval =()=>{
    setShowModal(false)
  }
  return (
    <div className='Holiday'>
      <div className="dot-int">
        <p>Schedule Holiday</p>
        <IoEllipsisHorizontalSharp />
      </div>
        <div className="holiday-type">
            <p>Date</p>
            <p>Name</p>
            <p>Type</p>
        </div>
       <div className="holiday-item">
       {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className='holiday-content'>
              <p>{event.date}</p>
              <p>{event.name}</p>
              <p>Event</p>
            </div>
          ))
        ) : null}
       </div>
       {showModal && (
        <div className="modal-holiday">
          <div className="modal-holiday-info">
            <h2>No Scheduled Interviews</h2>
            <Link to="/event"> <button onClick={handleModalRemoval}> Schedule Interview</button></Link>
          </div>
        </div>
      )}
    </div>
  )
}



export default Holiday
