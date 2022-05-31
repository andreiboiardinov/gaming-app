import React, { useEffect, useState } from 'react';
import { gamesListApi } from "../store/gameListApi";
import { debounce } from "../utils/debounce";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { getGames } from "../store/gameListSlice";
import { popular } from "../store/api";

const Home = (): JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const dispatch = useDispatch<AppDispatch>()
    const games = useSelector((state: RootState) => state.gameList.list)
    /*const { data: games, isLoading,  } = gamesListApi.useGetGamesQuery(currentPage)*/

    useEffect(() => {
        dispatch(getGames(popular(currentPage)))
    }, [currentPage])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    }, [])

    const scrollHandler = debounce((e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 10) {
            console.log('scroll')
            setCurrentPage(prevState => prevState + 1)
        }
    }, 100)

    return (
        <div>
            {games && games.map((game) => (
                <div key={game.id} style={{ marginBottom: '100px' }}>
                    {game.name}
                </div>
            ))}
        </div>
    );
}

export default Home;