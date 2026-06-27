import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <About />
      </main>
      <Footer />
    </div>
  );
}
