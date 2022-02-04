import withAuth from "./withAuth";
import Footer from "../components/footer";
import AuthHeader from "../components/authHeader";
import SideBar from "../components/sidebar";
import React, { useEffect } from 'react';
import MyTechnicalAnalysis from "../components/widgetTechnicalAnalysis ";

function Wallet(){
    return<>
    <AuthHeader></AuthHeader>
    <SideBar></SideBar>
    <main className="main-content">
    <div className="container">
        <div className="wallet-item pb-4">
            <h4 className="main-title py-4">My Wallet</h4>
            <div className="d-flex">
                <img src="/icons/bitcoin.png" className="wd-30 ht-30 ml-3 my-auto" alt="coin image"/>
                <div className="ms-3">
                    <p className="text-uppercase text-gray mb-0">Available BTC</p>
                    <div className="d-flex my-auto"><h2 className="mt-1 mb-0">0.12455</h2><span
                            className="mt-auto mb-1 ms-2">BTC</span></div>
                </div>
            </div>
            <div className="d-flex gap-2 py-4">
                <button className="btn btn-main" type="button">
                    <svg version="1.1" width="12" height="12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 492 492"  xmlSpace="preserve">
                                		<path d="M442.627,185.388L265.083,7.844C260.019,2.78,253.263,0,245.915,0c-7.204,0-13.956,2.78-19.02,7.844L49.347,185.388
			c-10.488,10.492-10.488,27.568,0,38.052l16.12,16.128c5.064,5.06,11.82,7.844,19.028,7.844c7.204,0,14.192-2.784,19.252-7.844
			l103.808-103.584v329.084c0,14.832,11.616,26.932,26.448,26.932h22.8c14.832,0,27.624-12.1,27.624-26.932V134.816l104.396,104.752
			c5.06,5.06,11.636,7.844,18.844,7.844s13.864-2.784,18.932-7.844l16.072-16.128C453.163,212.952,453.123,195.88,442.627,185.388z"
                                        />
                            </svg>
                    Sent
                </button>
                <button className="btn btn-main" type="button">
                    <svg version="1.1" width="12" height="12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                         viewBox="0 0 492 492"  xmlSpace="preserve">
                            <path d="M442.668,268.536l-16.116-16.12c-5.06-5.068-11.824-7.872-19.024-7.872c-7.208,0-14.584,2.804-19.644,7.872
                            L283.688,355.992V26.924C283.688,12.084,272.856,0,258.02,0h-22.804c-14.832,0-28.404,12.084-28.404,26.924v330.24
                            L102.824,252.416c-5.068-5.068-11.444-7.872-18.652-7.872c-7.2,0-13.776,2.804-18.84,7.872l-16.028,16.12
                            c-10.488,10.492-10.444,27.56,0.044,38.052l177.576,177.556c5.056,5.056,11.84,7.856,19.1,7.856h0.076
                            c7.204,0,13.972-2.8,19.028-7.856l177.54-177.552C453.164,296.104,453.164,279.028,442.668,268.536z"/>
                    </svg>
                    Receive
                </button>
            </div>
            <div className="qrcode-item mt-4 mb-4">
                <img src="/qr-code.png" alt="qr code"/>
                <h4 className="text-center text-primary fs-12 mt-4">This is your Wallet ID</h4>
            </div>
            <div className="input-group py-4">
                <input type="text" className="form-control input-lg" id="wallet-address"
                       value="afb0dc8bc84625587b85415c86ef43ed8df"/>
                <div className="input-group-prepend">
                    <button className="btn btn-primary clipboard-icon clipboard-box"
                            data-clipboard-target="#wallet-address" title="">COPY
                    </button>
                </div>
            </div>
        </div>
    </div>
    <center>
    <MyTechnicalAnalysis symbol="BITSTAMP:BTCUSD">
    </MyTechnicalAnalysis>
    </center>
</main>
    <Footer active="wallet"></Footer>
    </>
}
export default withAuth(Wallet);