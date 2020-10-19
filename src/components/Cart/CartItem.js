import React from 'react';

function CartItem({item,value}) {
    const{id,img,title,price,total,count}=item;
    const {increment,decrement,removeItem}=value;
    return (
        <div className="row my-1 text-capitalize text-center ">
            <div className="col-10 mx-auto col-md-2">
                <img src={img} style={{width:'5rem',height:'5rem'}} className="img-fluid" alt=""/>
            </div>
            <div className="col-10 mx-auto col-md-2 align-self-center">
                <span className="d-md-none">product : </span>{title}
            </div>
            <div className="col-10 mx-auto col-md-2 align-self-center">
            <span className="d-md-none">price : </span>{price}
            </div>
                <div className="col-10 mx-auto my-2 my-md-0 col-md-2 align-self-center">
                    <div className="d-flex justify-content-center">
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
                    </div>
                </div>
                <div className="col-10 mx-auto col-md-2 align-self-center">
                   <div className="cart-icon" onClick={()=>removeItem(id)}>
                       <i className="fas fa-trash"></i>
                   </div>
            </div>
                {/*  */}
                <div className="col-10 mx-auto col-md-2 align-self-center">
                    <strong className="d-md-none d-block">item total : $</strong>
                {total}
            </div>
        </div>
    
    );
}

export default CartItem;