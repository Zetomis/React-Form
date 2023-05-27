import { ReactNode } from "react";

const Heading = ({
    children,
    center,
}: {
    children: ReactNode;
    center?: boolean;
}) => {
    return (
        <h1
            className={`flex items-center text-2xl font-bold text-black dark:text-white ${
                center && "justify-center text-center"
            }`}
        >
            {children}
        </h1>
    );
};

export default Heading;
