import { Link } from "react-router-dom";
import styled from "styled-components";
import Popular from "../pages/popular";

const SideMenu = (): JSX.Element => {
    return (
        <Container>
            <nav>
                <div><Link to="/">Home</Link></div>
                <div><Link to="/popular">Popular</Link></div>
                <div><Link to="/upcoming">Upcoming</Link></div>
                <div><Link to="/calendar">Release calendar</Link></div>
            </nav>
        </Container>
    )
}

const Container = styled.div`
  position: sticky;
  top: 70px;
  align-self: flex-start;
  background: beige;
  margin-right: 40px;
  
  nav {
    width: 100px
  }
`

export default SideMenu