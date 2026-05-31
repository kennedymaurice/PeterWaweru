import { useState } from "react";
import {
    AlertTriangle,
    ArrowRight,
    BriefcaseMedical,
    Handshake,
    Mail,
    Megaphone,
    MessageCircle,
    Mic,
    Newspaper,
    User,
} from "lucide-react";
import SEO from "../../components/seo/SEO";

const DR_WAWERU_WHATSAPP = "254785679890";

const inquiryTypes = [
    "Clinical Consultation",
    "Research Collaboration",
    "Speaking Engagement",
    "Media Inquiry",
    "Partnership Opportunity",
    "General Inquiry",
];

const contactCategories = [
    {
        title: "Clinical Consultations",
        description:
            "For patients, families, and referring clinicians seeking specialist stroke or neurovascular care.",
        icon: BriefcaseMedical,
    },
    {
        title: "Research Collaborations",
        description:
            "For researchers, institutions, and academic partners interested in collaborative research.",
        icon: Handshake,
    },
    {
        title: "Speaking Engagements",
        description:
            "For conferences, universities, workshops, public health forums, and professional events.",
        icon: Mic,
    },
    {
        title: "Media & Press",
        description:
            "For journalists, broadcasters, editors, podcast hosts, and expert commentary requests.",
        icon: Newspaper,
    },
    {
        title: "Partnerships",
        description: "For NGOs, healthcare organizations, foundations, and development partners.",
        icon: Megaphone,
    },
    {
        title: "General Correspondence",
        description: "For other professional inquiries and general communication.",
        icon: Mail,
    },
];

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        organization: "",
        inquiryType: "Clinical Consultation",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const buildWhatsAppMessage = () => {
        return `Hello Dr. Waweru,

I am contacting you through your professional website.

Inquiry Type: ${formData.inquiryType}

Full Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Organization: ${formData.organization || "Not provided"}

Message:
${formData.message}

Thank you.`;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const message = encodeURIComponent(buildWhatsAppMessage());
        const whatsappUrl = `https://wa.me/${DR_WAWERU_WHATSAPP}?text=${message}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <main className="bg-white">
            <SEO
                title="Contact Dr. Peter Waweru"
                description="Contact Dr. Peter Waweru for clinical consultations, research collaborations, speaking engagements, media inquiries, partnerships, and professional correspondence."
                path="/contact"
            />
            <section className="relative overflow-hidden bg-slate-950 py-10 md:py-20 text-white">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-teal-500 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/30 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-200 backdrop-blur">
                        Contact
                    </div>
                    <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-5xl">
                        Contact Dr. Peter Waweru
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        For clinical consultations, research collaborations, speaking engagements,
                        media inquiries, partnerships, and professional correspondence.
                    </p>
                </div>
            </section>

            <section className="bg-teal-50 py-10 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="rounded-3xl border border-teal-100 bg-white p-4 md:p-8">
                        <div className="flex flex-col gap-5 md:flex-row md:items-start">
                            <AlertTriangle className="h-8 w-8 shrink-0 text-teal-700" />
                            <div>
                                <h2 className="text-2xl font-bold text-slate-950">
                                    Medical Emergency Notice
                                </h2>
                                <p className="mt-3 leading-7 text-slate-600">
                                    If you or someone near you is experiencing sudden weakness,
                                    speech difficulty, severe headache, loss of balance, vision
                                    changes, or any urgent medical symptoms, please seek immediate
                                    emergency care from the nearest hospital or emergency medical
                                    service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-20">
                <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-700">
                            Inquiry Categories
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                            Select the most relevant inquiry type.
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            The form will open WhatsApp with a prefilled message containing your
                            details and inquiry type.
                        </p>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
                            {contactCategories.map((category) => {
                                const Icon = category.icon;

                                return (
                                    <button
                                        key={category.title}
                                        type="button"
                                        onClick={() =>
                                            setFormData((prev) => ({
                                                ...prev,
                                                inquiryType: category.title,
                                            }))
                                        }
                                        className={`rounded-3xl border p-5 text-left transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${
                                            formData.inquiryType === category.title
                                                ? "border-teal-700 bg-teal-50"
                                                : "border-slate-200 bg-white"
                                        }`}
                                    >
                                        <Icon className="h-7 w-7 text-teal-700" />
                                        <h3 className="mt-4 text-lg font-bold text-slate-950">
                                            {category.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            {category.description}
                                        </p>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 md:p-8">
                        <div className="rounded-[1.5rem] bg-white p-4 md:p-8">
                            <div className="mb-8">
                                <MessageCircle className="h-9 w-9 text-teal-700" />
                                <h2 className="mt-5 text-3xl font-bold text-slate-950">
                                    Send WhatsApp Inquiry
                                </h2>
                                <p className="mt-3 leading-7 text-slate-600">
                                    Complete the form below. When you submit, WhatsApp will open
                                    with a prepared message addressed to Dr. Waweru.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Inquiry Type
                                    </label>
                                    <select
                                        name="inquiryType"
                                        value={formData.inquiryType}
                                        onChange={handleChange}
                                        className="h-12 w-full rounded-2xl border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                                    >
                                        {inquiryTypes.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Full Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-sm outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                                    />
                                </div>

                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Phone Number
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="e.g., +254..."
                                            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-sm outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-semibold text-slate-700">
                                            Email Address
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-sm outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Organization / Institution
                                    </label>
                                    <input
                                        type="text"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        placeholder="Optional"
                                        className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-sm outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Briefly describe your inquiry..."
                                        rows="6"
                                        className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-teal-700 focus:ring-4 focus:ring-teal-700/10"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center rounded-full bg-teal-700 px-8 py-4 text-sm font-semibold text-white transition hover:bg-teal-800"
                                >
                                    Open WhatsApp Message
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </button>

                                <p className="text-center text-xs leading-6 text-slate-500">
                                    This does not automatically send the message. WhatsApp will open
                                    first so you can review before sending.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-teal-700 py-10 md:py-20 text-white">
                <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
                    <User className="mx-auto h-10 w-10 text-teal-100" />
                    <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
                        Professional inquiries are welcome.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-teal-50">
                        Whether your inquiry is clinical, academic, media-related, or
                        partnership-focused, please provide enough detail to support an appropriate
                        response.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Contact;
