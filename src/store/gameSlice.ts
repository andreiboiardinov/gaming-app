import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {game, gameScreenshots, popular} from "./api";

/*export interface IGame {
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
}*/

export interface IState {
    game: any,
    screenshots: any,
    status: string | null,
    error: string | null,
}

const initialState: IState = {
    game: {},
    screenshots: {},
    status: null,
    error: null,
}

export const getGame = createAsyncThunk(
    'game/getGame',
    async (id: string | number | undefined, thunkAPI) => {
        try {
            const gameResponse = await fetch(game(id))
            const screenshotsResponse = await fetch(gameScreenshots(id))

            if (!gameResponse.ok) {
                throw new Error('server error')
            }

            const data = await gameResponse.json()
            const screenshots = await screenshotsResponse.json()

            return { data, screenshots }
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {},
    extraReducers: {
        [getGame.pending.type]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [getGame.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.status = 'resolved'
            state.game = action.payload.data
            state.screenshots = action.payload.screenshots
        },
        [getGame.rejected.type]: (state, action: PayloadAction<any>) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

export default gameSlice.reducer