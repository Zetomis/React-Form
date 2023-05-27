import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase/firebase-config";
import Button from "./Button";
import Heading from "./Heading";
import { useAuthState } from "react-firebase-hooks/auth";
import UserCard from "./UserCard";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleAuthProvider);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="nav flex items-center justify-between rounded border border-black px-2 dark:border-white">
            <Heading>Form App</Heading>
            {user?.isAnonymous === false ? (
                <UserCard />
            ) : (
                <Button onClickEvent={handleSignIn}>
                    Sign In with Google <i className="bx bxl-google"></i>
                </Button>
            )}
        </div>
    );
};

export default Nav;
