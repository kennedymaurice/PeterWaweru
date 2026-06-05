import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Play, X, Images, Video, ArrowRight, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../../components/seo/SEO";

const galleryImages = [
    {
        id: 1,
        src: "/peter-awareness.jpeg",
        title: "Conference Engagement",
        category: "Conference",
    },
    {
        id: 2,
        src: "/public.jpeg",
        title: "Conference Presentation",
        category: "Conference",
    },
    {
        id: 3,
        src: "/peter.jpeg",
        title: "Media & Public Education",
        category: "Media",
    },
    {
        id: 4,
        src: "/stroke-awareness.jpeg",
        title: "Stroke Awareness Campaign",
        category: "Conference",
    },
    {
        id: 5,
        src: "/stroke.jpeg",
        title: "Conference Attendance",
        category: "Conference",
    },
    {
        id: 6,
        src: "/campaign.jpeg",
        title: "Awareness Campaign",
        category: "Media",
    },
    {
        id: 7,
        src: "/presentation.jpeg",
        title: "Conference Presentation",
        category: "Conference",
    },
    {
        id: 8,
        src: "/b-8.jpeg",
        title: "Neurovascular Procedure",
        category: "Clinical",
    },
    {
        id: 9,
        src: "/b-9.jpeg",
        title: "Clinical Excellence",
        category: "Clinical",
    },
];

const galleryVideos = [
    {
        id: 1,
        src: "/v1-1.mp4",
        title: "Conference Presentation",
        category: "Conference",
    },
    {
        id: 2,
        src: "/v2-1.mp4",
        title: "Clinical Procedure Clip",
        category: "Clinical",
    },
    {
        id: 3,
        src: "/v3-1.mp4",
        title: "Awareness Campaign",
        category: "Media",
    },
];

const Gallery = () => {
    const [activeTab, setActiveTab] = useState("photos");
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const closeModal = () => {
        setSelectedImage(null);
        setSelectedVideo(null);
    };

    return (
        <main className="bg-white">
            <SEO
                title="Gallery"
                description="Explore photos and videos from Dr. Peter Waweru’s clinical, research, conference, media, and public engagement activities."
                path="/gallery"
            />

            <section className="relative overflow-hidden bg-slate-950 py-5 text-white md:py-20">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute left-10 top-20 h-80 w-80 rounded-full bg-teal-500 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-yellow-500/30 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-200 backdrop-blur">
                            Photos • Videos • Media
                        </div>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                            Gallery
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            A visual archive of Dr. Waweru’s clinical work, conference engagements,
                            public education, media appearances, and professional advocacy.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-5 md:py-10">
                <div className="mx-auto flex max-w-7xl justify-center px-5 lg:px-8">
                    <div className="flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
                        <button
                            type="button"
                            onClick={() => setActiveTab("photos")}
                            className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                                activeTab === "photos"
                                    ? "bg-teal-700 text-white shadow-sm"
                                    : "text-slate-600 hover:text-teal-700"
                            }`}
                        >
                            <Images className="mr-2 h-4 w-4" />
                            Photos
                        </button>

                        <button
                            type="button"
                            onClick={() => setActiveTab("videos")}
                            className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                                activeTab === "videos"
                                    ? "bg-teal-700 text-white shadow-sm"
                                    : "text-slate-600 hover:text-teal-700"
                            }`}
                        >
                            <Video className="mr-2 h-4 w-4" />
                            Videos
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-5 md:py-20">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    {activeTab === "photos" && (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {galleryImages.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setSelectedImage(item)}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: index * 0.05 }}
                                    className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-teal-700 backdrop-blur">
                                        {item.category}
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                                        <Camera className="mb-3 h-6 w-6 text-teal-300" />
                                        <h3 className="text-xl font-bold text-white">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/50 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                                        <Maximize2 className="h-5 w-5" />
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    )}

                    {activeTab === "videos" && (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {galleryVideos.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setSelectedVideo(item)}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: index * 0.05 }}
                                    className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                                >
                                    <video
                                        src={item.src}
                                        muted
                                        playsInline
                                        preload="metadata"
                                        className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-teal-700 shadow-xl transition group-hover:scale-110">
                                            <Play className="ml-1 h-7 w-7 fill-current" />
                                        </div>
                                    </div>

                                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-teal-700 backdrop-blur">
                                        {item.category}
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                                        <h3 className="text-xl font-bold text-white">
                                            {item.title}
                                        </h3>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <section className="bg-teal-700 py-5 text-white md:py-20">
                <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
                    <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                        Media, speaking, and public engagement.
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-teal-50">
                        For official media inquiries, conference invitations, interviews, or public
                        education partnerships, please get in touch.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-9 inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-teal-800 transition hover:bg-slate-100"
                    >
                        Submit Inquiry
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </section>

            {(selectedImage || selectedVideo) && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 px-5 py-8 backdrop-blur">
                    <button
                        type="button"
                        onClick={closeModal}
                        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950 transition hover:bg-teal-700 hover:text-white"
                        aria-label="Close gallery preview"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div className="w-full max-w-5xl overflow-hidden rounded-[1.5rem] bg-white p-3 shadow-2xl">
                        {selectedImage && (
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="max-h-[80vh] w-full rounded-[1.5rem] object-contain"
                            />
                        )}

                        {selectedVideo && (
                            <video
                                src={selectedVideo.src}
                                controls
                                autoPlay
                                playsInline
                                className="max-h-[80vh] w-full rounded-[1.5rem] bg-black"
                            />
                        )}
                    </div>
                </div>
            )}
        </main>
    );
};

export default Gallery;
