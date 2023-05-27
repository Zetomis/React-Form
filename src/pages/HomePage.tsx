import Heading from "../components/Heading";

const HomePage = () => {
    return (
        <div>
            <div className="mb-8 flex flex-col gap-y-2 text-center">
                <Heading center>Form App</Heading>
                <p>
                    Create with React, TypeScript, Redux Toolkit, Firebase{" "}
                    <br /> and Tailwind.
                </p>
            </div>
            <div className="mb-8 flex flex-col gap-y-2 text-center">
                <Heading center>Instruction:</Heading>
                <ul>
                    <li>1. You can create your own form in the Create menu.</li>
                    <li>
                        2. You can see and use other people's form in the Forms
                        menu.
                    </li>
                    <li>
                        3. You must <strong>Sign In</strong> to use Form App.
                    </li>
                </ul>
            </div>
            <Heading center>Created by Zetomis</Heading>
        </div>
    );
};

export default HomePage;
