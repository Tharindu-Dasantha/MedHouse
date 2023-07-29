import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing the files

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import TemplatePage from "./Pages/TemplatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemplatePage />}>
          {/* All the basic Routes go here */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
