import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing the files

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Services from "./Pages/ServicesPage/Services";
import Accommodation from "./Pages/Accommodations/Accommodation";
import TemplatePage from "./Pages/TemplatePage";

// subfiles
import AccommodationForm from "./Pages/Accommodations/Form/Form";
import SignInUpPage from "./Pages/Sign-in-up/SignInUpPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemplatePage />}>
          {/* All the basic Routes go here */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/accommodation" element={<Accommodation />} />
          
        </Route>
          {/* path to the pages which are subpages and does not use the template */}
          <Route path="/accommodation/form" element={<AccommodationForm />} />
          <Route path="/login" element={<SignInUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
