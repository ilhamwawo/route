import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JobsLayout from './pages/JobsLayout';
import Job from './components/Job';
import NewJob from './pages/NewJob';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/jobs" element={<JobsLayout/>} >
          <Route path=":id" element={<Job/>} />
          <Route path="new" element={<NewJob/>} />
        </Route >     
      </Routes>
    </BrowserRouter>
  );
};

export default App;
