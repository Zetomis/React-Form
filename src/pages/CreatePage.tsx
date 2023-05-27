import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase-config";
import Heading from "../components/Heading";
import InputTextField from "../components/InputTextField";
import { useEffect, useState } from "react";
import InputNumberField from "../components/InputNumberField";
import Button from "../components/Button";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { createNewAllQuestion } from "../redux/features/AllQuestionSlice";
import NewQuestionCard from "../components/NewQuestionCard";

const CreatePage = () => {
    const [formTitle, setFormTitle] = useState<string>("");
    const [formAmount, setFormAmount] = useState<number>(0);
    const [user] = useAuthState(auth);
    const dispatch = useAppDispatch();
    const allQuestions = useAppSelector(
        (state) => state.allQuestions.allQuestions
    );

    console.log(allQuestions);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createNewAllQuestion({ amount: 0 }));
        dispatch(createNewAllQuestion({ amount: formAmount }));
    };

    if (user?.isAnonymous === false) {
        return (
            <div className="flex flex-col gap-y-4">
                <form
                    action=""
                    className="flex flex-col gap-y-4"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <Heading center>Create</Heading>
                    <InputTextField
                        id="form-title"
                        labelText="Enter Form's Title"
                        placeholder="Enter Form's Title..."
                        inputState={formTitle}
                        inputSetState={setFormTitle}
                    />
                    <InputNumberField
                        id="form-amount"
                        labelText="Enter Form's Amount"
                        placeholder="Enter Form's Amount..."
                        inputState={formAmount}
                        inputSetState={setFormAmount}
                    />
                    <Button submit>Submit</Button>
                </form>
                <div className="flex flex-col gap-y-4">
                    {allQuestions.map((question, id) => (
                        <NewQuestionCard
                            questionData={question}
                            id={id}
                            key={id}
                        />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Heading center>You muse Sign In to Continue</Heading>
            </div>
        );
    }
};

export default CreatePage;
