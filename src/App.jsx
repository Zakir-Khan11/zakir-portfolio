import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Cards from "./components/Cards";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
// import Calculator from './components/Calculator'

// import ContactForm from './components/ContactForm';
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import TodoApp from "./pages/TodoApp";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Weather from "./components/Weather";
import Calculator from "./components/Calculator";
// import Todo from './components/Todo';
// import Login from './components/Login';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Cards />
      <Projects />
      <Footer />
      {/* <Calculator/> */}
      {/* <ContactForm/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todoapp" element={<TodoApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<NotFound />} />
        <Route path="weather" element={<Weather />} />
        {/* <Route path='/todoapp' element={<TodoApp />} /> */}
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
      {/* <Login /> */}
      {/* <Todo/> */}
    </>
  );
}

export default App;
