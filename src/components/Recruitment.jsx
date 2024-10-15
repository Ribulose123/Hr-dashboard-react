import React, { useContext } from 'react';
import { InterviewContext } from './InterviewContext';

const Recruitment = () => {
  const { employees } = useContext(InterviewContext);  // Get employee data from context

  return (
    <div>
      <h2>Recruitment - New Applicants</h2>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            <div>
              <img src={employee.avatar} alt={`${employee.first_name} ${employee.last_name}`} style={{ width: '50px', borderRadius: '50%' }} />
              <strong>{employee.first_name} {employee.last_name}</strong> - {employee.email}
              {employee.interviewDate ? (
                <p>Interview Date: {employee.interviewDate}</p>
              ) : (
                <p>No interview scheduled</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recruitment;
