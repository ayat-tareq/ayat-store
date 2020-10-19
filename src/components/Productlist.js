import React, { Component } from 'react';
import Product from "./Product.js"
import Title from './Title.js'
import {ProductConsumer} from '../Context'
class Productlist extends Component {
    render() {
        
        return (
                <React.Fragment>
                    <div className="py-5">
                        <div className="container">
                            <Title name="our" title="products" />
                          
                            <div className="row">
                                <ProductConsumer>
                                    {(aa)=>{
                                      return aa.product.map((item)=>{
                                              return(<Product item={item} key={item.id}/>)
                                          })   
                                          
                                        }
                                        }
                                </ProductConsumer>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
                
               
            
        );
    }
}

export default Productlist;