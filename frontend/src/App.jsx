import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Predict from "./pages/Predict";
import ChatBot from "./pages/ChatBot";


const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </>
  );
};

export default App;
