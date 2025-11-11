import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import TodoApp from "./pages/TodoApp";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Weather from "./components/Weather";
import Calculator from "./components/Calculator";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todoapp" element={<TodoApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<NotFound />} />
        <Route path="weather" element={<Weather />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
