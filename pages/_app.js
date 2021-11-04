import '../styles/globals.css'
import '../public/css/bootstrap.min.css'
import '../public/css/animate.min.css'
import '../public/css/style.css'
import '../public/css/owl.carousel.min.css'
import '../public/css/jquery.jConveyorTicker.min.css'
import Footer from '../components/Footer.js'
import Sidemenu from '../components/Sidemenu.js'
import Header from '../components/Header.js'
import Loader from '../components/Loader.js'
//if (typeof window !== "undefined") {
  //require("jquery");
//}

function MyApp({ Component, pageProps }) {
  return(
    <>
    
    <Sidemenu></Sidemenu>
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
    </>
  )
}

export default MyApp
