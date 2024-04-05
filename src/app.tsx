import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/home";
import {Header} from "./components/header/header";
import Contacts from "components/contacts/contacts";
import About from "components/about/about";
import Price from "./components/price/price";
import { AppStyles,PageWrapper } from "app.style";

export const App = () => {
    return(<>
         <AppStyles />

        <PageWrapper>

            <Header />

        <Routes>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/price'} element={<Price />}/>
            <Route path={'/about'} element={<About />}/>
            <Route path={'/contacts'} element={<Contacts />}/>
        </Routes>
        </PageWrapper>
    </>)
}

