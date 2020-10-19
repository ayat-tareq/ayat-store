import React from 'react';
import CartItem from './CartItem'
function CartList({value}) {
    const {cart}=value;
    
    return (
        <div className="container-fluid ">
            {cart.map(item=>{
                return(

                    <div className="card mb-1" key={item.id}>
                    <CartItem  item={item} value={value}/>
                    </div>
                )
            })}
        </div>
    );
}

export default CartList;