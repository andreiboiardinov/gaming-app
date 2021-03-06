import { configureStore } from '@reduxjs/toolkit'
import { gamesListApi } from "./gameListApi";
import gameListReducer from "./gameListSlice";
import gameReducer from "./gameSlice";

export const store = configureStore({
    reducer: {
        /*[gamesListApi.reducerPath]: gamesListApi.reducer,*/
        gameList: gameListReducer,
        game: gameReducer,
    },
    /*middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(gamesListApi.middleware)*/
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch