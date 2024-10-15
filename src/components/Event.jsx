import React, { useContext, useState } from 'react'
import { LuCalendarClock } from "react-icons/lu";
import { InterviewContext } from '../services/InterviewContent';

const Event = () => {
    const [addData, setAddDate] = useState('')
    const [addEventName, setAddEventName] = useState('') 
    const [showModal, setShowModal] = useState(false)

    const {addEvent} = useContext(InterviewContext)

    const handleshowModal = ()=>{
        setShowModal(true)
    }

    const saveDate = ()=>{
        if(addData && addEventName){
            addEvent( addEventName, addData)
            setAddDate('')
            setAddEventName('')
        }
       setShowModal(false)
    }

  return (
    <div className='event'>
      <div className='event-header'>
        <h2>Upcoming Event</h2>
        <LuCalendarClock className='Luclock' onClick={handleshowModal}/>
      </div>

      <div className="event-shows">
        <img src="/public/image/event.jpeg" alt="" />
        <img src="/public/image/event2.jpeg" alt="" />
        <img src="/public/image/event1.jpeg" alt="" />
        <img src="/public/image/event 5.jpeg" alt="" />
        <img src="/public/image/event3.jpeg" alt="" />
        <img src="/public/image/event6.jpeg" alt="" />
      </div>

      <div className="show-button">
      <button className='event-button'>Add Event</button>
      </div>

      {showModal && (
        <div className='modal-shows'>
           <div className="modal-event">
          <div className="modal-input">
          <input type="text" value={addEventName} onChange={(e) => setAddEventName(e.target.value)} placeholder='Enter Event'/>

            <input type="date" name="" id="" value={addData}  onChange={(e)=> setAddDate(e.target.value)}/>
          </div>
            <div className="modal-buttons">
            <button onClick={saveDate}>Save</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
           </div>
        </div>
      )}
    </div>
  )
}

export default Event
