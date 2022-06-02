import React, { useEffect, useRef, useState } from 'react';
import { debounce } from "../utils/debounce";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { IGame, getGames, setFetching, setPage, resetState } from "../store/gameListSlice";
import { trending } from "../store/api";
import GameCard from "../components/GameCard";
import Modal from "../components/Modal";
import OrderBy from "../components/OrderBy";

export interface IOrderBy {
    [key: string]: any
}

const orderBy: IOrderBy = {
    'Date added': '-created',
    'Name': 'name',
    'Release date': '-released',
    'Popularity': '-added',
    'Average rating': '-rating',
}


const Home = (): JSX.Element => {
    /*const [openModal, setOpenModal] = useState<boolean>(false)
    const [left, setLeft] = useState<number>(0)
    const [top, setTop] = useState<number>(0)
    const [order, setOrder] = useState<string>(Object.values(orderBy)[0])
    const [orderName, setOrderName] = useState<string>(Object.keys(orderBy)[0])
    const modalRef = useRef<HTMLDivElement>(null)*/
    const [order, setOrder] = useState<string>(Object.values(orderBy)[0])
    const dispatch = useDispatch<AppDispatch>()
    const { list, fetching, page } = useSelector((state: RootState) => state.gameList)
    /*const { data: games, isLoading,  } = gamesListApi.useGetGamesQuery(currentPage)*/

    /*const handleModalPosition = () => {
        if (modalRef.current) {
            console.log('modalRef', modalRef)
            setLeft(modalRef.current.offsetLeft)
            setTop(modalRef.current.offsetTop)
        }
    }*/

    useEffect(() => {
        dispatch(resetState())
    }, [])

    useEffect(() => {
        if (fetching) {
            dispatch(getGames(trending(page, order)))
            dispatch(setPage(page + 1))
        }
    }, [fetching, order])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    }, [])

    const scrollHandler = debounce((e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 10) {
            dispatch(setFetching())
        }
    }, 100)

    /*const handleOrderChange = (newOrder: string, key: string) => {
        setOrder(newOrder)
        setOrderName(key)
        dispatch(resetState())
    }*/

    return (
        <div>
            {/*<div style={{ position: 'relative' }} ref={modalRef} onMouseEnter={handleModalPosition}>
                <button onClick={() => setOpenModal(true)}>Order by: {orderName}</button>
                <Modal open={openModal} onClose={() => setOpenModal(false)} top={top} left={left}>
                    {Object.keys(orderBy).map(key => (
                        <div key={key} onClick={() => handleOrderChange(orderBy[key], key)}>{key}</div>
                    ))}
                </Modal>
            </div>*/}
            <OrderBy order={order} setOrder={setOrder} />

            { list && list.map((game: IGame) => <GameCard key={game.id} {...game} />) }
        </div>
    );
}

export default Home;