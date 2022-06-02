import React, { useEffect } from 'react';
import { debounce } from "../utils/debounce";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { getGames, IGame, resetState, setFetching, setPage } from "../store/gameListSlice";
import { upcoming } from "../store/api";
import GameCard from "../components/GameCard";

const Upcoming = (): JSX.Element => {
    const dispatch = useDispatch<AppDispatch>()
    const { list, fetching, page } = useSelector((state: RootState) => state.gameList)

    useEffect(() => {
        dispatch(resetState())
    }, [])

    useEffect(() => {
        if (fetching) {
            dispatch(getGames(upcoming(page)))
            dispatch(setPage(page + 1))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    }, [])

    const scrollHandler = debounce((e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 10) {
            dispatch(setFetching())
        }
    }, 100)

    return (
        <div>
            { list && list.map((game: IGame) => <GameCard key={game.id} {...game} />) }
        </div>
    );
}

export default Upcoming;