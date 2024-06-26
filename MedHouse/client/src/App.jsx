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
import SignInUpPage from "./Pages/Sign-in-up/SignInUpPage";
import Inquire from "./Pages/Accommodations/DetailPage/Inquire";

// Sub forms
import Cleaning from "./Pages/ServicesPage/Forms/Cleaning";
import Medical from "./Pages/ServicesPage/Forms/Medical";
import Clearance from "./Pages/ServicesPage/Forms/Clearance";
import Mentoring from "./Pages/ServicesPage/Forms/Mentoring";
import Leave from "./Pages/ServicesPage/Forms/Leave";
import { useState } from "react";

// temp files
import Admin from "./Pages/Users/Admin";

function App() {
  const [loginState, setLoginState] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemplatePage />}>
          {/* All the basic Routes go here */}
          <Route index element={<Home loginState={loginState} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/accommodation" element={<Accommodation />} />
        </Route>
        {/* path to the pages which are subpages and does not use the template */}
        <Route path="/accommodation/form" element={<AccommodationForm />} />
        <Route path="/accommodation/inquire" element={<Inquire />} />
        <Route
          path="/login"
          element={<SignInUpPage setLoginState={setLoginState} />}
        />
        {/* Path to all the service forms */}
        <Route path="/services/Cleaning" element={<Cleaning />} />
        <Route path="/services/Medical" element={<Medical />} />
        <Route path="/services/Clearance" element={<Clearance />} />
        <Route path="/services/Mentoring" element={<Mentoring />} />
        <Route path="/services/Leave" element={<Leave />} />
        {/* temparary paths to admin board */}
        <Route path="/adminpage" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;

