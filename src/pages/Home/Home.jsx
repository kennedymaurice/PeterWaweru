import { Link } from "react-router-dom";
import {
    ArrowRight,
    Award,
    BookOpen,
    Brain,
    Building2,
    Handshake,
    HeartPulse,
    Microscope,
    ShieldCheck,
    Stethoscope,
} from "lucide-react";
import SEO from "../../components/seo/SEO";

const snapshotCards = [
    {
        title: "Clinical Excellence",
        description:
            "Specialized care in stroke, cerebrovascular disease, neurovascular disorders, and complex neurosurgical conditions.",
        icon: Stethoscope,
    },
    {
        title: "Research & Innovation",
        description:
            "Research advancing stroke epidemiology, neurovascular disease, stroke systems of care, and health equity in Africa.",
        icon: Microscope,
    },
    {
        title: "Advocacy & Impact",
        description:
            "Promoting stroke awareness, strengthening healthcare systems, and improving access to timely care and rehabilitation.",
        icon: Handshake,
    },
];

const expertiseAreas = [
    {
        title: "Stroke Management",
        description:
            "Comprehensive assessment, diagnosis, treatment, and long-term management of stroke and cerebrovascular conditions.",
        icon: Brain,
    },
    {
        title: "Neurovascular Surgery",
        description:
            "Specialized management of vascular disorders affecting the brain and nervous system, including aneurysms.",
        icon: ShieldCheck,
    },
    {
        title: "Stroke Prevention",
        description:
            "Evidence-based strategies to reduce stroke risk through awareness, early intervention, and preventive healthcare.",
        icon: HeartPulse,
    },
    {
        title: "Stroke Systems & Health Equity",
        description:
            "Research and advocacy focused on strengthening stroke services and improving access to care across Africa.",
        icon: Award,
    },
];

const researchHighlights = [
    "Stroke Epidemiology, Care, and Outcomes in Kenya",
    "UPESI: Swahili Translation of the FAST Acronym for Stroke Awareness in East Africa",
    "Stroke Services in Africa: Current Status and Future Needs",
    "Revisiting Africa’s Stroke Obstacles and Services (SOS)",
    "Outcomes Following Subarachnoid Haemorrhage in Kenya",
];

const appointments = [
    {
        institution: "Pan-African Center for Health Equity (PACHE)",
        role: "Stroke Researcher",
    },
    {
        institution: "Kenyatta University Teaching, Referral & Research Hospital",
        role: "Vascular & Endovascular Neurosurgeon",
    },
    {
        institution: "Nairobi Stroke Clinic",
        role: "Stroke Specialist & Vascular Neurosurgeon",
    },
];

const Home = () => {
    return (
        <main className="bg-white">
            <SEO
                title="Vascular Neurosurgeon & Stroke Specialist in Kenya"
                description="Dr. Peter Waweru is a vascular and endovascular neurosurgeon, stroke specialist, and researcher advancing stroke care, neurovascular health, and health equity across Kenya and Africa."
                path="/"
            />
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0">
                    <div className="absolute left-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-teal-500/20 blur-3xl" />
                    <div className="absolute bottom-[-15%] right-[-10%] h-[520px] w-[520px] rounded-full bg-yellow-500/10 blur-3xl" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.22),transparent_34%),linear-gradient(135deg,rgba(15,23,42,1),rgba(2,6,23,1))]" />
                </div>

                <div className="relative mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-8 md:gap-14 px-5 py-5 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
                    <div>
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-200 backdrop-blur">
                            Stroke Care • Neurosurgery • Research
                        </div>

                        <h1 className="mt-5 max-w-5xl text-4xl font-bold tracking-tight md:text-5xl">
                            Advancing Stroke Care Through Clinical Excellence, Research, and Health
                            Equity
                        </h1>

                        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                            Dr. Peter Waweru is a vascular and endovascular neurosurgeon, stroke
                            specialist, and researcher dedicated to improving stroke prevention,
                            treatment, and outcomes across Kenya and Africa.
                        </p>

                        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                            Through clinical practice, research, education, and advocacy, he works
                            to advance equitable access to high-quality stroke and neurovascular
                            care while strengthening health systems across the continent.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <Link
                                to="/research"
                                className="inline-flex items-center justify-center rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-950/30 transition hover:-translate-y-0.5 hover:bg-teal-500"
                            >
                                Explore Research
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                            <Link
                                to="/clinical-expertise"
                                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-slate-100"
                            >
                                Clinical Expertise
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
                            >
                                Contact Dr. Waweru
                            </Link>
                        </div>

                        <div className="mt-6 md:mt-12 grid max-w-2xl grid-cols-3 gap-3">
                            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                                <p className="text-2xl font-bold text-white">10+</p>
                                <p className="mt-1 text-xs font-medium text-slate-400">
                                    Publications
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                                <p className="text-2xl font-bold text-white">170+</p>
                                <p className="mt-1 text-xs font-medium text-slate-400">Citations</p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
                                <p className="text-2xl font-bold text-white">2900+</p>
                                <p className="mt-1 text-xs font-medium text-slate-400">
                                    Research Reads
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-8 top-10 h-48 w-48 rounded-full bg-teal-500/20 blur-2xl" />
                        <div className="absolute -right-8 bottom-10 h-56 w-56 rounded-full bg-yellow-500/10 blur-2xl" />

                        <div className="relative rounded-[1.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
                            <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-900">
                                <img
                                    src="/peter-waweru.webp"
                                    alt="Dr. Peter Kuria Waweru"
                                    className="h-[560px] w-full object-cover object-center"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200 backdrop-blur">
                                    MBChB • MSc • FCS (ECSA) • EDNI
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-7">
                                    <div className="rounded-3xl border border-white/10 bg-slate-950/65 p-6 backdrop-blur-md">
                                        <h3 className="text-2xl font-bold text-white">
                                            Dr. Peter Kuria Waweru
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-200">
                                            Vascular & Endovascular Neurosurgeon
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            <span className="rounded-full bg-teal-400/15 px-3 py-1 text-xs font-medium text-teal-200">
                                                Stroke Specialist
                                            </span>

                                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                                                Researcher
                                            </span>

                                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">
                                                Advocate
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 left-6 right-6 hidden rounded-3xl border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur md:block">
                            <p className="text-center text-sm font-medium text-slate-200">
                                Advancing stroke care, neurovascular health, and health equity
                                across Kenya and Africa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Snapshot */}
            <section className="bg-slate-50 py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-3">
                        {snapshotCards.map((card) => {
                            const Icon = card.icon;

                            return (
                                <div
                                    key={card.title}
                                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-700/10 text-teal-700">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-950">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <p className="mt-4 leading-7 text-slate-600">
                                        {card.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="bg-white py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-6 md:gap-12 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
                        <div className="lg:sticky lg:top-28">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                                About Dr. Waweru
                            </p>

                            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                                Clinical expertise shaped by research and public health impact.
                            </h2>

                            <div className="mt-6 md:mt-8 grid gap-3 sm:grid-cols-3">
                                <div className="rounded-2xl bg-white p-4 shadow-sm">
                                    <p className="text-xl font-bold text-slate-950">Stroke</p>
                                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                                        Specialist Care
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-4 shadow-sm">
                                    <p className="text-xl font-bold text-slate-950">Research</p>
                                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                                        Evidence Driven
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-white p-4 shadow-sm">
                                    <p className="text-xl font-bold text-slate-950">Africa</p>
                                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                                        Health Equity
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[1.5rem] bg-white p-4 shadow-sm md:p-8">
                            <div className="space-y-4 md:space-y-6 text-lg leading-8 text-slate-600">
                                <p>
                                    Stroke remains one of the leading causes of death and disability
                                    worldwide, with an increasing burden across Africa. Dr. Peter
                                    Waweru has dedicated his career to addressing this challenge
                                    through specialist neurosurgical care, research, public
                                    education, and health systems strengthening.
                                </p>

                                <p>
                                    As a vascular and endovascular neurosurgeon and stroke
                                    specialist, he combines clinical expertise with a deep
                                    commitment to improving stroke outcomes through research,
                                    collaboration, and innovation.
                                </p>
                            </div>

                            <Link
                                to="/about"
                                className="mt-8 inline-flex items-center rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                            >
                                Learn more about Dr. Waweru
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* EDNI Award Highlight */}
            <section className="bg-slate-950 py-5 text-white md:py-20">
                <div className="mx-auto grid max-w-7xl items-center gap-6 md:gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
                    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-black/20">
                        <img
                            src="/edni-award.png"
                            alt="Top Scorer EDNI 2023 Award"
                            className="h-[420px] w-full rounded-[1rem] object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
                            Award Recognition
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Top Scorer, European Diploma in Neurointervention.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Dr. Peter Waweru was recognized as the Top Scorer in the European
                            Diploma in Neurointervention, earning the Half-Brain Award in 2023. This
                            recognition reflects advanced competence in neurointervention,
                            endovascular neurosurgery, and neurovascular care.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200">
                                EDNI 2023
                            </span>

                            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200">
                                Neurointervention
                            </span>

                            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200">
                                International Recognition
                            </span>
                        </div>
                        <div className="mt-8">
                            <Link
                                to="/about#awards"
                                className="inline-flex items-center rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                            >
                                View Awards & Recognition
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research & Impact */}
            <section className="py-5 md:py-20">
                <div className="mx-auto grid max-w-7xl gap-6 md:gap-12 px-5 lg:grid-cols-2 lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Research & Impact
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Generating evidence to improve stroke care across Africa.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Dr. Waweru’s publications have explored stroke epidemiology, outcomes,
                            healthcare systems, public awareness initiatives, and culturally
                            relevant tools for stroke recognition and response.
                        </p>

                        <Link
                            to="/publications"
                            className="mt-8 inline-flex items-center rounded-full bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800"
                        >
                            View Publications
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 md:p-8">
                        <div className="mb-6 flex items-center gap-3">
                            <BookOpen className="h-6 w-6 text-teal-700" />
                            <h3 className="text-2xl font-bold text-slate-950">
                                Research Highlights
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {researchHighlights.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium leading-6 text-slate-700"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas of Expertise */}
            <section className="bg-slate-950 py-5 md:py-20 text-white">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
                            Areas of Expertise
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Specialized stroke and neurovascular care.
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {expertiseAreas.map((area) => {
                            const Icon = area.icon;

                            return (
                                <div
                                    key={area.title}
                                    className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-400/10 text-teal-300">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="text-xl font-bold">{area.title}</h3>
                                    </div>
                                    <p className="mt-4 text-sm leading-6 text-slate-300">
                                        {area.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stroke Awareness */}
            <section className="bg-slate-50 py-5 md:py-20">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
                    <div className="rounded-[1.5rem] bg-gradient-to-br from-teal-700 to-slate-950 p-4 md:p-8 text-white">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-200">
                            Stroke Warning Signs
                        </p>
                        <div className="mt-8 grid gap-4">
                            {[
                                "Sudden weakness or numbness",
                                "Difficulty speaking or understanding speech",
                                "Sudden vision changes",
                                "Loss of balance or coordination",
                                "Severe sudden headache",
                            ].map((sign) => (
                                <div
                                    key={sign}
                                    className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-medium"
                                >
                                    {sign}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Stroke Awareness
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Recognize Stroke. Act Fast. Save Lives.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Early recognition and treatment of stroke can significantly improve
                            outcomes and reduce disability. Understanding the warning signs and
                            seeking immediate medical attention can make the difference between
                            recovery and lifelong impairment.
                        </p>

                        <Link
                            to="/stroke-awareness"
                            className="mt-8 inline-flex items-center rounded-full bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800"
                        >
                            Visit Stroke Awareness Hub
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Collaboration & Speaking */}
            <section className="bg-slate-950 py-5 md:py-20 text-white">
                <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
                        Collaboration & Speaking
                    </p>
                    <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
                        Advancing conversations that strengthen stroke care and health equity.
                    </h2>
                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Dr. Waweru welcomes opportunities for research collaboration, professional
                        partnerships, academic engagement, conference presentations, public health
                        initiatives, and media discussions.
                    </p>

                    <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                        <Link
                            to="/collaborations"
                            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-500"
                        >
                            Research Collaboration
                        </Link>
                        <Link
                            to="/media"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
                        >
                            Speaking Engagements
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="bg-teal-700 py-5 md:py-20 text-white">
                <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-100">
                        Contact
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Connect with Dr. Waweru
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-teal-50">
                        Whether you are seeking a specialist consultation, research collaboration,
                        speaking engagement, or professional partnership, you are welcome to get in
                        touch.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-medium">
                        <span className="rounded-full bg-white/15 px-4 py-2 text-white backdrop-blur">
                            Clinical Consultations
                        </span>

                        <span className="rounded-full bg-white/15 px-4 py-2 text-white backdrop-blur">
                            Research Collaborations
                        </span>

                        <span className="rounded-full bg-white/15 px-4 py-2 text-white backdrop-blur">
                            Media & Speaking
                        </span>

                        <span className="rounded-full bg-white/15 px-4 py-2 text-white backdrop-blur">
                            Partnerships
                        </span>
                    </div>

                    <Link
                        to="/contact"
                        className="mt-10 inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-teal-700 shadow-lg transition hover:bg-slate-100"
                    >
                        Contact Dr. Waweru
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Home;
