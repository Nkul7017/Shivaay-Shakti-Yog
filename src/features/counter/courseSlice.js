import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  course: [{}]
  
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
      
    },
  
    clearCourse: (state) => {
      state.course = null;
     
    },
  },

})




export const { setCourse, clearCourse } = courseSlice.actions;
export default courseSlice.reducer

