import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-white text-slate-900">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
