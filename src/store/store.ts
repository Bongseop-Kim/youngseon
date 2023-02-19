import { configureStore } from "@reduxjs/toolkit";
import initialReducer from "../services/initialItem";
import selectReducer from "../services/select";

export const store = configureStore({
  reducer: {
    initial: initialReducer,
    select: selectReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
