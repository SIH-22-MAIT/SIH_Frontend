import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminLogin, Home } from "../pages/index";

import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/admin-login" element={<AdminLogin/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;