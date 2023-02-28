import "./index.css"
import Header from "../Header"
import ItemCard from "../ItemCard"
import { useState,useEffect } from "react"

const Home =(props)=>{
    const [data,setData] = useState(null)
    const {onPlaceOrder} = props
    useEffect(()=>{
        fetch('http://localhost:3000/api')
            .then((res)=>res.json())
            .then((data)=>setData(data))
    },[])

    return(
        <div>
            <Header/> 
            <ul className="cards-wrapper">
                {data && data.map((eachItem)=><ItemCard details={eachItem} key={eachItem.name} onPlaceOrder={onPlaceOrder}/>)}
            </ul>
            
        </div>
    )
}

export default Home