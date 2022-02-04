import withAuth from "./withAuth";
import Footer from "../components/footer";
import AuthHeader from "../components/authHeader";
import SideBar from "../components/sidebar";
import React, { useEffect } from 'react';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import useVH from 'react-viewport-height';
import MySymbolOverview from "../components/widgetSymbolOverview";

function Markets(){
    const vh = useVH();
    return<>
    <AuthHeader></AuthHeader>
    <SideBar></SideBar>
    <main className="main-content">
    <AdvancedRealTimeChart 
    width = "100%"
    height = {(100 * vh)-145}
    symbol = "BINANCE:BTCUSDT"
    interval ="D"
    timezone ="Etc/UTC"
    theme = "dark"
    style = "1"
    locale = "en"
    toolbar_bg ="#f1f3f6"
    enable_publishing = {false}
    withdateranges = {false}
    hide_side_toolbar = {true}
    allow_symbol_change = {true}
    details = {false}
    container_id= "tradingview_e48c2"
    largeChartUrl = {window.location.href}
    >
    </AdvancedRealTimeChart>
    <br></br>
    <center>
    <MySymbolOverview>
    </MySymbolOverview>
    </center>
    </main>
    <Footer active="markets"></Footer>
    </>
}
export default withAuth(Markets);