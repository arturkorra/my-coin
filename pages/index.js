import withAuth from "./withAuth";
import Footer from "../components/footer";
import AuthHeader from "../components/authHeader";
import SideBar from "../components/sidebar";
import React, { useEffect } from 'react';
import MyTicker from "../components/myTricker";
import MyMiniChart from "../components/widgetMiniChart";
import MyCryptoCurrencyMarket from "../components/widgetCryptoCurrencyMarket";
import jQuery from 'jquery';

function HomePage(){
   
          //setTimeout(function() {
            //const collection = document.getElementsByTagName("a");
            //alert(collection.length);
            //for(const elm of collection){
                //alert(elm.getAttribute("href"));
            //}
          //}, 20000);
    return<>
    <AuthHeader></AuthHeader>
    <SideBar></SideBar>
    <main className="main-content">
    <div className="container">
    <div className="market-item py-4">
    <h4 className="main-title py-4">Market Info</h4>
    <div className="row g-3">
    <div className="col-6 col-md-4 col-lg-3">
    <div className="crypto-card overflow-hidden">
    <MyMiniChart symbol="BITSTAMP:BTCUSD"></MyMiniChart>
    </div>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <div className="crypto-card overflow-hidden">
    <MyMiniChart symbol="EASYMARKETS:ETHUSD"></MyMiniChart>
    </div>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <div className="crypto-card overflow-hidden">
    <MyMiniChart symbol="BINANCE:BNBBUSD"></MyMiniChart>
    </div>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <div className="crypto-card overflow-hidden">
    <MyMiniChart symbol="FTX:SOLUSD"></MyMiniChart>
    </div>
    </div>
    </div>
    </div>
    <div className="transaction-item pb-4">
     <MyCryptoCurrencyMarket>
    </MyCryptoCurrencyMarket>
    </div>
    <div className="value-market-item">
    <div className="row">
    <div className="col-12 overflow-hidden">
    <div className="value-market-ticker">
    <MyTicker>
    </MyTicker>
    </div>
    </div>
    </div>
    </div>
    </div>
    </main>
    <Footer active="home"></Footer>
    </>
}
export default withAuth(HomePage);