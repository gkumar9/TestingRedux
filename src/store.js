import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './todoslice.js';

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

export default configureStore({
  reducer: {
    counter: todoSlice,
  },
});
