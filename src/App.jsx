import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/layout/SplashScreen";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./utils/ScrollToTop";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Clinical from "./pages/Clinical/Clinical";
import Research from "./pages/Research/Research";
import Publications from "./pages/Publications/Publications";
import Awareness from "./pages/Awareness/Awareness";
import Media from "./pages/Media/Media";
import Collaborations from "./pages/Collaborations/Collaborations";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <SplashScreen />;
    }

    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/clinical-expertise" element={<Clinical />} />
                    <Route path="/research" element={<Research />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/stroke-awareness" element={<Awareness />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/collaborations" element={<Collaborations />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
