import NavbarItem from "./NavbarItem";
import { useState} from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-blue-900 text-white w-full h-20 fixed top-0 left-0 z-10 shadow-lg">
            <div className="flex items-center justify-between h-full px-6">
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-semibold">JUAN PABLO HERNANDEZ MOSTI</span>
                </div>

                <div className={`space-x-6 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
                    <NavbarItem idSection="#home">Home</NavbarItem>
                    <NavbarItem idSection="#values">Values</NavbarItem>
                    <NavbarItem idSection="#projects">Projects</NavbarItem>
                    <NavbarItem idSection="#experience">Experience</NavbarItem>
                    <NavbarItem idSection="#education">Education</NavbarItem>
                </div>

                {/* Mobile Menu Toggle (Hamburger) */}
                <div className="md:hidden flex items-center space-x-2">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
            </div>
        </nav>);
}

export default Navbar;