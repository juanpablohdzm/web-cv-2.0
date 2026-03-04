import { useState, useEffect } from "react";

const NAV_LINKS = [
    { label: "// about", href: "#hero" },
    { label: "// skills", href: "#skills" },
    { label: "// experience", href: "#experience" },
    { label: "// projects", href: "#projects" },
    { label: "// contact", href: "#contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive("#" + entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const handleNav = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-slate-950/90 backdrop-blur-sm border-b border-slate-800/50" : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => handleNav(e, "#hero")}
                    className="font-mono text-sky-400 font-semibold text-sm tracking-tight hover:text-sky-300 transition-colors"
                >
                    &lt;JPH/&gt;
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNav(e, link.href)}
                            className={`font-mono text-xs transition-colors ${
                                active === link.href
                                    ? "text-sky-400"
                                    : "text-slate-400 hover:text-slate-200"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-slate-400 hover:text-slate-200 transition-colors"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label="Toggle menu"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {menuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-slate-950/95 backdrop-blur-sm border-b border-slate-800 px-6 py-4 flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNav(e, link.href)}
                            className={`font-mono text-sm ${
                                active === link.href ? "text-sky-400" : "text-slate-400"
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
