import { createSlice } from "@reduxjs/toolkit";

const initialState: { value: boolean } = { value: false };
//이니셜 타입의 형태는 객체 형태로 유지하는 것이 오류가 없나?
//initialState = false 사용시 일부에서 dispatch 호출시 오류 발생

export const selectSlice = createSlice({
  name: "initialItem",
  initialState,
  reducers: {
    selectTrue: (state) => {
      console.log(state);
      state.value = true;
    },
    selectFalse: (state) => {
      state.value = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const { selectTrue, selectFalse } = selectSlice.actions;

export default selectSlice.reducer;
