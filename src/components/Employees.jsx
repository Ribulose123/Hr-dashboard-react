import  { useState, useContext } from 'react';
import { InterviewContext } from '../services/InterviewContent';
import { IoPersonOutline } from "react-icons/io5";
import { FaEnvelope, FaBriefcase, FaCalendar } from "react-icons/fa";
import ResetInterviewsButton from './ResetInterviewsButton';

const InterviewPage = () => {
  const { employees, scheduleInterview } = useContext(InterviewContext);  // Access the employee list and scheduling function
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [interviewDate, setInterviewDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleScheduleInterview = (employee) => {
    setSelectedEmployee(employee);
    setShowModal(true)
  };

  const handleSaveInterview = () => {
    if (selectedEmployee && interviewDate) {
      scheduleInterview(selectedEmployee.id, interviewDate);
      setSelectedEmployee(null);
      setInterviewDate('');
    }
    setShowModal(false);
  };

  return (
    <div className='schedule-intervive'>
      <h2>Schedule an Interview</h2>

    
      <div className="schedele-details">

      <div className='interview-detials'>
          <div className="detials-content">
            <IoPersonOutline/>
            <p> person</p>
          </div>
          <div className="detials-content">
            <FaEnvelope/>
            <p> Email</p>
          </div>
          <div className="detials-content">
            <FaBriefcase/>
            <p>Job title</p>
          </div>
          <div className="detials-content">
            <FaCalendar/>
            <p>Schedule</p>
          </div>
      </div>
        <div className='scheule-content'>
        {employees.map((employee) => (
          <div key={employee.id}>
            <div className='schedule-info'>
             <div className="schedule-img">
              <img src={employee.avatar} alt="" />
             <strong>{employee.first_name} {employee.last_name}</strong>  
             </div>
              <p className='email'>{employee.email} </p> 
              <p>{employee.title}</p>
              <button onClick={() => handleScheduleInterview(employee)}>Schedule Interview</button>
            </div>
          </div>
        ))}
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Schedule Interview for {selectedEmployee.name}</h3>
            <div className="modal-input">
            <label>
              Select Date and Time:
              <input
                type="datetime-local"
                value={interviewDate}
                onChange={(e) => setInterviewDate(e.target.value)}
              />
            </label>
            </div>
            <div className="modal-buttons">
            <button onClick={handleSaveInterview}>Save</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      <ResetInterviewsButton/>
    </div>
  );
};

export default InterviewPage;
