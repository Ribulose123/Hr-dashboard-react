import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Event from './components/Event';

import Employees from './components/Employees'
import { InterviewProvider } from './services/InterviewContent';


function App() {
  return (
      <div className="app">
        <InterviewProvider>
          {/* <Main/> */}
          <Router>
            <Navbar/>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/event" element={<Event />} />
          </Routes>
          </Router>
        </InterviewProvider>
      </div>
  );
}

export default App;
