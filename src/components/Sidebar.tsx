import { useAuthState } from "react-firebase-hooks/auth";
import { changeTheme } from "../redux/features/ThemeSlicer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Button from "./Button";
import LinkButton from "./LinkButton";
import { auth } from "../firebase/firebase-config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const theme = useAppSelector((state) => state.theme);
    const dispatch = useAppDispatch();

    const handleChangeTheme = () => {
        dispatch(
            changeTheme({ theme: theme.theme === "light" ? "dark" : "light" })
        );
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="sidebar flex h-full w-full flex-col gap-y-4 rounded border border-black px-2 py-4 dark:border-white">
            <LinkButton path="/">
                <i className="bx bx-home"></i>
                Home
            </LinkButton>
            {user?.isAnonymous !== false ? null : (
                <LinkButton path="/forms">
                    <i className="bx bx-notepad"></i>
                    Forms
                </LinkButton>
            )}
            {user?.isAnonymous !== false ? null : (
                <LinkButton path="/create">
                    <i className="bx bx-note"></i>
                    Create
                </LinkButton>
            )}
            {user?.isAnonymous !== false ? null : (
                <Button onClickEvent={handleSignOut}>
                    <i className="bx bx-door-open"></i>
                    Sign Out
                </Button>
            )}
            <Button onClickEvent={handleChangeTheme}>
                <i
                    className={`bx bx-${
                        theme.theme === "light" ? "moon" : "sun"
                    }`}
                ></i>
                Toggle {theme.theme === "light" ? "Dark" : "Light"} Mode
            </Button>
        </div>
    );
};

export default Sidebar;
