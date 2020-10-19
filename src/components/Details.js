import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


class Details extends Component {
    
    render() {
        return (
            <ProductConsumer>
                {
                    (value)=>{
                       const {id,title,img,price,inCart,company,info}=value.detailProduct;
                       return(
                           <div>
                           <div className="container py-5">
                                {/* TITLE */}
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-blue my-5">
                                     <h1>{title}</h1>     
                                    </div>
                                </div>
                                {/* END TITLE */}
                                {/* product info */}
                                    <div className="row">
                                        {/* product img */}
                                        <div className="col-10 mx-auto col-md-6 my-3 ">
                                            <img src={img} alt={title} className="img-fluid"/>
                                        </div>
                                        {/* product text */}
                                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                            <h1>model: {title}</h1>
                                            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                       made by:<span className="text-uppercase">{company}</span>
                                            </h4>
                       <h4 className="text-blue"><strong>price : <span>$</span> {price}</strong></h4>
                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                            some info about the product</p>    
                             <p className="text-muted lead">
                       {info}</p>      
                       {/* this is the buttons */}
                       <div>
                            <Link to="/">
                            <ButtonContainer>
                            back to product
                            </ButtonContainer>
                            </Link>
                            
                            <ButtonContainer 
                            cart
                            disabled={inCart?true:false}
                             onClick={()=>{
                                value.addToCart(id);
                                value.openModal(id);
                            }
                            }
                            >
                            {inCart?"in cart":"add to cart"}
                            </ButtonContainer>
                            
                           
                           </div>   
                                        </div>
                                    </div>

                                {/* end of product info */}
                           </div>
                           <div className="container">
                               <div className="row py-3 bg-light">
                                   <div className="col-10 mx-auto">
                                       <p className="text-muted text-center mb-0">all right reserved © ayat 2020 </p>
                                   </div>
                               </div>
                           </div>
                           </div>
                       )
                    }
                }    

            </ProductConsumer>
        );
    }
}

export default Details;