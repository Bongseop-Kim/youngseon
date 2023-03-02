import { createSlice } from "@reduxjs/toolkit";

export interface PositionType {
  isDragging: boolean;
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface InitialItemType {
  color: string;
  label: string;
  preview: string;
  positions: PositionType;
}

const initialState: InitialItemType = {
  color: "white",
  label: "main_logo",
  preview: "",
  positions: {
    isDragging: false,
    width: 144,
    height: 139,
    x: 0,
    y: 0,
  },
};

export const mainSlice = createSlice({
  name: "initialItem",
  initialState,
  reducers: {
    dragstart: (state) => {
      state.positions.isDragging = true;
    },
    dragend: (state, action) => {
      state.positions = action.payload;
      //isDragging false와 함께 설정된 x,y의 좌표도 갱신
    },
    setposition: (state, action) => {
      state.positions = action.payload;
    },
    setmaincolor: (state, action) => {
      state.color = action.payload;
    },
    setpreview: (state, action) => {
      state.preview = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const { dragstart, dragend, setposition, setmaincolor, setpreview } = mainSlice.actions;

export default mainSlice.reducer;
