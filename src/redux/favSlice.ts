import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
export interface favSlice {
  fav: number[];
}

// Define the initial state using that type
const initialState: favSlice = {
 fav:[]
}

export const favSlice = createSlice({
  name: 'favorite',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    favAction: (state, action: PayloadAction<number>)  => {
       
        state.fav=state.fav.includes(action.payload) ? state.fav.filter(item => item != action.payload) : [...state.fav, action.payload];
      //  console.log(state.fav);
    },
    removeFav: (state, action: PayloadAction<number>)  => {
     state.fav=state.fav.filter((i)=>i!=action.payload)
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    
  }
})

export const { favAction, removeFav} = favSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.favorite

export default favSlice.reducer