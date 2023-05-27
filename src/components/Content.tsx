import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase-config";
import Heading from "./Heading";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreatePage from "../pages/CreatePage";
import FormsPage from "./../pages/FormsPage";

const Content = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="content rounded border border-black px-4 py-6 text-black dark:border-white dark:text-white">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/forms" element={<FormsPage />} />
            </Routes>
        </div>
    );
};

export default Content;
