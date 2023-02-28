import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from "./components/Home"
import MyOrders from './components/MyOrders'

const placedOrders = []
const onPlaceOrder =(orderDetails)=>{
  placedOrders.push(orderDetails)
}
const autoRefresh=()=> {
  window.location = window.location.href;
}
setInterval(function() { 
  const utcTime = new Date()
  if(utcTime.getUTCHours()===0 && utcTime.getUTCMinutes()===0 && utcTime.getUTCSeconds()===0){
      autoRefresh()
  }
}, 1000);
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home onPlaceOrder={onPlaceOrder}/>}/>
      <Route exact path="/myorders" element={<MyOrders placedOrders={placedOrders}/>} />
    </Routes>
  </BrowserRouter>
)

export default App