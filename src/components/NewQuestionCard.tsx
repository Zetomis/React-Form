import { useState } from "react";
import { QuestionInterface } from "../lib/interfaces";
import InputTextField from "./InputTextField";

const NewQuestionCard = ({
    questionData,
    id,
}: {
    questionData: QuestionInterface;
    id: number;
}) => {
    const [questionTitle, setQuestionTitle] = useState<string>(
        questionData.questionTitle
    );
    const [questionCorrectAnswer, setQuestionCorrectAnswer] = useState<
        "A" | "B" | "C" | "D" | null
    >(questionData.questionCorrectAnswer);
    return (
        <div className="flex flex-col gap-y-2">
            <InputTextField
                id={`question-title-${id}`}
                placeholder="Enter Question's Title..."
                labelText="Enter Question's Title..."
                inputState={questionTitle}
                inputSetState={setQuestionTitle}
            />
        </div>
    );
};

export default NewQuestionCard;
