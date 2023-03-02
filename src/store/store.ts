import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../services/mainItem";
import setReducer from "../services/setItem";
import selectReducer from "../services/select";

export const store = configureStore({
  reducer: {
    mainItem: mainReducer,
    setItem: setReducer,
    select: selectReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
