import React,{useState} from "react";

function Item(props) {

    const  {foodItem}  = props

    const [value, setValue] = useState(0);

    const qty = (e) =>{
        setValue(e.target.value)
    }
console.log(props)
       
    return (
        <table>
            <tbody>
                <tr>
                    <th className='p-3'><img style={{ height: "50px", width: "50px" }} src={foodItem.imageUrl} alt='...' /></th>
                    <th className='p-3'>{foodItem.title}</th>
                    <th className='p-3'>Qty: <input style={{ width: "25px", height: "20px" }} type="text" value={value} onChange={qty} /></th>
                    <th className='p-3'>Rate: {foodItem.price}</th>
                    <th className='p-3'>Subtotal: {foodItem.price * value}</th>
                </tr>
                <tr>
                <td>Total price:{props.foodItem.reduce((total, foodItem)=>total+(foodItem.price * value),0)}</td>
                </tr>
            </tbody>
        </table>
    )
}


export default Item;