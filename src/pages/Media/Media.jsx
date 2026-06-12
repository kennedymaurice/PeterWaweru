import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    Brain,
    BriefcaseMedical,
    GraduationCap,
    HeartPulse,
    Megaphone,
    MessageSquareText,
    Mic,
    Newspaper,
    Presentation,
    Radio,
    ShieldCheck,
    Users,
} from "lucide-react";
import SEO from "../../components/seo/SEO";
import { personPhysicianSchema } from "../../data/schema";

const speakingTopics = [
    {
        title: "Stroke Prevention",
        description:
            "Public and professional education on reducing stroke risk and improving early recognition.",
        icon: HeartPulse,
    },
    {
        title: "Stroke Systems of Care",
        description:
            "Building stronger pathways for emergency response, diagnosis, treatment, rehabilitation, and follow-up.",
        icon: BriefcaseMedical,
    },
    {
        title: "Health Equity",
        description:
            "Improving access to timely and effective neurological care across underserved communities.",
        icon: ShieldCheck,
    },
    {
        title: "Neurovascular Surgery",
        description:
            "Specialist perspectives on cerebrovascular disease, aneurysms, and complex neurovascular conditions.",
        icon: Brain,
    },
    {
        title: "Public Health Innovation",
        description:
            "Culturally relevant strategies for improving awareness, education, and healthcare engagement.",
        icon: Megaphone,
    },
    {
        title: "Medical Education",
        description:
            "Training, mentorship, professional development, and capacity building in stroke and neurological care.",
        icon: GraduationCap,
    },
];

const featuredPresentations = [
    {
        year: "2024",
        event: "1st Stroke Symposium, Nairobi, Kenya",
        role: "Organizer & Presenter",
        title: "Framework for Organization of Comprehensive and Primary Stroke Services in Kenya",
    },
    {
        year: "2024",
        event: "World Stroke Organization Future Leaders Meeting, Abu Dhabi, UAE",
        role: "Presenter",
        title: "Stroke Advocacy Pitch to Local Government Representatives",
    },
    {
        year: "2024",
        event: "KUTRRH Stroke Awareness Day, Nairobi, Kenya",
        role: "Presenter",
        title: "Management and Outcomes of Subarachnoid Hemorrhage in Nairobi, Kenya",
    },
    {
        year: "2024",
        event: "AIC Kijabe Hospital Research Day",
        role: "Poster Presentation",
        title: "Validation of the Swahili Translation of the National Institute of Health Stroke Scale (NIHSS)",
    },
    {
        year: "2022",
        event: "2nd COSECSA Scientific Conference, Windhoek, Namibia",
        role: "Presenter",
        title: "Stroke Revascularization Strategies in Low Resource Settings",
    },
    {
        year: "2022",
        event: "Continental Association of African Neurological Societies",
        role: "Presenter",
        title: "Mechanical Thrombectomy in Nairobi, Kenya",
    },
];

const availableFor = [
    { title: "Keynote Addresses", icon: Mic },
    { title: "Conferences", icon: Presentation },
    { title: "Academic Lectures", icon: BookOpen },
    { title: "Workshops", icon: Users },
    { title: "Media Interviews", icon: Radio },
    { title: "Panel Discussions", icon: MessageSquareText },
];

const mediaTopics = [
    "Stroke prevention",
    "Stroke awareness",
    "Neurovascular health",
    "Public health",
    "Health systems strengthening",
    "Healthcare access",
    "Medical research",
    "Health equity",
    "Healthcare policy",
];

const presentationIdeas = [
    "The Growing Burden of Stroke in Africa",
    "Improving Stroke Outcomes Through Early Recognition",
    "Building Effective Stroke Systems of Care",
    "Health Equity and Access to Neurological Care",
    "Lessons from Stroke Research in Africa",
    "Public Awareness as a Tool for Prevention",
    "Strengthening Neurovascular Services in Resource-Limited Settings",
    "Future Directions in Stroke Care",
];

const Media = () => {
    return (
        <main className="bg-white">
            <SEO
                title="Media, Speaking and Advocacy"
                description="Invite Dr. Peter Waweru for speaking engagements, media commentary, public health forums, stroke awareness programs, and professional events."
                path="/media"
                schema={personPhysicianSchema}
            />
            <section className="relative overflow-hidden bg-slate-950 py-5 md:py-20 text-white">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-teal-500 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/30 blur-3xl" />
                </div>

                <div className="relative mx-auto grid max-w-7xl items-center gap-8 md:gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
                    <div>
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-200 backdrop-blur">
                            Media • Speaking • Advocacy
                        </div>
                        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                            Advancing Conversations That Improve Lives
                        </h1>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Beyond clinical practice and research, Dr. Peter Waweru is actively
                            engaged in public education, professional dialogue, advocacy, and
                            efforts aimed at strengthening stroke care systems across Africa.
                        </p>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-500"
                            >
                                Invite Dr. Waweru
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                            <Link
                                to="/stroke-awareness"
                                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-slate-100"
                            >
                                Stroke Awareness
                            </Link>

                            <Link
                                to="/gallery"
                                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
                            >
                                Explore Gallery
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl shadow-black/20">
                        <div className="relative overflow-hidden rounded-[1.5rem]">
                            <img
                                src="/waweru.webp"
                                alt="Dr. Peter Waweru speaking at a conference"
                                className="h-[420px] w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-300">
                                    Speaking & Advocacy
                                </p>

                                <p className="mt-3 max-w-lg text-slate-200">
                                    Engaging healthcare professionals, policymakers, researchers,
                                    and communities in conversations that improve stroke outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Public Engagement
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Communicating science beyond academic journals.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Research has the greatest impact when it informs practice, shapes
                            policy, and reaches the communities it is intended to serve. Dr. Waweru
                            contributes to public and professional discussions on stroke prevention,
                            neurovascular health, healthcare leadership, and health equity.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-slate-100 py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-3xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                                Speaking Topics
                            </p>
                            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                                Expert perspectives on stroke care and health systems.
                            </h2>
                        </div>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {speakingTopics.map((topic) => {
                            const Icon = topic.icon;

                            return (
                                <div
                                    key={topic.title}
                                    className="rounded-3xl border border-slate-200 bg-white p-4 md:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-700/10 text-teal-700">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-950">
                                            {topic.title}
                                        </h3>
                                    </div>
                                    <p className="mt-4 leading-7 text-slate-600">
                                        {topic.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-5 md:py-20">
                <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Available For
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Professional forums, public education, and expert commentary.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Dr. Waweru welcomes structured opportunities that contribute to
                            professional learning, public awareness, policy dialogue, and improved
                            understanding of stroke care.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {availableFor.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-3xl border border-slate-200 bg-slate-50 p-4 md:p-8"
                                >
                                    <div className="flex items-center gap-4">
                                        <Icon className="h-7 w-7 shrink-0 text-teal-700" />

                                        <h3 className="text-xl font-bold text-slate-950">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-slate-100 py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-4xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Featured Presentations
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Contributing to stroke science, advocacy, and professional dialogue.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Dr. Waweru regularly contributes to scientific conferences, stroke
                            symposia, research meetings, and professional forums focused on
                            improving stroke care, neurovascular services, and health systems across
                            Africa and beyond.
                        </p>
                    </div>

                    <div className="mt-12 space-y-5">
                        {featuredPresentations.map((item) => (
                            <div
                                key={`${item.year}-${item.title}`}
                                className="rounded-3xl border border-slate-200 bg-white p-4 md:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="rounded-full bg-teal-700/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                                        {item.year}
                                    </span>

                                    <span className="text-sm font-semibold text-slate-500">
                                        {item.role}
                                    </span>
                                </div>

                                <h3 className="mt-5 text-2xl font-bold text-slate-950">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-lg font-medium text-teal-700">
                                    {item.event}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-950 py-5 md:py-20 text-white">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
                            Advocacy
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Strengthening stroke care across Africa.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Stroke remains one of the leading causes of death and disability across
                            Africa. Many patients face delayed diagnosis, limited specialist
                            services, inadequate public awareness, restricted access to
                            rehabilitation, and broader health system constraints.
                        </p>
                        <p className="mt-4 leading-8 text-slate-300">
                            Dr. Waweru advocates for practical, sustainable solutions that improve
                            prevention, treatment, rehabilitation, and long-term outcomes.
                        </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-4 md:p-8">
                        <h3 className="text-2xl font-bold">Advocacy Priorities</h3>

                        <div className="mt-6 grid gap-3">
                            {[
                                "Community awareness",
                                "Health literacy",
                                "Capacity building",
                                "Workforce development",
                                "Policy engagement",
                                "Health systems strengthening",
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

            <section className="py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                                Media Commentary
                            </p>
                            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                                Expert perspectives for media and public audiences.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                Journalists, editors, broadcasters, podcast hosts, and media
                                organizations may request expert commentary on stroke, neurosurgery,
                                public health, healthcare systems, and health equity.
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {mediaTopics.map((topic) => (
                                <div
                                    key={topic}
                                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5 text-sm font-semibold text-slate-700"
                                >
                                    <div className="flex items-center gap-3">
                                        <Newspaper className="h-5 w-5 shrink-0 text-teal-700" />

                                        <span>{topic}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-100 py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Presentation Topics
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Talks designed for academic, clinical, and public health audiences.
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-4 md:grid-cols-2">
                        {presentationIdeas.map((idea) => (
                            <div
                                key={idea}
                                className="rounded-3xl border border-slate-200 bg-white p-4 md:p-8 shadow-sm"
                            >
                                <h3 className="text-xl font-bold text-slate-950">{idea}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-teal-700 py-5 md:py-20 text-white">
                <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
                    <Mic className="mx-auto h-10 w-10 text-teal-100" />
                    <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
                        Invite Dr. Waweru
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-teal-50">
                        Organizations, institutions, media houses, conference organizers, and
                        professional associations interested in engaging Dr. Waweru for speaking,
                        expert commentary, training, or collaboration are encouraged to get in
                        touch.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-9 inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-teal-800 transition hover:bg-slate-100"
                    >
                        Submit Speaking or Media Inquiry
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Media;
