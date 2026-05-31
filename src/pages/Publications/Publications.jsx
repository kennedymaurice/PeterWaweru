import { Link } from "react-router-dom";
import {
    ArrowRight,
    BarChart3,
    BookOpen,
    ExternalLink,
    FileText,
    Globe2,
    Quote,
    Search,
    Tags,
} from "lucide-react";
import SEO from "../../components/seo/SEO";
import { publicationsSchema } from "../../data/schema";

const stats = [
    { value: "10+", label: "Publications" },
    { value: "170+", label: "Citations" },
    { value: "2,900+", label: "Research Reads" },
    { value: "5+", label: "Research Areas" },
];

const publications = [
    {
        title: "UPESI: Swahili Translation of the FAST Acronym for Stroke Awareness Campaigns in East Africa",
        journal: "African Journal of Emergency Medicine",
        url: "https://www.researchgate.net/publication/382082732_UPESI_Swahili_translation_of_the_FAST_acronym_for_stroke_awareness_campaigns_in_East_Africa?_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6ImNpdGF0aW9uRG93bmxvYWQiLCJwYWdlIjoicHJvZmlsZSJ9fQ",
        abstractUrl: "https://www.sciencedirect.com/science/article/pii/S2211419X2400025X",
        citation: `Waweru, P. (2024). UPESI: Swahili Translation of the FAST Acronym for Stroke Awareness Campaigns in East Africa. African Journal of Emergency Medicine. https://doi.org/10.1016/j.afjem.2024.01.001`,
        year: "2024",
        summary:
            "A study focused on developing UPESI, a culturally adapted Swahili translation of the FAST stroke-awareness tool to improve early stroke recognition and emergency response in East Africa.",
        tags: ["Stroke Awareness", "Public Health", "UPESI"],
    },
    {
        title: "Revisiting Africa’s Stroke Obstacles and Services (SOS)",
        journal: "Neurological Sciences",
        url: "https://www.sciencedirect.com/science/article/pii/S2211419X2400025X",
        abstractUrl: "https://www.sciencedirect.com/science/article/pii/S2211419X2400025X",
        citation: `Waweru, P. (2024). UPESI: Swahili Translation of the FAST Acronym for Stroke Awareness Campaigns in East Africa. African Journal of Emergency Medicine. https://doi.org/10.1016/j.afjem.2024.01.001`,
        year: "2025",
        summary:
            "A continental reassessment of stroke services, barriers, and opportunities for strengthening stroke systems of care across African countries.",
        tags: ["Stroke Systems", "Africa", "Health Equity"],
    },
    {
        title: "Stroke Epidemiology, Care, and Outcomes in Kenya: A Scoping Review",
        journal: "Frontiers in Neurology",
        url: "https://www.sciencedirect.com/science/article/pii/S2211419X2400025X",
        abstractUrl: "https://www.sciencedirect.com/science/article/pii/S2211419X2400025X",
        citation: `Waweru, P. (2024). UPESI: Swahili Translation of the FAST Acronym for Stroke Awareness Campaigns in East Africa. African Journal of Emergency Medicine. https://doi.org/10.1016/j.afjem.2024.01.001`,
        year: "2021",
        summary:
            "A review of evidence on stroke burden, care pathways, and outcomes in Kenya, highlighting gaps and opportunities for improving stroke prevention and treatment.",
        tags: ["Epidemiology", "Kenya", "Outcomes"],
    },
    {
        title: "Stroke Services in Africa: What Is There and What Is Needed",
        journal: "International Journal of Stroke",
        url: "https://www.sciencedirect.com/science/article/pii/S2211419X2400025X",
        abstractUrl: "https://www.sciencedirect.com/science/article/pii/S2211419X2400025X",
        citation: `Waweru, P. (2024). UPESI: Swahili Translation of the FAST Acronym for Stroke Awareness Campaigns in East Africa. African Journal of Emergency Medicine. https://doi.org/10.1016/j.afjem.2024.01.001`,
        year: "2022",
        summary:
            "A multicountry assessment examining availability, accessibility, and needs of stroke services across African healthcare systems.",
        tags: ["Health Systems", "Stroke Care", "Africa"],
    },
    {
        title: "Mortality and Functional Outcomes After Spontaneous Subarachnoid Haemorrhage",
        journal: "PLOS ONE",
        url: "https://www.sciencedirect.com/science/article/pii/S2211419X2400025X",
        abstractUrl: "https://www.sciencedirect.com/science/article/pii/S2211419X2400025X",
        citation: `Waweru, P. (2024). UPESI: Swahili Translation of the FAST Acronym for Stroke Awareness Campaigns in East Africa. African Journal of Emergency Medicine. https://doi.org/10.1016/j.afjem.2024.01.001`,
        year: "2019",
        summary:
            "A multicentre Kenyan study evaluating mortality and functional outcomes among patients with spontaneous subarachnoid haemorrhage.",
        tags: ["Neurosurgery", "SAH", "Outcomes"],
    },
];

const categories = [
    "Stroke Awareness",
    "Stroke Epidemiology",
    "Systems of Care",
    "Neurovascular Surgery",
    "Health Equity",
];

const profiles = ["ResearchGate", "Google Scholar", "ORCID", "PubMed"];

const copyCitation = async (citation) => {
    if (!citation) return;

    try {
        await navigator.clipboard.writeText(citation);
        alert("Citation copied to clipboard.");
    } catch (error) {
        alert("Unable to copy citation. Please try again.");
    }
};

const Publications = () => {
    return (
        <main className="bg-white">
            <SEO
                title="Publications on Stroke Care and Neurovascular Health"
                description="Selected publications by Dr. Peter Waweru covering stroke awareness, stroke epidemiology, stroke services in Africa, neurovascular disease, and health equity."
                path="/publications"
                type="article"
                schema={publicationsSchema}
            />
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 py-10 md:py-20 text-white">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-teal-500 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/30 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-200 backdrop-blur">
                        Publications
                    </div>
                    <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Research Contributions in Stroke Care and Neurovascular Health
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Dr. Peter Waweru’s publications focus on advancing stroke care,
                        neurovascular surgery, stroke epidemiology, health systems strengthening,
                        and health equity in Africa.
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                        <Link
                            to="/research"
                            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-500"
                        >
                            View Research
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

            <section className="bg-slate-50 py-16">
                <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="rounded-3xl border border-slate-200 bg-white p-4 md:p-8 shadow-sm"
                        >
                            <div className="mb-4 h-1 w-12 rounded-full bg-yellow-500" />
                            <p className="text-4xl font-bold text-slate-950">{stat.value}</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-10 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-3xl">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                                Featured Publications
                            </p>
                            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                                Selected academic work and research output.
                            </h2>
                        </div>

                        <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-500">
                            <Search className="mr-2 h-4 w-4" />
                            Search and filters coming soon
                        </div>
                    </div>

                    <div className="mt-12 space-y-6">
                        {publications.map((publication) => (
                            <article
                                key={publication.title}
                                className="rounded-[2rem] border border-slate-200 bg-white p-4 md:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
                            >
                                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                    <div className="max-w-4xl">
                                        <div className="mb-4 flex flex-wrap items-center gap-3">
                                            <span className="rounded-full bg-teal-700/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
                                                {publication.year}
                                            </span>
                                            <span className="text-sm font-semibold text-slate-500">
                                                {publication.journal}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl font-bold leading-snug text-slate-950 md:text-3xl">
                                            {publication.title}
                                        </h3>

                                        <p className="mt-5 leading-8 text-slate-600">
                                            {publication.summary}
                                        </p>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {publication.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                                        <a
                                            href={publication.url || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-disabled={!publication.url}
                                            className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                                                publication.url
                                                    ? "bg-teal-700 text-white hover:bg-teal-800"
                                                    : "cursor-not-allowed bg-slate-200 text-slate-400"
                                            }`}
                                        >
                                            View Publication
                                            <ExternalLink className="ml-2 h-4 w-4" />
                                        </a>

                                        <a
                                            href={publication.abstractUrl || publication.url || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-disabled={
                                                !publication.abstractUrl && !publication.url
                                            }
                                            className={`inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition ${
                                                publication.abstractUrl || publication.url
                                                    ? "border-slate-300 text-slate-700 hover:border-teal-700 hover:text-teal-700"
                                                    : "cursor-not-allowed border-slate-200 text-slate-400"
                                            }`}
                                        >
                                            Abstract
                                            <FileText className="ml-2 h-4 w-4" />
                                        </a>

                                        <button
                                            type="button"
                                            onClick={() => copyCitation(publication.citation)}
                                            disabled={!publication.citation}
                                            className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                                                publication.citation
                                                    ? "text-slate-600 hover:bg-slate-100 hover:text-teal-700"
                                                    : "cursor-not-allowed text-slate-400"
                                            }`}
                                        >
                                            Citation
                                            <Quote className="ml-2 h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-950 py-10 md:py-20 text-white">
                <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
                            Publication Categories
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Explore research by theme.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Publications can be organized by research focus, helping clinicians,
                            researchers, students, and institutions quickly find relevant work.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {categories.map((category) => (
                            <div
                                key={category}
                                className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"
                            >
                                <Tags className="mb-4 h-6 w-6 text-teal-300" />
                                <h3 className="text-lg font-bold">{category}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Research Profiles
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Academic and research profile links.
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {profiles.map((profile) => (
                            <div
                                key={profile}
                                className="rounded-3xl border border-slate-200 bg-slate-50 p-4 md:p-8 shadow-sm"
                            >
                                <Globe2 className="h-8 w-8 text-teal-700" />
                                <h3 className="mt-5 text-2xl font-bold text-slate-950">
                                    {profile}
                                </h3>
                                <p className="mt-3 leading-7 text-slate-600">
                                    External profile link to be added after verification.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-teal-700 py-10 md:py-20 text-white">
                <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
                    <BookOpen className="mx-auto h-10 w-10 text-teal-100" />
                    <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
                        Interested in research collaboration?
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-teal-50">
                        Researchers, institutions, and healthcare partners interested in stroke
                        research, neurovascular disease, public health, or health systems projects
                        are welcome to connect.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-9 inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-teal-800 transition hover:bg-slate-100"
                    >
                        Start a Research Inquiry
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Publications;
