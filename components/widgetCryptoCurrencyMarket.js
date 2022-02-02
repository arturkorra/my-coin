
import { CryptoCurrencyMarket } from "react-ts-tradingview-widgets";

function MyCryptoCurrencyMarket(){
  return<CryptoCurrencyMarket 
  width = "100%"
  height = {500}
  defaultColumn = "overview"
  screener_type = "crypto_mkt"
  displayCurrency = "USD"
  colorTheme = "dark"
  largeChartUrl = {window.location.href+"/markets"}
  locale= "en">
  </CryptoCurrencyMarket>
}
export default MyCryptoCurrencyMarket;