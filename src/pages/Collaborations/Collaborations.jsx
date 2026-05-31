import { Link } from "react-router-dom";
import {
    ArrowRight,
    Building2,
    GraduationCap,
    Handshake,
    HeartPulse,
    Lightbulb,
    Network,
    Scale,
    ShieldCheck,
    Stethoscope,
    Target,
    Users,
} from "lucide-react";
import SEO from "../../components/seo/SEO";

const collaborationAreas = [
    {
        title: "Stroke Research",
        description:
            "Collaborative studies in stroke epidemiology, outcomes, systems of care, and community-based interventions.",
        icon: HeartPulse,
    },
    {
        title: "Health Systems Strengthening",
        description:
            "Partnerships focused on stroke pathways, workforce capacity, referral systems, quality improvement, and service development.",
        icon: Network,
    },
    {
        title: "Medical Education & Training",
        description:
            "Academic teaching, clinical mentorship, continuing medical education, curriculum support, and professional development.",
        icon: GraduationCap,
    },
    {
        title: "Public Health & Community Engagement",
        description:
            "Stroke awareness campaigns, health literacy projects, community education, and public engagement initiatives.",
        icon: Users,
    },
    {
        title: "Global Health Initiatives",
        description:
            "Projects addressing access to specialist care, non-communicable diseases, public health innovation, and regional collaboration.",
        icon: Scale,
    },
    {
        title: "Healthcare Innovation",
        description:
            "Collaboration with organizations developing tools, technologies, and solutions that improve healthcare delivery and patient outcomes.",
        icon: Lightbulb,
    },
];

const partnerTypes = [
    "Academic Institutions",
    "Healthcare Organizations",
    "Non-Governmental Organizations",
    "Government & Public Institutions",
    "International Development Partners",
    "Industry & Innovation Partners",
];

const principles = [
    {
        title: "Scientific Integrity",
        description: "Maintaining strong ethical, academic, and professional standards.",
        icon: ShieldCheck,
    },
    {
        title: "Patient-Centered Impact",
        description: "Prioritizing outcomes that improve care, access, and community health.",
        icon: Stethoscope,
    },
    {
        title: "Equity",
        description: "Promoting fair access to quality healthcare across communities.",
        icon: Scale,
    },
    {
        title: "Sustainability",
        description: "Supporting solutions that create long-term value and meaningful change.",
        icon: Target,
    },
    {
        title: "Shared Learning",
        description: "Encouraging knowledge exchange, collaboration, and mutual growth.",
        icon: Handshake,
    },
];

const interests = [
    "Stroke Prevention",
    "Stroke Systems Development",
    "Neurovascular Care",
    "Health Equity",
    "Medical Education",
    "Healthcare Workforce Capacity Building",
    "Public Awareness and Health Literacy",
    "Research Capacity Strengthening",
    "Regional and International Collaboration",
];

const Collaborations = () => {
    return (
        <main className="bg-white">
            <SEO
                title="Collaborations and Partnerships"
                description="Explore partnership opportunities with Dr. Peter Waweru in stroke research, health systems strengthening, medical education, public health, and health equity."
                path="/collaborations"
            />
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 py-5 md:py-20 text-white">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-teal-500 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/30 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-200 backdrop-blur">
                        Collaborations • Partnerships
                    </div>
                    <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Working Together to Advance Stroke Care and Health Equity
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Dr. Peter Waweru welcomes opportunities to work with individuals and
                        organizations committed to strengthening healthcare systems, advancing
                        stroke research, improving neurological care, and promoting health equity
                        across Africa and beyond.
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-500"
                        >
                            Start a Collaboration
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>

                        <Link
                            to="/research"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
                        >
                            Explore Research
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Areas of Collaboration
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Partnerships designed for practical health impact.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Improving stroke prevention, treatment, rehabilitation, and long-term
                            outcomes requires collaboration among clinicians, researchers,
                            institutions, policymakers, healthcare organizations, communities, and
                            development partners.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {collaborationAreas.map((area) => {
                            const Icon = area.icon;

                            return (
                                <div
                                    key={area.title}
                                    className="rounded-3xl border border-slate-200 bg-white p-4 md:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-700/10 text-teal-700">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-950">
                                            {area.title}
                                        </h3>
                                    </div>
                                    <p className="mt-4 leading-7 text-slate-600">
                                        {area.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-5 md:py-20">
                <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Who We Work With
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Collaboration across institutions, sectors, and communities.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Partnership opportunities may involve research, training, advisory
                            support, health systems projects, public awareness, and
                            implementation-focused initiatives.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {partnerTypes.map((partner) => (
                            <div
                                key={partner}
                                className="rounded-3xl border border-slate-200 bg-white p-4 md:p-8 shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <Building2 className="h-7 w-7 shrink-0 text-teal-700" />

                                    <h3 className="text-xl font-bold text-slate-950">{partner}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Current Interests
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Priority areas for partnership and engagement.
                        </h2>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-3">
                        {interests.map((interest) => (
                            <span
                                key={interest}
                                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700"
                            >
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-950 py-5 md:py-20 text-white">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
                            Partnership Principles
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Guided by integrity, equity, and patient-centered impact.
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                        {principles.map((principle) => {
                            const Icon = principle.icon;

                            return (
                                <div
                                    key={principle.title}
                                    className="rounded-3xl border border-white/10 bg-white/[0.05] p-4 md:p-8"
                                >
                                    <div className="flex items-center gap-4">
                                        <Icon className="h-8 w-8 shrink-0 text-teal-300" />

                                        <h3 className="text-xl font-bold">{principle.title}</h3>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-slate-300">
                                        {principle.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-5 md:py-20">
                <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Why Collaborate?
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Partnerships create opportunities for measurable progress.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Collaboration creates a pathway to generate impactful research, improve
                            healthcare delivery, expand access to specialist care, strengthen health
                            systems, build workforce capacity, influence policy, and improve patient
                            outcomes.
                        </p>
                    </div>

                    <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 md:p-8">
                        <h3 className="text-2xl font-bold text-slate-950">
                            Partnership opportunities may support:
                        </h3>

                        <div className="mt-6 grid gap-3">
                            {[
                                "Research and evidence generation",
                                "Health systems strengthening",
                                "Healthcare workforce training",
                                "Community stroke awareness",
                                "Policy and practice improvement",
                                "Sustainable patient-centered impact",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-teal-700 py-5 md:py-20 text-white">
                <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
                    <Handshake className="mx-auto h-10 w-10 text-teal-100" />
                    <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
                        Start a Partnership Conversation
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-teal-50">
                        Organizations, institutions, researchers, healthcare professionals, and
                        development partners interested in collaboration are encouraged to get in
                        touch.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-9 inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-teal-800 transition hover:bg-slate-100"
                    >
                        Partnership Inquiry
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Collaborations;
