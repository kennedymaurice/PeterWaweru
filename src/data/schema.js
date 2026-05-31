const SITE_URL = "https://www.peterwaweru.co.ke";

export const personPhysicianSchema = {
    "@context": "https://schema.org",
    "@type": ["Person", "Physician"],
    name: "Dr. Peter Kuria Waweru",
    honorificPrefix: "Dr.",
    givenName: "Peter",
    familyName: "Waweru",
    jobTitle: ["Vascular and Endovascular Neurosurgeon", "Stroke Specialist", "Stroke Researcher"],
    description:
        "Dr. Peter Waweru is a vascular and endovascular neurosurgeon, stroke specialist, and researcher advancing stroke care, neurovascular health, and health equity across Kenya and Africa.",
    url: SITE_URL,
    image: `${SITE_URL}/logo.webp`,
    medicalSpecialty: [
        "Neurology",
        "Neurosurgery",
        "Stroke Medicine",
        "Vascular Neurosurgery",
        "Neurovascular Surgery",
    ],
    knowsAbout: [
        "Stroke",
        "Stroke Prevention",
        "Stroke Care",
        "Cerebrovascular Disease",
        "Neurovascular Surgery",
        "Brain Aneurysms",
        "Subarachnoid Haemorrhage",
        "Stroke Epidemiology",
        "Health Equity",
        "Stroke Systems of Care",
    ],
    affiliation: [
        {
            "@type": "Organization",
            name: "Pan-African Center for Health Equity",
            alternateName: "PACHE",
        },
        {
            "@type": "Organization",
            name: "Kenyatta University Teaching, Referral & Research Hospital",
            alternateName: "KUTRRH",
        },
        {
            "@type": "MedicalOrganization",
            name: "Nairobi Stroke Clinic",
        },
    ],
    address: {
        "@type": "PostalAddress",
        addressCountry: "KE",
        addressRegion: "Nairobi",
    },
};

export const publicationsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected Publications by Dr. Peter Waweru",
    itemListElement: [
        {
            "@type": "ScholarlyArticle",
            position: 1,
            headline:
                "UPESI: Swahili Translation of the FAST Acronym for Stroke Awareness Campaigns in East Africa",
            datePublished: "2024",
            author: {
                "@type": "Person",
                name: "Dr. Peter Waweru",
            },
            publisher: {
                "@type": "Organization",
                name: "African Journal of Emergency Medicine",
            },
        },
        {
            "@type": "ScholarlyArticle",
            position: 2,
            headline: "Revisiting Africa’s Stroke Obstacles and Services (SOS)",
            datePublished: "2025",
            author: {
                "@type": "Person",
                name: "Dr. Peter Waweru",
            },
            publisher: {
                "@type": "Organization",
                name: "Neurological Sciences",
            },
        },
        {
            "@type": "ScholarlyArticle",
            position: 3,
            headline: "Stroke Epidemiology, Care, and Outcomes in Kenya: A Scoping Review",
            datePublished: "2021",
            author: {
                "@type": "Person",
                name: "Dr. Peter Waweru",
            },
            publisher: {
                "@type": "Organization",
                name: "Frontiers in Neurology",
            },
        },
        {
            "@type": "ScholarlyArticle",
            position: 4,
            headline: "Stroke Services in Africa: What Is There and What Is Needed",
            datePublished: "2022",
            author: {
                "@type": "Person",
                name: "Dr. Peter Waweru",
            },
            publisher: {
                "@type": "Organization",
                name: "International Journal of Stroke",
            },
        },
        {
            "@type": "ScholarlyArticle",
            position: 5,
            headline:
                "Mortality and Functional Outcomes After Spontaneous Subarachnoid Haemorrhage",
            datePublished: "2019",
            author: {
                "@type": "Person",
                name: "Dr. Peter Waweru",
            },
            publisher: {
                "@type": "Organization",
                name: "PLOS ONE",
            },
        },
    ],
};
