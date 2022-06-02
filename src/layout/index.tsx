import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import SideMenu from "../components/SideMenu";

interface LayoutProps extends React.HTMLAttributes<Element> {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <Container>
                <Wrapper>
                    <SideMenu />
                    { children }
                </Wrapper>
            </Container>
        </>
    );
}

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  background: darkslateblue;
`

const Wrapper = styled.div`
  display: flex;
  max-width: 1920px;
  padding: 70px 40px;
  margin: 0 auto;
`

export default Layout