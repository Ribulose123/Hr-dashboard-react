import React, { useContext, useEffect, useState} from 'react';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { InterviewContext } from '../services/InterviewContent';
import { Link } from 'react-router-dom';

const Interview = () => {
  const {employees, setEmployees} = useContext(InterviewContext)
  const [noInterview, setNoInterview] = useState (false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const savedEmployees = localStorage.getItem('recruitmentData');
    if (savedEmployees) {
      setEmployees(JSON.parse(savedEmployees));
    }
  }, [setEmployees]);

  

  const scheduleInterview = employees.filter(employee => employee.interviewDate)

  useEffect (() =>{
    if(scheduleInterview.length ===0){
      setShowModal(true)
    } else{
      setShowModal(false)
    }
  },[scheduleInterview])
  
 const handleRemoval = (id)=>{
  const updated = employees.filter(candidate => candidate.id !== id)
  setEmployees(updated)
  saveToLocalStorage('recruitmentData', updated);
  setNoInterview(true)
 }

 const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};


const removeModal =()=>{
  setShowModal(false)
}
 
 

  return (
    <div className='interview'>
      <div className="dot-int">
        <p>Schedule Interview</p>
        <IoEllipsisHorizontalSharp />
      </div>
     
     <div className="interview-content">
     {scheduleInterview.length > 0 ? (
        <div className='interview-schecdule'>
          {scheduleInterview.map ((employee) =>(
            <div className='interview-info' key={employee.id}>
              <img src={employee.avatar} alt={`${employee.first_name} ${employee.last_name}`} />
             <div className="lastname-cont">
              <div className="last-name">
                  <p>{employee.first_name}</p>
                  <p>{employee.last_name}</p>
                </div>

                <p>{employee.title}</p>
             </div>

             <p>{employee.interviewDate}</p>

            <Link to='https://us04web.zoom.us/join ' onClick={() => handleRemoval(employee.id)}>
            <button >Start interview</button>
            </Link>

            </div>
          ))}
        </div>
      ) :null}
     </div>

     {showModal && (
        <div className="modal-info">
          <div className="modal-type">
            <h2>No Scheduled Interviews</h2>
            <Link to="/employees"> <button onClick={removeModal}> Schedule Interview</button></Link>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Interview;
