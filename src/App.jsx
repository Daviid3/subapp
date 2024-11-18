import Home from "./components/Home";
import "./App.css";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import Subscriptions from "./components/Subscriptions";
import AddSubscriptions from "./components/AddSubscriptions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Subscriptions" element={<Subscriptions />} />
        <Route path="/EditSubscriptions/:id" element={<AddSubscriptions />} />
        <Route path="/AddSubscriptions" element={<AddSubscriptions />} />
      </Routes>
    </Router>
  );
}

export default App;
