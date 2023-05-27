import { ReactNode } from "react";
import { Link } from "react-router-dom";

const LinkButton = ({
    children,
    path,
}: {
    children: ReactNode;
    path: string;
}) => {
    return (
        <Link
            className="flex items-center justify-center gap-x-2 rounded border border-black py-2 text-xl font-semibold dark:border-white dark:text-white"
            to={path}
        >
            {children}
        </Link>
    );
};

export default LinkButton;
