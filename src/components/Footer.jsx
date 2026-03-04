export default function Footer() {
    return (
        <footer className="py-8 bg-slate-950 border-t border-slate-800">
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4">
                <span className="font-mono text-xs text-slate-600">
                    © 2026 Juan Pablo Hernandez Mosti
                </span>
                <a
                    href="https://github.com/juanpablohdzm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-slate-600 hover:text-sky-400 transition-colors"
                >
                    github.com/juanpablohdzm →
                </a>
            </div>
        </footer>
    );
}
