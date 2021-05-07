import "./App.css";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Tours from "./Components/Tours";
import Pictures from "./Components/Pictures";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Pictures />
      <Footer />
    </div>
  );
}

export default App;
