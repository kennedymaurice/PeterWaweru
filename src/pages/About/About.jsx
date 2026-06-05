import { Link } from "react-router-dom";
import {
    ArrowRight,
    Award,
    Brain,
    Building2,
    GraduationCap,
    HeartPulse,
    Microscope,
    ShieldCheck,
    Stethoscope,
    Activity,
    BarChart3,
    Network,
    Scale,
    Globe2,
    Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "../../components/seo/SEO";
import { personPhysicianSchema } from "../../data/schema";

const credentials = [
    {
        title: "MBChB",
        institution: "Moi University School of Medicine, Kenya",
        description:
            "Bachelor of Medicine and Bachelor of Surgery, providing the foundation for clinical practice and patient care.",
        icon: GraduationCap,
    },
    {
        title: "MSc (Stroke Medicine)",
        institution: "Danube University Krems, Austria",
        description:
            "Advanced postgraduate training focused on stroke prevention, diagnosis, treatment, rehabilitation, and systems of care.",
        icon: Brain,
    },
    {
        title: "FCS (ECSA)",
        institution: "College of Surgeons of East, Central and Southern Africa",
        description:
            "Specialist fellowship in neurosurgery recognizing advanced surgical training, competence, and professional excellence.",
        icon: Award,
    },
    {
        title: "EDNI",
        institution: "European Society of Minimally Invasive Neurological Therapy (ESMINT)",
        description:
            "European Diploma in Neurointervention reflecting advanced expertise in endovascular and neurovascular intervention.",
        icon: ShieldCheck,
    },
];

const memberships = [
    {
        name: "World Stroke Organization (WSO)",
        description:
            "Global organization dedicated to reducing the burden of stroke through research, education, advocacy, and improved stroke care worldwide.",
        icon: Globe2,
    },
    {
        name: "European Stroke Organization (ESO)",
        description:
            "Leading European society promoting excellence in stroke research, prevention, treatment, and rehabilitation.",
        icon: Brain,
    },
    {
        name: "African Stroke Organization (ASO)",
        description:
            "Continental organization advancing stroke awareness, research, collaboration, and care throughout Africa.",
        icon: Shield,
    },
    {
        name: "European Society of Minimally Invasive Neurological Therapy (ESMINT)",
        description:
            "Professional society supporting innovation, education, and excellence in neurointerventional and endovascular neurological therapies.",
        icon: Microscope,
    },
];

const appointments = [
    {
        institution: "Kenyatta University Teaching, Referral & Research Hospital (KUTRRH)",
        role: "Vascular & Endovascular Neurosurgeon",
        description:
            "Providing specialist neurosurgical and neurovascular care while contributing to the advancement of cerebrovascular services, stroke management, and clinical excellence.",
    },
    {
        institution: "Nairobi Stroke Clinic",
        role: "Stroke Specialist",
        description:
            "Supporting patients through comprehensive stroke assessment, prevention, treatment, rehabilitation planning, and long-term follow-up care.",
    },
    {
        institution: "Pan-African Center for Health Equity (PACHE)",
        role: "Founder & Stroke Researcher",
        description:
            "Leading research and advocacy initiatives focused on stroke care, health systems strengthening, and equitable access to healthcare across Africa.",
    },
    {
        institution: "Kenya Stroke Society",
        role: "Founder & Researcher",
        category: "Leadership & Advocacy",
        description:
            "Supporting the growth of a national professional platform focused on strengthening stroke research, public awareness, professional collaboration, and improved stroke outcomes in Kenya.",
    },
    {
        institution: "Kenya Institute of Primate Research (KIPRE)",
        role: "Associate Researcher",
        description:
            "Contributing to collaborative scientific research and advancing knowledge relevant to neurological health and disease.",
    },
];

const interests = [
    {
        title: "Stroke Medicine",
        description: "Prevention, diagnosis, treatment, and recovery.",
        icon: HeartPulse,
    },
    {
        title: "Neurovascular Surgery",
        description: "Advanced management of cerebrovascular disorders.",
        icon: Brain,
    },
    {
        title: "Cerebrovascular Disease",
        description: "Research and clinical care of vascular brain disorders.",
        icon: Activity,
    },
    {
        title: "Stroke Epidemiology",
        description: "Understanding disease patterns, risk factors, and outcomes.",
        icon: BarChart3,
    },
    {
        title: "Health Systems Strengthening",
        description: "Building effective stroke systems of care.",
        icon: Network,
    },
    {
        title: "Health Equity",
        description: "Reducing disparities in access, treatment, and outcomes.",
        icon: Scale,
    },
];

const About = () => {
    return (
        <main className="bg-white">
            <SEO
                title="About Dr. Peter Waweru"
                description="Learn about Dr. Peter Waweru, a vascular and endovascular neurosurgeon, stroke specialist, researcher, and advocate advancing stroke care and health equity in Africa."
                path="/about"
                schema={personPhysicianSchema}
            />

            <section className="relative overflow-hidden bg-slate-950 py-5 md:py-20 text-white">
                <div className="absolute inset-0">
                    <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-teal-600/25 blur-3xl" />
                    <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,118,110,0.18),transparent_35%)]" />
                </div>

                <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
                    <div className="relative">
                        <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-teal-500/20 blur-2xl" />
                        <div className="absolute -right-6 bottom-10 h-52 w-52 rounded-full bg-yellow-500/10 blur-2xl" />

                        <div className="relative rounded-[1.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
                            <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-900">
                                <img
                                    src="/peter.jpeg"
                                    alt="Dr. Peter Kuria Waweru"
                                    className="h-[540px] w-full object-cover object-center"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />

                                <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200 backdrop-blur">
                                    MBChB • MSc • FCS (ECSA) • EDNI
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-md">
                                        <h1 className="text-2xl font-bold text-white">
                                            Dr. Peter Kuria Waweru
                                        </h1>

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

                    <div>
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-200 backdrop-blur">
                            Professional Biography
                        </div>

                        <h2 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                            Advancing stroke care, neurosurgery, and health equity.
                        </h2>

                        <div className="mt-8 space-y-6 text-lg leading-8 text-slate-300">
                            <p>
                                Dr. Peter Kuria Waweru is a vascular and endovascular neurosurgeon,
                                stroke specialist, researcher, and advocate dedicated to improving
                                stroke care and neurological health outcomes in Kenya and across
                                Africa.
                            </p>

                            <p>
                                His work sits at the intersection of clinical excellence, research,
                                education, and public health. Through specialist patient care,
                                collaborative research, and health systems strengthening
                                initiatives, he seeks to address one of the continent’s most
                                pressing health challenges: the growing burden of stroke and
                                cerebrovascular disease.
                            </p>

                            <p>
                                With extensive experience in neurosurgery and stroke medicine, Dr.
                                Waweru has developed a particular interest in cerebrovascular
                                disorders, neurovascular surgery, stroke prevention, stroke systems
                                of care, and health equity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-slate-50 py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-4xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Credentials
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Internationally trained in stroke medicine, neurosurgery, and
                            neurointervention.
                        </h2>

                        <p className="mt-6 text-lg font-semibold leading-8 text-slate-900">
                            MBChB • MSc (Stroke Medicine) • FCS (ECSA) • EDNI
                        </p>
                    </div>

                    <div className="mt-5 md:mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {credentials.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
          group rounded-3xl border border-slate-200
          bg-white p-4 md:p-7 shadow-sm
          transition-all duration-300
          hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl
        "
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-700/10 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-950">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm font-medium text-teal-700">
                                                {item.institution}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="mt-4 leading-7 text-slate-600">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-slate-950 py-5 text-white md:py-20">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-teal-500 blur-3xl" />
                    <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-yellow-500/20 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-4xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
                            Professional Memberships
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Engaged in leading international stroke and neurovascular communities.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Dr. Waweru actively participates in professional organizations that
                            advance stroke medicine, neurovascular care, research, education,
                            innovation, and health policy across Africa, Europe, and the global
                            community.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {memberships.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.name}
                                    className="
              group rounded-3xl
              border border-white/10
              bg-white/[0.04]
              p-4 md:p-8
              backdrop-blur-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:border-teal-400/30
              hover:bg-white/[0.06]
              hover:shadow-2xl hover:shadow-black/20
            "
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-300 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="text-xl font-bold text-white">
                                            {item.name}
                                        </h3>
                                    </div>

                                    <p className="mt-5 leading-7 text-slate-300">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-6 md:gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                                Appointments & Leadership
                            </p>

                            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                                Current professional roles.
                            </h2>

                            <p className="mt-6 text-lg font-semibold leading-8 text-slate-900">
                                Clinical Practice • Research • Advocacy • Health Equity
                            </p>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                Dr. Waweru's work spans specialist clinical practice, stroke
                                research, public health advocacy, and health systems strengthening
                                across Kenya and Africa.
                            </p>

                            <div className="mt-5 md:mt-8 space-y-4">
                                <div className="rounded-2xl bg-slate-50 p-4">
                                    <p className="text-2xl font-bold text-slate-950">5+</p>
                                    <p className="text-sm text-slate-600">
                                        Professional appointments and affiliations
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {appointments.map((item) => (
                                <div
                                    key={item.institution}
                                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-teal-700/10 text-teal-700">
                                            <Building2 className="h-5 w-5" />
                                        </div>

                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                                            {item.role}
                                        </p>
                                    </div>
                                    <h3 className="mt-5 text-2xl font-bold text-slate-950">
                                        {item.institution}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-600">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-950 py-5 md:py-20 text-white">
                <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 lg:px-8">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10">
                                <HeartPulse className="h-6 w-6 text-teal-300" />
                            </div>

                            <h2 className="text-3xl font-bold">Mission</h2>
                        </div>
                        <p className="mt-4 leading-7 text-slate-300">
                            To advance stroke care through clinical excellence, research, education,
                            advocacy, and collaboration while strengthening healthcare systems and
                            improving neurological health outcomes across Africa.
                        </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/10">
                                <Microscope className="h-6 w-6 text-teal-300" />
                            </div>

                            <h2 className="text-3xl font-bold">Vision</h2>
                        </div>
                        <p className="mt-4 leading-7 text-slate-300">
                            To contribute to a future where every person at risk of stroke has
                            access to timely diagnosis, evidence-based treatment, rehabilitation,
                            and preventive care regardless of where they live.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-4xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Areas of Interest
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Clinical, academic, and public health focus.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Dr. Waweru's work spans specialist clinical care, stroke research,
                            health systems development, and public health initiatives aimed at
                            improving neurological outcomes across Africa.
                        </p>
                    </div>

                    <div className="mt-5 md:mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {interests.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.06,
                                        ease: "easeOut",
                                    }}
                                    whileHover={{ y: -6 }}
                                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-xl hover:shadow-slate-900/10"
                                >
                                    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-teal-700/5 transition group-hover:bg-teal-700/10" />

                                    <div className="relative flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-700/10 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-950">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="relative mt-5 leading-7 text-slate-600">
                                        {item.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-teal-700 py-5 md:py-20 text-white">
                <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-100">
                        WORKS
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                        Explore Dr. Waweru’s research and publications.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-teal-50">
                        Learn more about his work in stroke epidemiology, neurovascular disease,
                        stroke awareness, and health systems strengthening.
                    </p>

                    <Link
                        to="/research"
                        className="mt-10 inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-teal-700 shadow-lg transition hover:bg-slate-100"
                    >
                        Explore Research
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default About;
