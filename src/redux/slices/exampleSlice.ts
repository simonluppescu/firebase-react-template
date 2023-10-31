import { collection, addDoc } from "firebase/firestore";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type ExampleState = {
  something: string;
};

const initialState: ExampleState = {
  something: "hello"
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setSomething: (state, action: PayloadAction<string>) => {
      state.something = action.payload;
    }
  }
});

export const { reducer: exampleReducer } = exampleSlice;
export const { setSomething } = exampleSlice.actions;

export const createSomething = createAsyncThunk<void, string>("example/create", async (something, { dispatch }) => {
  // if (!auth.currentUser) return;

  dispatch(setSomething(something));

  // try {
  //   await addDoc(collection(firestore, "something"), { something });
  // } catch (error) {
  //   console.error(error);
  // }
});
