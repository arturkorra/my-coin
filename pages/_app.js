import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/owl.carousel.min.css'
import '../styles/jquery.jConveyorTicker.min.css'
import '../styles/style.css'
import Head from 'next/head';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../components/loader";
import jQuery from 'jquery';
toast.configure();
function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    // Animate loader off screen
    jQuery("#loader-page").delay(100).fadeOut("slow");
  }, []);
  return <>
  <Head>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <title>MyCoin - Bitcoin And Crypto Currency Wallet</title>
  <meta name="description" content="Description" />
  <meta name="keywords" content="Keywords" />
  <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,900&display=optional" rel="stylesheet"/>
  <link rel="icon" href="../favicon.png"/>
  <link rel="manifest" href="/manifest.json" />
  <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
  <link rel="apple-touch-icon" href="/icons/icon-16x16.png"/>
  <link rel="apple-touch-icon" href="/icons/icon-32x32.png"/>
  <link rel="apple-touch-icon" href="/icons/icon-72x72.png"/>
  <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png"/>
  <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png"/>
  <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png"/>
  <meta name="theme-color" content="#2a2d3c" />
  </Head>
  <Loader></Loader>
  <Component {...pageProps} />
  </>
}

export default MyApp
