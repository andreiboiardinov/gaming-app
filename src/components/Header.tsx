import styled from "styled-components";

const Header = (): JSX.Element => {
    return (
        <Container>
            <Wrapper>Header</Wrapper>
        </Container>
    )
}

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  background: cadetblue;
`

const Wrapper = styled.div`
  max-width: 1920px;
  height: 50px;
  
  padding: 0 40px;
  margin: 0 auto;
`

export default Header