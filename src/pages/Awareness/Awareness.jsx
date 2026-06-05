import { Link } from "react-router-dom";
import {
    AlertTriangle,
    ArrowRight,
    Baby,
    BookOpen,
    Download,
    HeartPulse,
    HelpCircle,
    Languages,
    ShieldCheck,
    Stethoscope,
    Users,
} from "lucide-react";
import SEO from "../../components/seo/SEO";

const warningSigns = [
    "Sudden weakness or numbness of the face, arm, or leg",
    "Difficulty speaking or understanding speech",
    "Sudden loss of vision or blurred vision",
    "Loss of balance, dizziness, or poor coordination",
    "Severe sudden headache with no known cause",
];

const articleCategories = [
    {
        title: "Understanding Stroke",
        description: "Learn what stroke is, how it happens, and why it is an emergency.",
        icon: BrainIcon,
    },
    {
        title: "Warning Signs",
        description: "Recognize symptoms early and understand when to seek emergency care.",
        icon: AlertTriangle,
    },
    {
        title: "Prevention",
        description: "Understand risk factors and practical ways to reduce stroke risk.",
        icon: ShieldCheck,
    },
    {
        title: "High Blood Pressure",
        description: "Learn why blood pressure control is central to stroke prevention.",
        icon: HeartPulse,
    },
    {
        title: "Recovery",
        description: "Understand rehabilitation, follow-up care, and long-term recovery.",
        icon: Stethoscope,
    },
    {
        title: "Caregivers",
        description: "Guidance for families supporting loved ones after stroke.",
        icon: Users,
    },
    {
        title: "Stroke in Young Adults",
        description: "Stroke can affect younger people too. Learn causes and warning signs.",
        icon: Baby,
    },
    {
        title: "UPESI",
        description: "Learn about the Swahili stroke-awareness tool for East Africa.",
        icon: Languages,
    },
];

const resources = [
    "Stroke Warning Signs Poster",
    "Stroke Prevention Checklist",
    "Caregiver Support Guide",
    "Blood Pressure Monitoring Guide",
];

const faqs = [
    {
        question: "What causes stroke?",
        answer: "Stroke occurs when blood flow to part of the brain is blocked or when a blood vessel in the brain bursts, causing brain cells to be damaged.",
    },
    {
        question: "Can stroke be prevented?",
        answer: "Many strokes can be prevented by managing risk factors such as high blood pressure, diabetes, smoking, high cholesterol, obesity, and physical inactivity.",
    },
    {
        question: "What should I do if I suspect stroke?",
        answer: "Seek emergency medical care immediately. Stroke is time-sensitive, and early treatment can improve outcomes.",
    },
    {
        question: "Can young people get stroke?",
        answer: "Yes. Although stroke is more common in older adults, younger people can also be affected, especially when risk factors are present.",
    },
];

function BrainIcon(props) {
    return <BookOpen {...props} />;
}

const Awareness = () => {
    return (
        <main className="bg-white">
            <SEO
                title="Stroke Awareness Hub"
                description="Learn about stroke warning signs, prevention, UPESI, high blood pressure, recovery, caregivers, and when to seek emergency medical care."
                path="/stroke-awareness"
            />

            <section className="relative overflow-hidden bg-slate-950 py-5 md:py-20 text-white">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-teal-500 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/30 blur-3xl" />
                </div>

                <div className="relative mx-auto grid max-w-7xl items-center gap-8 md:gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
                    <div>
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-200 backdrop-blur">
                            Stroke Awareness Hub
                        </div>
                        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                            Knowledge Saves Lives
                        </h1>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Reliable, evidence-based stroke information for individuals, families,
                            caregivers, healthcare professionals, and communities. Learn how to
                            recognize stroke early, reduce risk, and support recovery.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#warning-signs"
                                className="inline-flex items-center justify-center rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-500"
                            >
                                Learn Warning Signs
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>

                            <a
                                href="#upesi"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
                            >
                                Understand UPESI
                            </a>
                        </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-black/20">
                        <div className="relative overflow-hidden rounded-[1.5rem]">
                            <img
                                src="/peter-awareness.jpeg"
                                alt="Dr. Peter Waweru speaking at a conference"
                                className="h-[420px] w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="warning-signs" className="py-4 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="rounded-[1.5rem] border border-teal-100 bg-teal-50 p-4 md:p-8 md:p-10">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-700 text-white">
                                        <AlertTriangle className="h-7 w-7" />
                                    </div>

                                    <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
                                        Stroke is a medical emergency.
                                    </h2>
                                </div>
                                <p className="mt-5 leading-8 text-slate-700">
                                    The earlier a stroke is recognized and treated, the greater the
                                    chance of recovery. If you suspect stroke, seek emergency
                                    medical care immediately.
                                </p>
                            </div>

                            <div className="grid gap-3">
                                {warningSigns.map((sign) => (
                                    <div
                                        key={sign}
                                        className="rounded-2xl border border-teal-100 bg-white p-4 text-sm font-semibold leading-6 text-slate-700 shadow-sm"
                                    >
                                        {sign}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Learn About Stroke
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Practical education for prevention, recognition, and recovery.
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {articleCategories.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-3xl border border-slate-200 bg-white p-4 md:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-700/10 text-teal-700">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-950">
                                            {item.title}
                                        </h3>
                                    </div>
                                    <p className="mt-4 text-sm leading-6 text-slate-600">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="upesi" className="py-5 md:py-20">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Understanding UPESI
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            A stroke awareness tool for East Africa.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            UPESI is a culturally adapted Swahili stroke awareness initiative
                            developed to improve recognition of stroke symptoms and encourage rapid
                            action among Swahili-speaking communities.
                        </p>
                        <p className="mt-4 leading-8 text-slate-600">
                            The initiative helps bridge language barriers and supports public
                            understanding of stroke across East Africa.
                        </p>
                    </div>

                    <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 to-teal-950 p-4 md:p-8 text-white shadow-xl">
                        <div className="flex items-center gap-4">
                            <Languages className="h-10 w-10 shrink-0 text-teal-300" />

                            <h3 className="text-3xl font-bold">UPESI</h3>
                        </div>
                        <p className="mt-3 text-slate-300">
                            A local-language approach to stroke recognition and emergency response.
                        </p>

                        <div className="mt-8 grid gap-3">
                            {[
                                "Community stroke education",
                                "Swahili-language awareness",
                                "Early recognition",
                                "Rapid emergency response",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-semibold text-slate-200"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-950 py-5 md:py-20 text-white">
                <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
                            Prevention
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Many strokes can be prevented.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Although not all strokes can be prevented, many major risk factors can
                            be identified, monitored, and managed through medical care and lifestyle
                            changes.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            "High blood pressure",
                            "Diabetes",
                            "Smoking",
                            "High cholesterol",
                            "Obesity",
                            "Physical inactivity",
                            "Excessive alcohol use",
                            "Heart disease",
                        ].map((risk) => (
                            <div
                                key={risk}
                                className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-sm font-semibold text-slate-200"
                            >
                                {risk}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-5 md:py-20">
                <div className="mx-auto max-w-5xl px-5 lg:px-8">
                    <div className="text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-700/10 text-teal-700">
                            <HelpCircle className="h-7 w-7" />
                        </div>

                        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Common Questions
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Frequently Asked Questions
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                            Clear answers to common questions about stroke awareness, prevention,
                            emergency response, and recovery.
                        </p>
                    </div>

                    <div className="mt-12 space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={faq.question}
                                className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-teal-200 hover:shadow-md md:p-6"
                                open={index === 0}
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                                    <h3 className="text-lg font-bold text-slate-950 md:text-xl">
                                        {faq.question}
                                    </h3>

                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-700/10 text-xl font-semibold text-teal-700 transition group-open:rotate-45">
                                        +
                                    </span>
                                </summary>

                                <p className="mt-5 border-t border-slate-100 pt-5 leading-7 text-slate-600">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-teal-700 py-5 md:py-20 text-white">
                <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
                    <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                        Invite Dr. Waweru for stroke awareness programs.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-teal-50">
                        Improving stroke outcomes requires informed communities. Community
                        organizations, institutions, and partners interested in stroke education
                        initiatives are welcome to connect.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-9 inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-teal-800 transition hover:bg-slate-100"
                    >
                        Community Education Inquiry
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Awareness;
