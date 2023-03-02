import { createSlice } from "@reduxjs/toolkit";

export interface InitialItemType {
  label: string;
  preview: string;
}

const initialState: InitialItemType[] = [
  {
    label: "setOne_logo",
    preview: "",
  },
  {
    label: "setTwo_logo",
    preview: "",
  },
];
export const initialSlice = createSlice({
  name: "initialItem",
  initialState,
  reducers: {
    changesetone: (state, action) => {
      state[0].preview = action.payload;
    },
    changesettwo: (state, action) => {
      state[1].preview = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { changesetone, changesettwo } = initialSlice.actions;

export default initialSlice.reducer;
