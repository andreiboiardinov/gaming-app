import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { getGame } from "../store/gameSlice";
import { useParams } from "react-router-dom";

const Game = (): JSX.Element => {
    const { id } = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const { game, status } = useSelector((state: RootState) => state.game)
    const { name, description } = game

    useEffect(() => {
        dispatch(getGame(id))
    }, [id])

    if (status === 'loading') return <h2>Loading...</h2>

    return (
        <div>
            Game about page {id}
            <div>{name}</div>
            <div>{description}</div>
        </div>
    )
}

export default Game