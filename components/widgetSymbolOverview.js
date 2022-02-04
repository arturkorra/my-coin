import { SymbolOverview } from "react-ts-tradingview-widgets";

function MySymbolOverview(){
  return<SymbolOverview 
  symbols ={[
    [
      "BTCUSD",
      "COINBASE:BTCUSD|12M"
    ],
    [
      "ETHUSD",
      "COINBASE:ETHUSD|12M"
    ],
    [
      "SOLUSDT",
      "BINANCE:SOLUSDT|12M"
    ] 
  ]}
  chartOnly = {false}
  width = "95%"
  locale = "en"
  colorTheme = "dark"
  gridLineColor = "rgba(240, 243, 250, 0)"
  fontColor = "#787B86"
  isTransparent = {false}
  autosize = {false}
  showVolume = {false}
  scalePosition = "no"
  scaleMode = "Normal"
  fontFamily = "Trebuchet MS, sans-serif"
  noTimeScale = {false}
  valuesTracking = "1"
  chartType = "area"
  lineColor = "#2962FF"
  bottomColor = "rgba(41, 98, 255, 0)"
  topColor = "rgba(41, 98, 255, 0.3)"
  container_id = "tradingview_38271"
  largeChartUrl = {window.location.href+"/markets"}
  ></SymbolOverview>
}
export default MySymbolOverview;