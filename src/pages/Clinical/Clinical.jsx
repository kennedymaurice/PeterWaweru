import { Link } from "react-router-dom";
import {
    ArrowRight,
    Brain,
    HeartPulse,
    ShieldCheck,
    Stethoscope,
    Users,
    Activity,
    AlertTriangle,
    ClipboardCheck,
} from "lucide-react";
import SEO from "../../components/seo/SEO";
import { personPhysicianSchema } from "../../data/schema";

const clinicalAreas = [
    {
        title: "Stroke Care",
        description:
            "Specialist assessment and management of ischemic stroke, hemorrhagic stroke, transient ischemic attacks, recurrent stroke, and stroke complications.",
        icon: Brain,
    },
    {
        title: "Cerebrovascular Disorders",
        description:
            "Evaluation and management of disorders affecting the blood vessels supplying the brain, including complex neurovascular conditions.",
        icon: Activity,
    },
    {
        title: "Brain Aneurysms",
        description:
            "Diagnosis, risk assessment, management planning, long-term monitoring, and post-treatment follow-up for cerebral aneurysms.",
        icon: ShieldCheck,
    },
    {
        title: "Subarachnoid Haemorrhage",
        description:
            "Specialist neurosurgical assessment and care planning for patients affected by spontaneous or aneurysmal subarachnoid haemorrhage.",
        icon: AlertTriangle,
    },
    {
        title: "Neurovascular Surgery",
        description:
            "Specialized treatment planning for vascular disorders affecting the brain and nervous system, including aneurysms and vascular malformations.",
        icon: Stethoscope,
    },
    {
        title: "Stroke Prevention",
        description:
            "Risk assessment, education, and preventive strategies focused on reducing stroke risk and preventing recurrence.",
        icon: HeartPulse,
    },
];

const careTeam = [
    "Physicians",
    "Neurologists",
    "Rehabilitation Specialists",
    "Physiotherapists",
    "Occupational Therapists",
    "Speech Therapists",
    "Critical Care Teams",
    "Primary Healthcare Providers",
];

const referralAreas = [
    "Complex stroke cases",
    "Cerebrovascular disease",
    "Brain aneurysms",
    "Neurovascular disorders",
    "Second opinions",
    "Specialist consultation",
];

const Clinical = () => {
    return (
        <main className="bg-white">
            <SEO
                title="Clinical Expertise in Stroke and Neurovascular Care"
                description="Specialist clinical expertise in stroke care, neurovascular surgery, cerebrovascular disorders, brain aneurysms, subarachnoid haemorrhage, and stroke prevention."
                path="/clinical-expertise"
                schema={personPhysicianSchema}
            />
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 py-10 md:py-20 text-white">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-teal-500 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/30 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-200 backdrop-blur">
                        Clinical Expertise
                    </div>
                    <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Specialized Stroke and Neurovascular Care
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Dr. Peter Waweru provides specialist care in stroke, cerebrovascular
                        disease, neurovascular disorders, brain aneurysms, and complex neurosurgical
                        conditions.
                    </p>

                    <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-500"
                        >
                            Request Consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>

                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-950"
                        >
                            Referral Inquiry
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Areas of Clinical Focus
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Comprehensive care for stroke and neurovascular conditions.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            His clinical practice combines advanced neurosurgical expertise,
                            evidence-based medicine, and a patient-centered approach to support
                            better outcomes for individuals affected by neurological and
                            neurovascular conditions.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {clinicalAreas.map((area) => {
                            const Icon = area.icon;

                            return (
                                <div
                                    key={area.title}
                                    className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5"
                                >
                                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-700/10 text-teal-700">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-950">
                                        {area.title}
                                    </h3>
                                    <p className="mt-4 leading-7 text-slate-600">
                                        {area.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-10 md:py-20">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Multidisciplinary Care
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Coordinated care from diagnosis to recovery.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Effective neurological care often requires collaboration among multiple
                            healthcare professionals. Dr. Waweru supports multidisciplinary
                            approaches that ensure continuity of care from diagnosis through
                            treatment, rehabilitation, and follow-up.
                        </p>
                    </div>

                    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                        <div className="mb-6 flex items-center gap-3">
                            <Users className="h-7 w-7 text-teal-700" />
                            <h3 className="text-2xl font-bold text-slate-950">
                                Care Team Collaboration
                            </h3>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            {careTeam.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-20">
                <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-2 lg:px-8">
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                        <HeartPulse className="h-8 w-8 text-teal-700" />
                        <h2 className="mt-6 text-3xl font-bold text-slate-950">
                            For Patients and Families
                        </h2>
                        <p className="mt-4 leading-7 text-slate-600">
                            Neurological illnesses can be overwhelming for patients and their loved
                            ones. Dr. Waweru is committed to ensuring that patients and families
                            receive clear explanations, evidence-based treatment options,
                            compassionate support, and long-term care planning.
                        </p>
                        <ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">
                            <li>• Clear explanations of diagnoses</li>
                            <li>• Evidence-based treatment options</li>
                            <li>• Shared decision-making</li>
                            <li>• Compassionate support</li>
                            <li>• Long-term care planning</li>
                        </ul>
                    </div>

                    <div className="rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-sm">
                        <ClipboardCheck className="h-8 w-8 text-teal-300" />
                        <h2 className="mt-6 text-3xl font-bold">For Referring Clinicians</h2>
                        <p className="mt-4 leading-7 text-slate-300">
                            Dr. Waweru welcomes referrals and professional collaboration for
                            patients requiring specialist assessment or management of stroke and
                            neurovascular conditions.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {referralAreas.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-medium text-slate-200"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            className="mt-8 inline-flex items-center rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-500"
                        >
                            Send Referral Inquiry
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-teal-50 py-10 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="rounded-3xl border border-teal-100 bg-white p-8 md:p-10">
                        <div className="flex flex-col gap-5 md:flex-row md:items-start">
                            <AlertTriangle className="h-8 w-8 shrink-0 text-teal-700" />
                            <div>
                                <h2 className="text-2xl font-bold text-slate-950">
                                    Medical Emergency Notice
                                </h2>
                                <p className="mt-3 leading-7 text-slate-600">
                                    Stroke symptoms and sudden neurological changes may represent a
                                    medical emergency. For urgent symptoms, seek immediate emergency
                                    care from the nearest hospital or emergency medical service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-teal-700 py-10 md:py-20 text-white">
                <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-50">
                        Clinical Philosophy
                    </p>
                    <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
                        Patient-centered care. Evidence-based practice. Better outcomes.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-teal-50">
                        The foundation of Dr. Waweru’s clinical practice is the belief that every
                        patient deserves timely access to expert care, informed decision-making, and
                        treatment guided by the best available evidence.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-9 inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-teal-800 transition hover:bg-slate-100"
                    >
                        Request a Consultation
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Clinical;
