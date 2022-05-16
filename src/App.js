
import './App.css';

import { Routes, Route, Link } from "react-router-dom";

import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointments from './Pages/Appointments/Appointments';
import Reviews from './Pages/Reviews/Reviews';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Shared/Login';
import SignUp from './Pages/Shared/SignUp';
import RequireAuth from './Pages/Shared/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reset from './Pages/Shared/Reset';
import DashBoard from './Pages/DashBoard/DashBoard';
import Appointment from './Pages/DashBoard/Appointment';
import Review from './Pages/DashBoard/Review';
import History from './Pages/DashBoard/History';





function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointments" element={<RequireAuth>
          <Appointments />
        </RequireAuth>} />

        <Route path="/dashboard" element={<RequireAuth>
          <DashBoard></DashBoard>
        </RequireAuth>}>
          <Route index element={<Appointment />}></Route>
          <Route path='review' element={<Review />}></Route>
          <Route path='history' element={<History />}></Route>
        </Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<Reset />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
