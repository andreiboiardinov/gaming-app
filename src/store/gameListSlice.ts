import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { popular } from "./api";
import { RootState } from "./index";

export interface IGame {
    id: number,
    name: string,
    background_image: string,
    platforms: Array<any>,
    released: string,
    rating: number,
    [key: string]: any
}

export interface IResponse {
    results: IGame[],
    [key: string]: any
}

export interface IState {
    list: IGame[],
    fetching: boolean
    status: string | null,
    error: string | null,
    page: number,
}

const initialState: IState = {
    list: [],
    fetching: true,
    status: null,
    error: null,
    page: 1
}

export const getGames = createAsyncThunk<any, any, { state: any }>(
    'games/getGames',
    async (url: string, { rejectWithValue, getState }) => {
        try {
            /*if (!getState().gameList.list.length) {
                setPage(1)
            }*/

            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('server error')
            }
            const data = await response.json()
            const results = data.results

            return { results }
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

const gameListSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setFetching: (state) => {
            state.fetching = true
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        resetState: (state) => {
            state.list = []
            state.fetching = true
            state.status = null
            state.error = null
            state.page = 1
        }
    },
    extraReducers: {
        [getGames.pending.type]: (state) => {
            state.status = 'loading'
            state.error = null
            state.fetching = true
        },
        [getGames.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.status = 'resolved'
            state.list.push(...action.payload.results)
            state.fetching = false
        },
        [getGames.rejected.type]: (state, action: PayloadAction<any>) => {
            state.status = 'rejected'
            state.error = action.payload
            state.fetching = false
        }
    }
})

export const { setFetching, setPage, resetState } = gameListSlice.actions

export default gameListSlice.reducer