import { useEffect } from "react";
import feather from "feather-icons";
import Navbar from "./components/Home/Navbar";
import Hero from "./components/Home/Hero";
import CoreValues from "./components/About/CoreValues";
import ContactSection from "./components/Home/ContactSection";
import EducationSection from "./components/Home/EducationSection";
import ExperienceSection from "./components/Home/ExperienceSection";
import ProjectSection from "./components/Home/ProjectSection";
import GossipSection from "./components/Home/GossipSection";
import SkillsSection from "./components/Home/SkillsSection";

function App() {
    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <div className="bg-white">
            <Navbar />
            <Hero />
            <GossipSection />
            <SkillsSection />
            <ProjectSection />
            <ExperienceSection />
            <CoreValues />
            <EducationSection />
            <ContactSection />
        </div>
    );
}

export default App;
