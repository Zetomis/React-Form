import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { theme: string } = {
    theme: "light",
};

export const ThemeSlicer = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<{ theme: string }>) => {
            state.theme = action.payload.theme;
        },
    },
});

export const { changeTheme } = ThemeSlicer.actions;
export default ThemeSlicer.reducer;
