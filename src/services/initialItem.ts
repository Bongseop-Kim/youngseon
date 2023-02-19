import { createSlice } from "@reduxjs/toolkit";

export interface PositionType {
  isDragging: boolean;
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface DesignType {
  label: string;
  preview: string;
  positions: PositionType;
}

export interface InitialItemType {
  color: string;
  designs: DesignType[];
}

const initialState: InitialItemType = {
  color: "white",
  designs: [
    {
      label: "main_logo",
      preview: "",
      positions: {
        isDragging: false,
        width: 144,
        height: 139,
        x: 0,
        y: 0,
      },
    },
    {
      label: "setOne_logo",
      preview: "",
      positions: {
        isDragging: false,
        width: 144,
        height: 139,
        x: 0,
        y: 0,
      },
    },
    {
      label: "setTwo_logo",
      preview: "",
      positions: {
        isDragging: false,
        width: 144,
        height: 139,
        x: 0,
        y: 0,
      },
    },
  ],
};

export const initialSlice = createSlice({
  name: "initialItem",
  initialState,
  reducers: {
    dragstart: (state) => {
      state.designs[0].positions.isDragging = true;
    },
    dragend: (state, action) => {
      state.designs[0].positions = action.payload;
    },
    change: (state, action) => {
      state.designs[0].positions = action.payload;
    },
    changecolor: (state, action) => {
      state.color = action.payload;
    },
    changedesign: (state, action) => {
      state.designs = action.payload;
    },
    changepreview: (state) => {
      state.designs[0].positions.isDragging = true;
    },
  },
});
// Action creators are generated for each case reducer function
export const { dragstart, dragend, change, changecolor, changedesign } = initialSlice.actions;

export default initialSlice.reducer;
