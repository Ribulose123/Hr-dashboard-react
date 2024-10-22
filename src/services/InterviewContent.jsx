import { useState, useEffect, createContext } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const InterviewContext = createContext();

export const InterviewProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [totalEmployees, setTotalEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
    const savedEmployees = getFromLocalStorage("recruitmentData");

    if (savedEmployees) {
      setEmployees(savedEmployees);
    } else {
      try {
        const response = await axios.get("https://reqres.in/api/users");
        const employeeData = response.data.data;

        const updatedEmployees = employeeData.map((employee, index) => {
          let title = "";
          if (index === 0) {
            title = "UI Designer";
          } else if (index >= 1 && index <= 3) {
            title = "Accountant";
          } else {
            title = "Marketer";
          }

          return {
            ...employee,
            interviewDate: null,
            title,
          };
        });

        setEmployees(updatedEmployees);
        saveToLocalStorage("recruitmentData", updatedEmployees);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    }
    setLoading(false);
  };

  // Fetching Data from Two APIs
  useEffect(()=>{
    const fetchData = async ()=>{
      setLoading(true)
    try{
      const responseData = await axios.get('https://randomuser.me/api/?results=50');

      const employeesList = responseData.data.results


      const rolesArray = [
        "UI Designer",
        "Developer",
        "Product Manager",
        "Data Scientist",
        "Marketing Specialist",
        "Sales Executive",
        "Graphic Designer",
        "Content Writer",
        "Web Developer",
      ];

        const employeesRole = employeesList.map((role)=>{
          const randomRole = rolesArray[Math.floor(Math.random() * rolesArray.length)];

          return{
            ...role,
            roles:randomRole
          }
        })
        setTotalEmployees(employeesRole)
    } catch (error){
        console.error('error fetching data', error);
        
    } finally{
      setLoading(false)
    }
       
    }
    fetchData()
  }, [])

  const filterData = totalEmployees.filter((items) => `${items.name.first} ${items.name.last}`.toLowerCase().includes(searchTerm.toLowerCase()))

  const scheduleInterview = (id, date) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id === id ? { ...employee, interviewDate: date } : employee
    );
    setEmployees(updatedEmployees);
    saveToLocalStorage("recruitmentData", updatedEmployees);
  };

  const addEvent = (eventName, eventDate) => {
    const newEvent = { name: eventName, date: eventDate };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    saveToLocalStorage("eventData", [...events, newEvent]);
  };

  const resetInterviews = () => {
    localStorage.removeItem("recruitmentData");
    fetchEmployees();
  };

  return (
    <InterviewContext.Provider
      value={{
        employees,
        scheduleInterview,
        loading,
        setEmployees,
        addEvent,
        events,
        resetInterviews,
        filterData,
        setSearchTerm
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
};

InterviewProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
