import { useState, useEffect, createContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for events
  const [events, setEvents] = useState([]);

  // Save to Local Storage
  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  // Get from Local Storage
  const getFromLocalStorage = (key) => {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : null;
  };


  const fetchEmployees = async () => {
    const savedEmployees = getFromLocalStorage('recruitmentData');

    if (savedEmployees) {
      setEmployees(savedEmployees);  
    } else {
      const response = await axios.get('https://reqres.in/api/users');
      const employeeData = response.data.data;

      const updatedEmployees = employeeData.map((employee, index) => {
        let title = '';

        if (index === 0) {
          title = 'UI Designer';
        } else if (index >= 1 && index <= 3) {
          title = 'Accountant';
        } else {
          title = 'Marketer';
        }

        return {
          ...employee,
          interviewDate: null,
          title,
        };
      });

      setEmployees(updatedEmployees);
      saveToLocalStorage('recruitmentData', updatedEmployees);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  
  const scheduleInterview = (id, date) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? { ...employee, interviewDate: date } : employee
    );

    setEmployees(updatedEmployees);
    saveToLocalStorage('recruitmentData', updatedEmployees);
  };

  // Add Event
  const addEvent = (eventName, eventDate) => {
    const newEvent = { name: eventName, date: eventDate };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    saveToLocalStorage("eventData", [...events, newEvent]);
  };

  
  const resetInterviews = () => {
    localStorage.removeItem("recruitmentData"); // Clear stored data
    fetchEmployees(); // Re-fetch the original employee data
  };

  return (
    <InterviewContext.Provider value={{ employees, scheduleInterview, loading, setEmployees, addEvent, events, resetInterviews }}>
      {children}
    </InterviewContext.Provider>
  );
};

InterviewProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
