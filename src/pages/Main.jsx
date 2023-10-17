import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MainCard from "../components/MainCard";
import MainHeader from "../components/MainHeader";
import Pagination from "../components/Pagination";
import mixpanel from 'mixpanel-browser';
import { MixpanelProvider, MixpanelConsumer } from 'react-mixpanel';

mixpanel.init("7e6ca79e8cbd75bb932a6d04c0ea2450");

function Main() {

    return (
        
        <div>
            {/* <Header /> */}
            <MainHeader />
            <MainCard />
            {/* <Pagination /> */}
        </div>
    )
}
export default Main;





