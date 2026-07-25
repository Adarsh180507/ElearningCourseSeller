import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Header from './components/Layout/Header/Header.jsx';
import Courses from './components/Courses/Courses.jsx';
import Footer from './components/Layout/Footer/Footer.jsx';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import ForgetPassword from './components/Auth/ForgetPassword.jsx';
import ResetPassword from './components/Auth/ResetPassword.jsx';
import ContactUs from './components/Contact/ContactUs.jsx';
import Request from './assets/videos/Request/Request.jsx';
import About from './components/About/About.jsx';
import Subscribe from './components/Payments/Subscribe.jsx';
import NotFound from './components/Not Found/NotFound.jsx';
import PaymentSuccess from './components/Payments/PaymentSuccess.jsx';
import PaymentFailed from './components/Payments/PaymentFailed.jsx';
import CoursePage from './components/CoursePage/CoursePage.jsx';
import Profile from './components/Profile/Profile.jsx';
import ChangePassword from './components/Profile/ChangePassword.jsx';
import UpdateProfile from './components/Profile/UpdateProfile.jsx';
import Dashboard from './components/Admin/Dashboard/Dashboard.jsx';
import CreateCourse from './components/Admin/Create Course/CreateCourse.jsx';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses.jsx';
import Users from './components/Admin/Users/Users.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Navbar Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/request" element={<Request />} />

        {/* Profile Routes */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentfailed" element={<PaymentFailed />} />
        <Route path="/course/:id" element={<CoursePage />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/createcourse" element={<CreateCourse />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/users" element={<Users />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
