import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="bg-slate-950 text-slate-200 font-sans">
            <Navbar />
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Testimonials />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
