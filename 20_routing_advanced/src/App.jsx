import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kid from "./pages/kid";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Navbar2 from "./components/Navbar2";

const App = () => {
  return (
    <div className="bg-black text-white h-screen">
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        //dynamic routing
        <Route path="/courses/:id" element={<CourseDetails/>}/>



        //nested routing
        <Route path="/contact" element={<Contact />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kid" element={<Kid />} />
        </Route>


        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
