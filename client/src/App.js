import React from "react";
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Blogs from './Components/Blogs'
import Goggrommer from './Components/Doggroomer'


import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <>


      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/doggroomer" element={<Goggrommer />} />
        </Routes>
        
      </BrowserRouter>

    </>
  );
}

export default App;
