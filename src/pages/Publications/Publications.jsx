import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ArrowUpRight,
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
        url: "https://www.researchgate.net/publication/382082732_UPESI_Swahili_translation_of_the_FAST_acronym_for_stroke_awareness_campaigns_in_East_Africa",
        abstractUrl:
            "https://www.sciencedirect.com/science/article/pii/S2211419X24000181?via%3Dihub",
        citation:
            "Waweru PK, Yulu E, Matuja SS, Gatimu SM. UPESI: Swahili translation of the FAST acronym for stroke awareness campaigns in East Africa. African Journal of Emergency Medicine. 2024;14(3):141-144. doi:10.1016/j.afjem.2024.05.003",
        year: "2024",
        summary:
            "A study focused on developing UPESI, a culturally adapted Swahili translation of the FAST stroke-awareness tool to improve early stroke recognition and emergency response in East Africa.",
        tags: ["Stroke Awareness", "Public Health", "UPESI"],
    },
    {
        title: "Revisiting Africa’s Stroke Obstacles and Services (SOS)",
        journal: "Neurological Sciences",
        url: "https://link.springer.com/article/10.1007/s10072-024-07982-y",
        abstractUrl:
            "https://www.researchgate.net/publication/388068418_Revisiting_Africa's_Stroke_Obstacles_and_Services_SOS",
        citation:
            "Roushdy T, et al. Revisiting Africa’s Stroke Obstacles and Services (SOS). Neurological Sciences. 2025;46(5):2171-2181. doi:10.1007/s10072-024-07982-y",
        year: "2025",
        summary:
            "A continental reassessment of stroke services, barriers, and opportunities for strengthening stroke systems of care across African countries.",
        tags: ["Stroke Systems", "Africa", "Health Equity"],
    },
    {
        title: "Stroke Epidemiology, Care, and Outcomes in Kenya: A Scoping Review",
        journal: "Frontiers in Neurology",
        url: "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2021.785607/full",
        abstractUrl:
            "https://www.frontiersin.org/journals/neurology/articles/10.3389/fneur.2021.785607/full",
        citation:
            "Waweru P, Gatimu SM. Stroke Epidemiology, Care, and Outcomes in Kenya: A Scoping Review. Frontiers in Neurology. 2021;12:785607. doi:10.3389/fneur.2021.785607",
        year: "2021",
        summary:
            "A review of evidence on stroke burden, care pathways, and outcomes in Kenya, highlighting gaps and opportunities for improving stroke prevention and treatment.",
        tags: ["Epidemiology", "Kenya", "Outcomes"],
    },
    {
        title: "Stroke Services in Africa: What Is There and What Is Needed",
        journal: "International Journal of Stroke",
        url: "https://www.researchgate.net/publication/357574041_Stroke_services_in_Africa_What_is_there_and_what_is_needed",
        abstractUrl: "https://journals.sagepub.com/doi/10.1177/17474930211066416",
        citation:
            "Roushdy T, et al. Stroke services in Africa: What is there and what is needed. International Journal of Stroke. 2022;17(9):972-982. doi:10.1177/17474930211066416",
        year: "2022",
        summary:
            "A multicountry assessment examining availability, accessibility, and needs of stroke services across African healthcare systems.",
        tags: ["Health Systems", "Stroke Care", "Africa"],
    },
    {
        title: "Mortality and Functional Outcomes After Spontaneous Subarachnoid Haemorrhage",
        journal: "PLOS ONE",
        url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0217832",
        abstractUrl:
            "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0217832#abstract0",
        citation:
            "Waweru P, Gatimu SM. Mortality and functional outcomes after a spontaneous subarachnoid haemorrhage: A retrospective multicentre cross-sectional study in Kenya. PLOS ONE. 2019;14(6):e0217832. doi:10.1371/journal.pone.0217832",
        year: "2019",
        summary:
            "A multicentre Kenyan study evaluating mortality and functional outcomes among patients with spontaneous subarachnoid haemorrhage.",
        tags: ["Neurosurgery", "SAH", "Outcomes"],
    },
    {
        title: "Global Impact of the COVID-19 Pandemic on Stroke Volumes and Cerebrovascular Events: A 1-Year Follow-up",
        journal: "Neurology",
        url: "https://n.neurology.org/content/100/4/e408",
        abstractUrl: "https://pubmed.ncbi.nlm.nih.gov/36400492/",
        citation:
            "Nguyen TN, Qureshi MM, Klein P, Yamagami H, Mikulik R, Czlonkowska A, et al. Global Impact of the COVID-19 Pandemic on Stroke Volumes and Cerebrovascular Events: A 1-Year Follow-up. Neurology. 2023;100(4):e408-e421. doi:10.1212/WNL.0000000000201426",
        year: "2023",
        summary:
            "An international collaborative study evaluating the ongoing impact of the COVID-19 pandemic on stroke presentations, stroke volumes, and cerebrovascular events across multiple healthcare systems worldwide.",
        tags: ["COVID-19", "Stroke", "Global Health"],
    },
    {
        title: "Isolated Septic Non-Otogenic Lateral Sinus Thrombosis Complicating Nasopharyngitis in a 2-Month-Old Infant: A Case Report",
        journal: "BJR Case Reports",
        url: "https://www.birpublications.org/doi/10.1259/bjrcr.20170053",
        abstractUrl: "https://pubmed.ncbi.nlm.nih.gov/30363284/",
        citation:
            "Waweru P, Wakonyo A, Dossajee H, Reel B. Isolated septic non-otogenic lateral sinus thrombosis complicating nasopharyngitis in a 2-month-old infant: a case report. BJR Case Reports. 2017;3(4):20170053. doi:10.1259/bjrcr.20170053",
        year: "2017",
        summary:
            "A rare pediatric neurosurgical and infectious disease case highlighting the diagnosis and management of septic lateral sinus thrombosis in infancy.",
        tags: ["Pediatrics", "Neurosurgery", "Case Report"],
    },
    {
        title: "Protracted Refractory Pain Post-TEVAR: Post-Implantation Syndrome?",
        journal: "Journal of Surgical Case Reports",
        url: "https://academic.oup.com/jscr/article/2016/10/rjw173/2623786",
        abstractUrl: "https://pubmed.ncbi.nlm.nih.gov/27843662/",
        citation:
            "Waweru P, Gill H, Abeid C. Protracted refractory pain post-TEVAR: post-implantation syndrome? Journal of Surgical Case Reports. 2016;2016(10):rjw173. doi:10.1093/jscr/rjw173",
        year: "2016",
        summary:
            "A vascular surgery case report exploring persistent postoperative pain following thoracic endovascular aortic repair and its possible association with post-implantation syndrome.",
        tags: ["Vascular Surgery", "TEVAR", "Case Report"],
    },
    {
        title: "Conservative Management of an Iatrogenic Esophageal Tear in Kenya",
        journal: "Case Reports in Surgery",
        url: "https://www.hindawi.com/journals/cris/2015/102540/",
        abstractUrl: "https://pubmed.ncbi.nlm.nih.gov/26495148/",
        citation:
            "Waweru P, Mwaniki D. Conservative Management of an Iatrogenic Esophageal Tear in Kenya. Case Reports in Surgery. 2015;2015:102540. doi:10.1155/2015/102540",
        year: "2015",
        summary:
            "A surgical case report demonstrating successful non-operative management of an iatrogenic esophageal perforation in a resource-limited setting.",
        tags: ["Surgery", "Esophageal Injury", "Case Report"],
    },
    {
        title: "Complicated Malaria and a Covert Ruptured Spleen: A Case Report",
        journal: "Journal of Surgical Case Reports",
        url: "https://academic.oup.com/jscr/article/2014/11/rju122/2282436",
        abstractUrl: "https://pubmed.ncbi.nlm.nih.gov/25368164/",
        citation:
            "Waweru P, Macleod J, Gikonyo A. Complicated malaria and a covert ruptured spleen: a case report. Journal of Surgical Case Reports. 2014;2014(11):rju122. doi:10.1093/jscr/rju122",
        year: "2014",
        summary:
            "A clinical case highlighting the diagnostic challenges associated with splenic rupture complicating severe malaria.",
        tags: ["Malaria", "Surgery", "Case Report"],
    },
];

const categoriesw = [
    "Stroke Awareness",
    "Stroke Epidemiology",
    "Systems of Care",
    "Neurovascular Surgery",
    "Health Equity",
];

const categories = [
    "Stroke Medicine",
    "Stroke Systems",
    "Neurosurgery",
    "Neurointervention",
    "Public Health",
    "Health Systems",
    "Global Health",
    "Case Reports",
];

const profiles = [
    {
        name: "ResearchGate",
        url: "https://www.researchgate.net/profile/Peter-Waweru",
    },
    {
        name: "World Stroke Organization",
        url: "https://www.world-stroke.org/world-stroke-future-leaders/community-members/peter-waweru",
    },
    {
        name: "LinkedIn",
        url: "https://ke.linkedin.com/in/peter-waweru-12164537",
    },
    {
        name: "X (Twitter)",
        url: "https://x.com/PWaweruNS",
    },
];

const copyCitation = async (citation, title) => {
    if (!citation) return;

    try {
        await navigator.clipboard.writeText(citation);
        setCopiedCitation(title);

        setTimeout(() => {
            setCopiedCitation(null);
        }, 2000);
    } catch (error) {
        console.error("Failed to copy citation:", error);
    }
};

const Publications = () => {
    const [copiedCitation, setCopiedCitation] = useState(null);

    return (
        <main className="bg-white">
            <SEO
                title="Publications on Stroke Care and Neurovascular Health"
                description="Selected publications by Dr. Peter Waweru covering stroke awareness, stroke epidemiology, stroke services in Africa, neurovascular disease, and health equity."
                path="/publications"
                type="article"
                schema={publicationsSchema}
            />
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 py-5 md:py-20 text-white">
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

            <section className="bg-slate-50 py-5 md:py-20">
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

            <section className="py-5 md:py-20">
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

                    <div className="mt-6 md:mt-12 space-y-6">
                        {publications.map((publication) => (
                            <article
                                key={publication.title}
                                className="rounded-[1.5rem] border border-slate-200 bg-white p-4 md:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
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
                                            onClick={() =>
                                                copyCitation(
                                                    publication.citation,
                                                    publication.title
                                                )
                                            }
                                            disabled={!publication.citation}
                                            className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                                                publication.citation
                                                    ? copiedCitation === publication.title
                                                        ? "bg-teal-50 text-teal-700"
                                                        : "text-slate-600 hover:bg-slate-100 hover:text-teal-700"
                                                    : "cursor-not-allowed text-slate-400"
                                            }`}
                                        >
                                            {copiedCitation === publication.title
                                                ? "Copied"
                                                : "Citation"}
                                            <Quote className="ml-2 h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-950 py-5 md:py-20 text-white">
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
                                <div className="flex items-center gap-3">
                                    <Tags className="h-6 w-6 shrink-0 text-teal-300" />

                                    <h3 className="text-lg font-bold">{category}</h3>
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
                            Research Profiles
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Academic, research and professional profile links.
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {profiles.map((profile) => (
                            <div
                                key={profile.name}
                                className="group rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lg md:p-8"
                            >
                                <div className="flex items-center gap-4">
                                    <Globe2 className="h-8 w-8 shrink-0 text-teal-700" />

                                    <h3 className="text-2xl font-bold text-slate-950">
                                        {profile.name}
                                    </h3>
                                </div>

                                <a
                                    href={profile.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center font-semibold text-teal-700 transition hover:text-teal-800"
                                >
                                    Visit Profile
                                    <ArrowUpRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-teal-700 py-5 md:py-20 text-white">
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
