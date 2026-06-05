import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Clinical", path: "/clinical-expertise" },
    { label: "Research", path: "/research" },
    { label: "Publications", path: "/publications" },
    { label: "Collaborations", path: "/collaborations" },
    { label: "Awareness", path: "/stroke-awareness" },
    { label: "Media", path: "/media" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `rounded-full px-3.5 py-2 text-sm font-semibold transition-all ${
            isActive
                ? "bg-teal-700 text-white shadow-sm"
                : "text-slate-700 hover:bg-slate-100 hover:text-teal-700"
        }`;

    const mobileLinkClass = ({ isActive }) =>
        `rounded-2xl px-4 py-3 text-sm font-semibold transition ${
            isActive
                ? "bg-teal-700 text-white"
                : "text-slate-700 hover:bg-slate-100 hover:text-teal-700"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-sm shadow-slate-900/[0.03] backdrop-blur-xl">
            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8 overflow-hidden">
                <Link
                    to="/"
                    className="flex shrink-0 items-center"
                    aria-label="Dr. Peter Waweru Homepage"
                >
                    <img
                        src="/logo.webp"
                        alt="Dr. Peter Waweru"
                        className="h-14 w-auto object-contain md:h-16"
                    />
                </Link>

                <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-2 shadow-sm lg:flex">
                    {navLinks.map((link) => (
                        <NavLink key={link.path} to={link.path} className={linkClass}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden shrink-0 lg:block">
                    <Link
                        to="/contact"
                        className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-700"
                    >
                        Request Consultation
                    </Link>
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-teal-700 hover:text-teal-700 lg:hidden"
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {isOpen && (
                <div className="border-t border-slate-200 bg-white px-5 py-5 shadow-xl lg:hidden">
                    <nav className="mx-auto flex max-w-7xl flex-col gap-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={mobileLinkClass}
                            >
                                {link.label}
                            </NavLink>
                        ))}

                        <NavLink
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className={mobileLinkClass}
                        >
                            Contact
                        </NavLink>

                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 rounded-full bg-slate-950 px-5 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-teal-700"
                        >
                            Request Consultation
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
