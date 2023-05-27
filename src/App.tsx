import { useState } from "react";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useAppSelector } from "./redux/hooks";

const App = () => {
    const theme = useAppSelector((state) => state.theme);

    return (
        <div className={theme.theme}>
            <div className="bg-white dark:bg-black">
                <div className="container mx-auto min-h-screen w-full max-w-[75rem] px-5 py-10 dark:bg-black">
                    <Nav />
                    <Sidebar />
                    <Content />
                </div>
            </div>
        </div>
    );
};

export default App;
