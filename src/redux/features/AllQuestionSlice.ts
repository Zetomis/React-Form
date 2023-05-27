import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuestionInterface } from "../../lib/interfaces";

interface AllQuestionValue {
    allQuestions: QuestionInterface[];
}

const initialState: AllQuestionValue = {
    allQuestions: [],
};

const emptyQuestion = {
    questionTitle: "",
    questionCorrectAnswer: "A",
    questionAnswers: [
        {
            answerTitle: "",
            answer: "A",
        },
        {
            answerTitle: "",
            answer: "B",
        },
        {
            answerTitle: "",
            answer: "C",
        },
        {
            answerTitle: "",
            answer: "D",
        },
    ],
};

export const AllQuestionSlice = createSlice({
    name: "allQuestions",
    initialState,
    reducers: {
        createNewAllQuestion: (
            state,
            action: PayloadAction<{ amount: number }>
        ) => {
            state.allQuestions = new Array(action.payload.amount).fill(
                emptyQuestion
            );
        },
    },
});

export const { createNewAllQuestion } = AllQuestionSlice.actions;
export default AllQuestionSlice.reducer;
