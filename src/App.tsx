import React from 'react';
import Home from "./pages/home";
import Layout from "./layout";
import { Route, Routes } from "react-router-dom";
import Popular from "./pages/popular";
import Game from "./pages/game";
import Upcoming from "./pages/upcoming";
import Calendar from "./pages/calendar";

const App = (): JSX.Element => {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path={"/"} element={<Home/>} />
                    <Route path="/games/:id" element={<Game/>} />
                    <Route path={"/popular"} element={<Popular/>} />
                    <Route path={"/upcoming"} element={<Upcoming/>} />
                    <Route path={"/calendar"} element={<Calendar/>} />
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
