
import { TickerTape } from "react-ts-tradingview-widgets";
import { useRouter } from 'next/router';

function MyTricker(){
  const router = useRouter();
  return<TickerTape
     symbols ={[
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "BITSTAMP:ETHUSD",
          "title": "Ethereum"
        },
        {
          "description": "Binance ",
          "proName": "BINANCEUS:BNBUSD"
        },
        {
          "description": "Solana",
          "proName": "KRAKEN:SOLUSD"
        } 
      ]}
  showSymbolLogo = "true"
  colorTheme = "dark"
  isTransparent = "false"
  largeChartUrl = {window.location.href+"/markets"}
  displayMode = "regular"
  locale = "en"
  >
  </TickerTape>
}
export default MyTricker;