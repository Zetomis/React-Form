import { ReactNode } from "react";

const Button = ({
    children,
    onClickEvent,
    submit,
}: {
    children: ReactNode;
    onClickEvent?: () => void;
    submit?: boolean;
}) => {
    if (submit) {
        return (
            <button
                className="flex items-center justify-center gap-x-2 rounded border border-black px-4 py-2 text-xl font-semibold dark:border-white dark:text-white"
                onClick={onClickEvent}
                type="submit"
            >
                {children}
            </button>
        );
    } else {
        return (
            <button
                className="flex items-center justify-center gap-x-2 rounded border border-black px-4 py-2 text-xl font-semibold dark:border-white dark:text-white"
                onClick={onClickEvent}
            >
                {children}
            </button>
        );
    }
};

export default Button;
