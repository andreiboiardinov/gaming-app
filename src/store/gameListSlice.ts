import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { popular } from "./api";

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
    status: string | null,
    error: string | null,
}

const initialState: IState = {
    list: [],
    status: null,
    error: null
}

export const getGames = createAsyncThunk(
    'games/getGames',
    async (url: string, thunkAPI) => {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('server error')
            }
            const data = await response.json()
            return data.results
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const gameListSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {},
    extraReducers: {
        [getGames.pending.type]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getGames.fulfilled.type]: (state, action: PayloadAction<IGame[]>) => {
            console.log('FULFILLED', action.payload)
            state.status = 'resolved'
            state.list.push(...action.payload)
        },
        [getGames.rejected.type]: (state, action: PayloadAction<any>) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export default gameListSlice.reducer