import { Link } from "react-router-dom";
import {
    ArrowRight,
    BarChart3,
    BookOpen,
    Brain,
    Globe2,
    Handshake,
    HeartPulse,
    Languages,
    Microscope,
    Network,
    Users,
} from "lucide-react";
import SEO from "../../components/seo/SEO";
import { personPhysicianSchema } from "../../data/schema";

const researchAreas = [
    {
        title: "Stroke Epidemiology",
        description:
            "Understanding the burden, distribution, risk factors, and outcomes of stroke in African populations.",
        icon: BarChart3,
    },
    {
        title: "Stroke Systems of Care",
        description:
            "Improving access, referral pathways, workforce capacity, and the organization of stroke services.",
        icon: Network,
    },
    {
        title: "Neurovascular Disease",
        description:
            "Advancing understanding of cerebrovascular disorders, aneurysms, subarachnoid haemorrhage, and neurosurgical outcomes.",
        icon: Brain,
    },
    {
        title: "Stroke Awareness",
        description:
            "Developing culturally relevant public education tools that improve early recognition and emergency response.",
        icon: HeartPulse,
    },
    {
        title: "Health Equity",
        description:
            "Addressing disparities in stroke prevention, diagnosis, treatment, rehabilitation, and long-term care.",
        icon: Globe2,
    },
];

const featuredProjects = [
    {
        title: "UPESI",
        subtitle: "A Swahili Stroke Awareness Initiative",
        description:
            "UPESI is a culturally adapted Swahili translation of the internationally recognized FAST stroke awareness tool, developed to improve stroke recognition and emergency response among Swahili-speaking populations.",
        icon: Languages,
        tag: "Stroke Awareness",
    },
    {
        title: "Stroke Epidemiology in Kenya",
        subtitle: "Understanding the Kenyan stroke burden",
        description:
            "Research examining stroke burden, evidence gaps, care pathways, patient outcomes, and opportunities for improving stroke prevention and treatment in Kenya.",
        icon: BarChart3,
        tag: "Epidemiology",
    },
    {
        title: "Stroke Services in Africa",
        subtitle: "Strengthening systems of care",
        description:
            "Collaborative work evaluating stroke services across African countries and identifying opportunities to improve infrastructure, diagnostics, workforce capacity, treatment access, and rehabilitation.",
        icon: Users,
        tag: "Health Systems",
    },
    {
        title: "Swahili NIH Stroke Scale Adaptation",
        subtitle: "Standardizing stroke assessment",
        description:
            "Research focused on translating and culturally adapting internationally recognized stroke assessment tools for use in Swahili-speaking settings.",
        icon: BookOpen,
        tag: "Clinical Tools",
    },
];

const impactPoints = [
    "Stroke service development",
    "Public awareness strategies",
    "Clinical practice",
    "Healthcare policy",
    "Health systems strengthening",
];

const collaborationAreas = [
    "Stroke research",
    "Neurosurgery",
    "Public health",
    "Health systems research",
    "Medical education",
    "Community engagement",
];

const Research = () => {
    return (
        <main className="bg-white">
            <SEO
                title="Stroke Research and Innovation in Africa"
                description="Explore Dr. Peter Waweru’s research in stroke epidemiology, stroke systems of care, neurovascular disease, public awareness, and health equity in Africa."
                path="/research"
                schema={personPhysicianSchema}
            />
            <section className="relative overflow-hidden bg-slate-950 py-5 md:py-20 text-white">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-teal-500 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/30 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-200 backdrop-blur">
                        Research • Innovation
                    </div>
                    <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Advancing Stroke Science, Systems of Care, and Health Equity in Africa
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Dr. Peter Waweru’s research is driven by a clear objective: to generate
                        evidence that improves stroke prevention, diagnosis, treatment,
                        rehabilitation, and outcomes for patients across Africa.
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                        <Link
                            to="/publications"
                            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-500"
                        >
                            View Publications
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>

                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
                        >
                            Research Collaboration
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4 md:p-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Research Vision
                        </p>

                        <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Evidence should improve lives.
                        </h2>

                        <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-600">
                            To contribute to a future where evidence-based stroke care is
                            accessible, equitable, and effective for every patient regardless of
                            geography, income, or health system limitations.
                        </p>

                        <div className="mt-10 grid gap-4 md:grid-cols-3">
                            <div className="rounded-2xl bg-white p-4 shadow-sm">
                                <p className="text-lg font-bold text-slate-950">Access</p>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Expanding access to timely diagnosis and treatment.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white p-4 shadow-sm">
                                <p className="text-lg font-bold text-slate-950">Equity</p>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Reducing disparities in stroke outcomes across populations.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white p-4 shadow-sm">
                                <p className="text-lg font-bold text-slate-950">Impact</p>
                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Translating research into measurable improvements in care.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Core Research Areas
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Research focused on stroke care, systems, and equity.
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {researchAreas.map((area) => {
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

            <section className="py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Featured Research Initiatives
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Translating research into practical health impact.
                        </h2>
                    </div>

                    <div className="mt-12 space-y-6">
                        {featuredProjects.map((project, index) => {
                            const Icon = project.icon;

                            return (
                                <div
                                    key={project.title}
                                    className={`grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm lg:grid-cols-2 ${
                                        index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                                    }`}
                                >
                                    <div className="p-4 md:p-8">
                                        <span className="inline-flex rounded-full bg-teal-700/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-teal-700">
                                            {project.tag}
                                        </span>
                                        <h3 className="mt-6 text-3xl font-bold text-slate-950 md:text-4xl">
                                            {project.title}
                                        </h3>
                                        <p className="mt-3 text-lg font-semibold text-slate-700">
                                            {project.subtitle}
                                        </p>
                                        <p className="mt-5 leading-8 text-slate-600">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="flex min-h-[320px] items-center justify-center bg-gradient-to-br from-slate-950 to-teal-950 p-10 text-white">
                                        <div className="text-center">
                                            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-teal-400/10">
                                                <Icon className="h-12 w-12 text-teal-300" />
                                            </div>
                                            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-teal-300">
                                                Research Initiative
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-slate-950 py-5 md:py-20 text-white">
                <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
                            Research Impact
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Informing practice, policy, and health systems strengthening.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Dr. Waweru’s research contributes to a growing body of evidence aimed at
                            improving stroke care in Africa. Through publication, collaboration, and
                            knowledge translation, research findings can be transformed into
                            practical solutions that improve patient outcomes.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        {impactPoints.map((point) => (
                            <div
                                key={point}
                                className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-sm font-semibold text-slate-200"
                            >
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-5 md:py-20">
                <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Collaboration
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Scientific progress depends on collaboration.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Dr. Waweru supports multidisciplinary and international partnerships
                            involving clinicians, researchers, academic institutions, public health
                            organizations, healthcare policymakers, and community stakeholders.
                        </p>
                    </div>

                    <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 md:p-8">
                        <div className="mb-6 flex items-center gap-3">
                            <Handshake className="h-7 w-7 text-teal-700" />
                            <h3 className="text-2xl font-bold text-slate-950">
                                Collaboration Areas
                            </h3>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {collaborationAreas.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            className="mt-8 inline-flex items-center rounded-full bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800"
                        >
                            Start a Research Inquiry
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-teal-700 py-5 md:py-20 text-white">
                <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
                    <Microscope className="mx-auto h-10 w-10 text-teal-100" />
                    <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
                        Explore publications and research contributions.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-teal-50">
                        View selected publications focused on stroke epidemiology, neurovascular
                        disease, stroke systems of care, public awareness, and health equity.
                    </p>

                    <Link
                        to="/publications"
                        className="mt-9 inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-teal-800 transition hover:bg-slate-100"
                    >
                        View Publications
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Research;
