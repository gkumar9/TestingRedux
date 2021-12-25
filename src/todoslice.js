import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ['first task'],
};

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    adding: (state,action) => {
        state.value.push(action.payload)
    },
    removing: (state,action) => {
      state.value.splice(action.payload,1)
    },
  },
});

export const { adding, removing } = todoSlice.actions;
export const listTodo = (state) => state.counter.value;

export default todoSlice.reducer;
