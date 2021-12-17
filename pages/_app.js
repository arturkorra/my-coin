import '../styles/bootstrap.min.css'
import '../styles/animate.min.css'
import '../styles/owl.carousel.min.css'
import '../styles/jquery.jConveyorTicker.min.css'
import '../styles/style.css'
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return <>
  <Head>
   <title>Nextcoin - Bitcoin And Crypto Currency Mobile Template</title>
    <link href="https://fonts.googleapis.com/css?family=Nunito:300,400,600,700,900" rel="stylesheet"/>
    <link rel="icon" href="../favicon.png"/>
    <link rel="apple-touch-icon" href="img/touch/homescreen96.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="../touch/homescreen144.png"/>
    <link rel="apple-touch-icon" sizes="168x168" href="../touch/homescreen168.png"/>
    <link rel="apple-touch-icon" sizes="192x192" href="../touch/homescreen192.png"/>
    </Head>
<Component {...pageProps} />
</>
}

export default MyApp
