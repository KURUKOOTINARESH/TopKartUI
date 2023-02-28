import "./index.css"

const MyOrders = (props)=>{
    const {placedOrders} = props
    
    return(
        <div>
            <h1>MyOrders</h1>
            <hr/>
            {
                placedOrders.length!==0 ?
            <ul className="orders-wrapper">
                {placedOrders.map((eachItem=>{
                    const {name,quantity,status} = eachItem
                    return (<li className="order">
                        <div className="order-details"><p>{name}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Status: <span className="status-text">{status}</span></p></div>
                        <hr/>
                    </li>)
                }))}
            </ul>
            :
            <p style={{textAlign:'center',marginTop:"20%",fontSize:"32px"}}>Empty</p>
            }   
        </div>
    )
}

export default MyOrders