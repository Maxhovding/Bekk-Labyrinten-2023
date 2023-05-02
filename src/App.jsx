import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Medication from "./pages/Medication";
import Bandage from "./pages/Bandage";
import Inspection from "./pages/Inspection";
import OhNo from "./pages/OhNo";
import EndVisit from "./pages/EndVisit"; // Import the new EndVisit component
import StartVisit from "./pages/StartVisit";
import "./styles/Global.css";
import Comment from "./pages/Comment";
import "./styles/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StartVisit />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/medication" element={<Medication />} />
        <Route path="/bandage" element={<Bandage />} />
        <Route path="/inspection" element={<Inspection />} />
        <Route path="/add-comment" element={<Comment />} />
        <Route path="/end" element={<EndVisit />} />
        <Route path="*" element={<OhNo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
