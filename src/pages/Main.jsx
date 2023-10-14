import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MainCard from "../components/MainCard";
import MainHeader from "../components/MainHeader";
import Pagination from "../components/Pagination";
import mixpanel from "mixpanel-browser";

mixpanel.init("7e6ca79e8cbd75bb932a6d04c0ea2450",{ debug: true, track_pageview: true, persistence: 'localStorage' });
mixpanel.identify(/* \"<USER_ID\"> */)
mixpanel.track_pageview();

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





