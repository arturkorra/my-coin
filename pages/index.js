import withAuth from "./withAuth";
import Footer from "../components/footer";
import AuthHeader from "../components/authHeader";
import SideBar from "../components/sidebar";
import React, { useEffect } from 'react';
import {animateService} from "../services/animateService";
import jQuery from 'jquery';
import Ticker from "react-ticker";

function HomePage(){
    return<>
    <AuthHeader></AuthHeader>
    <SideBar></SideBar>
    <main className="main-content">
    <div className="container">
    <div className="service-item pt-6">
    <div className="row g-3">
    <div className="col-3">
    <div className="service-card text-center">
    <div className="card">
    <a href="wallet.html">
    <svg  viewBox="0 0 24 24" width="25" height="25" fill="currentColor"
    xmlns="http://www.w3.org/2000/svg">
    <path d="m21 3h-18c-1.65 0-3 1.35-3 3v12c0 1.65 1.35 3 3 3h6.76c-.29-.63-.5-1.3-.62-2h-6.14c-.55 0-1-.45-1-1v-12c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v4.29c.76.47 1.43 1.06 2 1.73v-6.02c0-1.65-1.35-3-3-3z"/>
    <path d="m7.25 8h-6c-.414 0-.75.336-.75.75v6.5c0 .414.336.75.75.75h6c1.517 0 2.75-1.233 2.75-2.75v-2.5c0-1.517-1.233-2.75-2.75-2.75zm-1.25 6c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/>
    <path d="m17.5 11c-3.584 0-6.5 2.916-6.5 6.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5zm-.125 5.75h.25c1.034 0 1.875.841 1.875 1.875 0 .813-.524 1.501-1.25 1.76v.365c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-.25h-.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.375c.207 0 .375-.168.375-.375s-.168-.375-.375-.375h-.25c-1.034 0-1.875-.841-1.875-1.875 0-.813.524-1.501 1.25-1.76v-.365c0-.414.336-.75.75-.75s.75.336.75.75v.25h.5c.414 0 .75.336.75.75s-.336.75-.75.75h-1.375c-.207 0-.375.168-.375.375s.168.375.375.375z"/>
    </svg>
    </a>
    </div>
    <p className="mb-0">Deposit</p>
    </div>
    </div>
    <div className="col-3">
    <div className="service-card text-center">
    <div className="card">
    <a href="wallet.html">
    <svg version="1.1"  width="25" height="25" fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 512 512" style={{enableBackground:'new 0 0 512 512'}}
    xmlSpace="preserve">
    <path d="M312.942,424.774L276,461.28V276c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v183.303l-34.942-34.529
    c-7.857-7.764-20.52-7.688-28.284,0.168c-7.764,7.857-7.688,20.52,0.168,28.284l41.589,41.098
    C225.878,505.724,240.955,512,257,512s31.122-6.276,42.469-17.676l41.589-41.098c7.856-7.764,7.932-20.427,0.168-28.284
    C333.461,417.085,320.799,417.009,312.942,424.774z"/>
    <path d="M492,276c-11.046,0-20,8.954-20,20c0,22.056-17.944,40-40,40h-96c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h96
    c44.112,0,80-35.888,80-80C512,284.954,503.046,276,492,276z"/>
    <path d="M311.172,253.815c3.35,2.157,7.101,3.188,10.809,3.187c6.573,0,13.011-3.237,16.834-9.174
    C350.712,229.354,357,208.277,357,186.878c0-59.551-45.309-108-101-108c-55.691,0-101,48.449-101,108
    c0,22.906,5.798,43.438,17.233,61.024c6.021,9.26,18.41,11.886,27.669,5.865c9.26-6.021,11.886-18.409,5.865-27.669
    C198.623,215.109,195,201.915,195,186.878c0-37.495,27.364-68,61-68s61,30.505,61,68c0,13.702-4.085,27.29-11.815,39.293
    C299.205,235.459,301.885,247.835,311.172,253.815z"/>
    <circle cx="415" cy="187" r="20"/>
    <circle cx="97" cy="187" r="20"/>
    <path d="M432,0H80C35.888,0,0,35.888,0,80v216c0,44.112,35.888,80,80,80h96c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H80
    c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h352c22.056,0,40,17.944,40,40v116c0,11.046,8.954,20,20,20
    c11.046,0,20-8.954,20-20V80C512,35.888,476.112,0,432,0z"/>
    </svg>
    </a>
    </div>
    <p className="mb-0">Withdraw</p>
    </div>
    </div>
    <div className="col-3">
    <div className="service-card text-center">
    <div className="card">
    <a href="exchange.html">
    <svg version="1.1" width="24" height="24" fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 330 330" style={{enableBackground:'new 0 0 330 330'}}
    xmlSpace="preserve">
    <path d="M315,75H51.213l49.393-49.394c5.858-5.857,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-75,75
    c-5.858,5.857-5.858,15.355,0,21.213l75,75C82.322,178.535,86.161,180,90,180c3.839,0,7.678-1.465,10.606-4.394
    c5.858-5.857,5.858-15.355,0-21.213L51.213,105H315c8.284,0,15-6.716,15-15S323.284,75,315,75z"/>
    <path d="M250.606,154.393c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213L278.787,225H15
    c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h263.787l-49.393,49.394c-5.858,5.857-5.858,15.355,0,21.213
    C232.322,328.535,236.161,330,240,330c3.839,0,7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213L250.606,154.393z"
    />
    </svg>
    </a>
    </div>
    <p className="mb-0">Convert</p>
    </div>
    </div>
    <div className="col-3">
    <div className="service-card text-center">
    <div className="card">
    <a href="#">
    <svg version="1.1"  width="25" height="25" fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 512 512" style={{enableBackground:'new 0 0 512 512'}}
    xmlSpace="preserve">
    <circle cx="256" cy="256.198" r="39.659"/>
    <circle cx="374.978" cy="256.198" r="39.659"/>
    <circle cx="137.022" cy="256.198" r="39.659"/>
    <path d="M256,0C114.833,0,0,114.833,0,256s114.833,256,256,256s256-114.853,256-256S397.167,0,256,0z M256,472.341
    c-119.275,0-216.341-97.046-216.341-216.341S136.725,39.659,256,39.659c119.295,0,216.341,97.046,216.341,216.341
    S375.275,472.341,256,472.341z"/>
    
    </svg>
    </a>
    </div>
    <p className="mb-0">More</p>
    </div>
    </div>
    </div>
    </div>
    <div className="market-item py-4">
    <h4 className="main-title py-4">Market Info</h4>
    <div className="row g-3">
    <div className="col-6 col-md-4 col-lg-3">
    <div className="crypto-card overflow-hidden">
    <div className="card-body p-0">
    <div className="mb-0 p-3">
    <h5><span className="cryp-icon my-auto me-2"><img src="/icons/bitcoin.png"
    alt="coin image"/></span>Bitcoin</h5>
    <div className="d-flex justify-content-between mt-2">
    <p className="d-flex font-weight-normal">$5,748</p>
    <span className="text-success">+4.16%</span>
    </div>
    </div>
    <div className="chart-wrapper">
    <canvas id="chart1"></canvas>
    </div>
    </div>
    </div>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <div className="crypto-card overflow-hidden">
    <div className="card-body p-0">
    <div className="mb-0 p-3">
    <h5><span className="cryp-icon my-auto me-2"><img src="/icons/ethereum.png"
    alt="coin image"/></span>ETH</h5>
    <div className="d-flex justify-content-between mt-2">
    <p className="d-flex font-weight-normal">$1,748</p>
    <span className="text-success">+10.16%</span>
    </div>
    </div>
    <div className="chart-wrapper">
    <canvas id="chart2"></canvas>
    </div>
    </div>
    </div>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <div className="crypto-card overflow-hidden">
    <div className="card-body p-0">
    <div className="mb-0 p-3">
    <h5><span className="cryp-icon my-auto me-2"><img src="/icons/binance.png"
    alt="coin image"/></span>BNB</h5>
    <div className="d-flex justify-content-between mt-2">
    <p className="d-flex font-weight-normal">$570</p>
    <span className="text-success">+30.16%</span>
    </div>
    </div>
    <div className="chart-wrapper">
    <canvas id="chart3"></canvas>
    </div>
    </div>
    </div>
    </div>
    <div className="col-6 col-md-4 col-lg-3">
    <div className="crypto-card overflow-hidden">
    <div className="card-body p-0">
    <div className="mb-0 p-3">
    <h5><span className="cryp-icon my-auto me-2"><img src="/icons/dash.png"
    alt="coin image"/></span>DOGE</h5>
    <div className="d-flex justify-content-between mt-2">
    <p className="d-flex font-weight-normal">$0.07083</p>
    <span className="text-danger">-10.40%</span>
    </div>
    </div>
    <div className="chart-wrapper">
    <canvas id="chart4"></canvas>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="transaction-item pb-4">
    <h4 className="main-title py-4">Transaction History</h4>
    <div className="transcation-card">
    <ul className="transaction-list">
    <li className="list-item mb-0 pb-3">
    <div className="media align-items-center">
    <img src="/icons/bitcoin.png" alt="coin image"/>
    <div className="media-body">
    <h5 className="mb-1 fs-16">Received Bitcoin</h5>
    <p className="mb-0 text-gray">Wallet: 93E25DAEYWZXF01</p>
    </div>
    </div>
    <div className="text-right ms-auto">
    <p className="mb-1 fw-bold">1.0435 BTC</p>
    <p className="mb-0"><span className="text-success">+$123.00</span> USD</p>
    </div>
    </li>
    <li className="list-item mb-0 pb-3">
    <div className="media align-items-center">
    <img src="/icons/ethereum.png" alt="coin image"/>
    <div className="media-body">
    <h5 className="mb-1 fs-16">Sent Ethereum</h5>
    <p className="mb-0 text-gray">Wallet: 93E25DAEYWZXF01</p>
    </div>
    </div>
    <div className="text-right ms-auto">
    <p className="mb-1 fw-bold">1.0437 ETH</p>
    <p className="mb-0"><span className="text-success">+$105.00</span> USD</p>
    </div>
    </li>
    <li className="list-item mb-0 pb-3">
    <div className="media align-items-center">
    <img src="/icons/dash.png" alt="coin image"/>
    <div className="media-body">
    <h5 className="mb-1 fs-16">Sent Dash</h5>
    <p className="mb-0 text-gray">Wallet: 93E25DAEYWZXF01</p>
    </div>
    </div>
    <div className="text-right ms-auto">
    <p className="mb-1 fw-bold">1.0407 Dash</p>
    <p className="mb-0"><span className="text-danger">-$551.00</span> USD</p>
    </div>
    </li>
    <li className="list-item mb-0 pb-3">
    <div className="media align-items-center">
    <img src="/icons/litecoin.png" alt="coin image"/>
    <div className="media-body">
    <h5 className="mb-1 fs-16">Received Litecoin</h5>
    <p className="mb-0 text-gray">Wallet: 93E25DAEYWZXF01</p>
    </div>
    </div>
    <div className="text-right ms-auto">
    <p className="mb-1 fw-bold">0.0007 LTC</p>
    <p className="mb-0"><span className="text-danger">-$231.00</span> USD</p>
    </div>
    </li>
    <li className="list-item mb-0 pb-3">
    <div className="media align-items-center">
    <img src="/icons/binance.png" alt="coin image"/>
    <div className="media-body">
    <h5 className="mb-1 fs-16">Received BNB</h5>
    <p className="mb-0 text-gray">Wallet: 93E25DAEYWZXF01</p>
    </div>
    </div>
    <div className="text-right ms-auto">
    <p className="mb-1 fw-bold">4.0437 BNB</p>
    <p className="mb-0"><span className="text-success">+$411.00</span> USD</p>
    </div>
    </li>
    <li className="list-item mb-0 pb-3">
    <div className="media align-items-center">
    <img src="/icons/ripple.png" alt="coin image"/>
    <div className="media-body">
    <h5 className="mb-1 fs-16">Sent XRP</h5>
    <p className="mb-0 text-gray">Wallet: 93E25DAEYWZXF01</p>
    </div>
    </div>
    <div className="text-right ms-auto">
    <p className="mb-1 fw-bold">2.0437 XRP</p>
    <p className="mb-0"><span className="text-danger">-$221.00</span> USD</p>
    </div>
    </li>
    <li className="list-item mb-0 pb-3">
    <div className="media align-items-center">
    <img src="/icons/chainlink.png" alt="coin image"/>
    <div className="media-body">
    <h5 className="mb-1 fs-16">Received LINK</h5>
    <p className="mb-0 text-gray">Wallet: 93E25DAEYWZXF01</p>
    </div>
    </div>
    <div className="text-right ms-auto">
    <p className="mb-1 fw-bold">9.0437 LINK</p>
    <p className="mb-0"><span className="text-success">+$201.00</span> USD</p>
    </div>
    </li>
    </ul>
    </div>
    </div>
    <div className="value-market-item">
    <div className="row">
    <div className="col-12 overflow-hidden">
    <div className="value-market-ticker">
    <Ticker>
    {({ index }) => (
    <ul className="inlineList">
    <li>
    <span>BTC Volume: <span className="text-warning ps-1">27/09%</span> </span>
    </li>
    <li>
    <span>Market Cap: <span className="text-warning ps-1">$1,684,298,992</span> </span>
    </li>
    <li>
    <span>ETH Volume: <span className="text-warning ps-1">267/09%</span> </span>
    </li>
    <li>
    <span>24 h Vol: <span className="text-warning ps-1">$235.094.677</span> </span>
    </li>
    </ul>
    )}
    </Ticker>
    </div>
    </div>
    </div>
    </div>
    </div>
    </main>
    <Footer></Footer>
    </>
}
export default withAuth(HomePage);