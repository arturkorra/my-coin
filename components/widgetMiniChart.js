
import { MiniChart } from "react-ts-tradingview-widgets";

function MyMiniChart(props){
  return<MiniChart 
  colorTheme="dark"
  symbol={props.symbol}
  width ="100%"
  height ="100%"
  locale ="en"
  dateRange ="12M"
  trendLineColor ="rgba(41, 98, 255, 1)"
  underLineColor ="rgba(41, 98, 255, 0.3)"
  underLineBottomColor ="rgba(41, 98, 255, 0)"
  isTransparent ="false"
  autosize = "true"
  largeChartUrl = {window.location.href+"/markets"}
  ></MiniChart>
}
export default MyMiniChart;