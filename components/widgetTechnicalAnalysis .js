import { TechnicalAnalysis } from "react-ts-tradingview-widgets";

function MyTechnicalAnalysis(props){
  return<TechnicalAnalysis 
  colorTheme="dark"
  symbol={props.symbol}
  interval = "1m"
  width = "95%"
  isTransparent = {false}
  showIntervalTabs = {true}
  locale = "en"
  largeChartUrl = {window.location.href+"/markets"}
  ></TechnicalAnalysis>
}
export default MyTechnicalAnalysis;