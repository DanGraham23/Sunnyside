import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Testimonials />
      <div className="basic-img-grid">
        <div className="milk"></div>
        <div className="orange"></div>
        <div className="cone"></div>
        <div className="sugar"></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
