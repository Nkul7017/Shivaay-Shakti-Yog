import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  course2: null
  
};

export const course2Slice = createSlice({
  name: 'course2',
  initialState,
  reducers: {
    setCourse2: (state, action) => {
      state.course2 = action.payload;
      
    },
  
    clearCourse2: (state) => {
      state.course2 = null;
     
    },
  },

})




export const { setCourse2, clearCourse2 } = course2Slice.actions;
export default course2Slice.reducer

