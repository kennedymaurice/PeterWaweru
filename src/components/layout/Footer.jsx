import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {
    FaLinkedinIn,
    FaResearchgate,
    FaGoogleScholar,
    FaOrcid,
    FaXTwitter,
} from "react-icons/fa6";

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://linkedin.com",
        icon: FaLinkedinIn,
    },
    {
        name: "ResearchGate",
        url: "https://researchgate.net",
        icon: FaResearchgate,
    },
    {
        name: "Google Scholar",
        url: "https://scholar.google.com",
        icon: FaGoogleScholar,
    },
    {
        name: "ORCID",
        url: "https://orcid.org",
        icon: FaOrcid,
    },
    {
        name: "X",
        url: "https://x.com",
        icon: FaXTwitter,
    },
];

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-white">
            <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
                    {/* Brand */}
                    <div>
                        <img src="/logo.webp" alt="Dr. Peter Waweru" className="h-16 w-auto" />

                        <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
                            Vascular & Endovascular Neurosurgeon, Stroke Specialist, Researcher, and
                            Advocate committed to advancing stroke care, neurovascular health, and
                            health equity across Africa.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;

                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-teal-500 hover:bg-teal-700"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
                            Navigation
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-slate-300">
                            <li>
                                <Link to="/about" className="hover:text-white">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link to="/clinical-expertise" className="hover:text-white">
                                    Clinical Expertise
                                </Link>
                            </li>

                            <li>
                                <Link to="/research" className="hover:text-white">
                                    Research
                                </Link>
                            </li>

                            <li>
                                <Link to="/publications" className="hover:text-white">
                                    Publications
                                </Link>
                            </li>

                            <li>
                                <Link to="/media" className="hover:text-white">
                                    Media
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Focus Areas */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
                            Focus Areas
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-slate-300">
                            <li>• Stroke Care</li>
                            <li>• Stroke Prevention</li>
                            <li>• Neurovascular Surgery</li>
                            <li>• Stroke Research</li>
                            <li>• Health Equity</li>
                            <li>• Public Awareness</li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
                            Connect
                        </h3>

                        <p className="mt-5 text-sm leading-7 text-slate-300">
                            Available for consultations, research collaborations, conference
                            presentations, media engagements, and professional partnerships.
                        </p>

                        <Link
                            to="/contact"
                            className="mt-6 inline-flex items-center rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                        >
                            Contact Dr. Waweru
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
                    <p>© {year} Dr. Peter Kuria Waweru. All rights reserved.</p>

                    <p>For medical emergencies, seek immediate emergency care.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
