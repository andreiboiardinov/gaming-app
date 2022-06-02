import { IGame } from "../store/gameListSlice";
import styled from "styled-components";
import { Link } from "react-router-dom";


const GameCard = ({ id, name, background_image, released, genres, rating }: IGame) => {
    return (
        <Link to={`/games/${id}`}>
            <Card>
                <div>{ name }</div>
                <div>{ released }</div>
                <div>{ rating }</div>
            </Card>
        </Link>
    )
}

const Card = styled.div`
  background: beige;
  margin-bottom: 50px;
`

export default GameCard