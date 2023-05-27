import { configureStore } from "@reduxjs/toolkit";
import { ThemeSlicer } from "./features/ThemeSlicer";
import { AllQuestionSlice } from "./features/AllQuestionSlice";

export const store = configureStore({
    reducer: {
        theme: ThemeSlicer.reducer,
        allQuestions: AllQuestionSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
