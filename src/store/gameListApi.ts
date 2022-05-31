import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = process.env.REACT_APP_APIKEY
const pageSize = 20;

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

export const gamesListApi = createApi({
    reducerPath: 'gamesListApi',
    tagTypes: ['gamesList'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawg.io/api/' }),
    endpoints: (builder) => ({
        getGames: builder.query<IGame[], number>({
            query: (page = 1) => `games/lists/popular?key=${API_KEY}&page_size=${pageSize}&page=${page}`,
            transformResponse: (response: IResponse, meta, arg) => response.results,
            providesTags: ['gamesList'],
        }),
    })
})

export const { useGetGamesQuery } = gamesListApi