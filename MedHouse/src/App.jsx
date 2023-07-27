import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Importing the files

import Home from "./Pages/Home/Home.jsx";
import TemplatePage from "./Pages/TemplatePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TemplatePage />}>
          {/* All the basic Routes go here */}
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
