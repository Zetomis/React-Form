import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase-config";

const UserCard = () => {
    const [user] = useAuthState(auth);

    return (
        <div className="flex items-center gap-x-4 rounded border border-black px-4 py-2 text-black dark:border-white dark:text-white">
            <div className="text-right">
                <h1 className="font-semibold">{user?.displayName}</h1>
                <span className="text-sm font-thin">{user?.email}</span>
            </div>
            <div className="h-10 w-10 overflow-hidden rounded-full border border-black dark:border-white">
                <img src={user?.photoURL || ""} alt="User's Photo" />
            </div>
        </div>
    );
};

export default UserCard;
