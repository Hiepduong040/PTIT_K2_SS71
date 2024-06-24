// import { createSlice } from "@reduxjs/toolkit";

// interface NumbersState {
//   numbers: number[];
// }

// const initialState: NumbersState = {
//   numbers: [],
// };

// const randomReducer = createSlice({
//   name: 'numbers',
//   initialState,
//   reducers: {
//     random: (state) => {
//       state.numbers.splice(0, state.numbers.length, ...Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)));
//     },
//   },
// });


// export const { random } = randomReducer.actions;
// export default randomReducer.reducer;


// import { createSlice } from "@reduxjs/toolkit";

// interface NumbersState {
//   numbers: number[];
// }

// const initialState: NumbersState = {
//   numbers: [],
// };

// const randomReducer = createSlice({
//   name: 'numbers',
//   initialState,
//   reducers: {
//     random: (state) => {
//       state.numbers.splice(0, state.numbers.length, ...Array.from({ length: 4 }, () => Math.floor(Math.random() * 100)));
//     },
//   },
// });

// export const { random } = randomReducer.actions;
// export default randomReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface NumbersState {
  numbers: number[];
}

const initialState: NumbersState = {
  numbers: [],
};

const randomReducer = createSlice({
  name: 'numbers',
  initialState,
  reducers: {
    random: (state) => {
      state.numbers.splice(0, state.numbers.length, ...Array.from({ length: 4 }, () => Math.floor(Math.random() * 10)));
    },
  },
});

export const { random } = randomReducer.actions;
export default randomReducer.reducer;
