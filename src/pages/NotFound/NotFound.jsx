import { Link } from "react-router-dom";
import { ArrowLeft, Home, SearchX } from "lucide-react";
import SEO from "../../components/seo/SEO";

const NotFound = () => {
    return (
        <main className="flex min-h-[calc(100vh-160px)] items-center justify-center bg-slate-50 px-5 py-20">
            <SEO
                title="Page Not Found"
                description="The requested page could not be found on Dr. Peter Waweru’s website."
                path="/404"
            />
            <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-teal-700/10">
                    <SearchX className="h-12 w-12 text-teal-700" />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">
                    Error 404
                </p>

                <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
                    Page Not Found
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                    The page you are looking for may have been moved, renamed, or no longer exists.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-full bg-teal-700 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800"
                    >
                        <Home className="mr-2 h-4 w-4" />
                        Back to Homepage
                    </Link>

                    <Link
                        to="/contact"
                        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Contact Support
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
