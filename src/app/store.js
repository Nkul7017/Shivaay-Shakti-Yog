import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/counter/userSlice'
import courseSlice from '../features/counter/courseSlice'
import course2Slice from '../features/counter/course2Slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    course: courseSlice,
    course2: course2Slice
  },
})