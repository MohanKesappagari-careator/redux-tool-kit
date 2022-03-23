import { createSlice } from "@reduxjs/toolkit";
interface UserState {
  name: string;
}
const initialState: UserState[] = [];

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    adduser: (state, action: any) => {
      state.push(action.payload);
    },
  },
});
export const { adduser } = userSlice.actions;
export default userSlice.reducer;
