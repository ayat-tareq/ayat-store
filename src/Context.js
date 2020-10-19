import React, { Component } from 'react';
import {storeProducts,detailProduct} from './data.js'
const ProductContext = React.createContext();


 class ProductProvider extends Component {
     state={
         product:[],
         detailProduct:detailProduct,
         cart:[],
         modalOpen:false,
         modalProduct:detailProduct,
         cartSubTotal:0,
         cartTax:0,
         cartTotal:0,

     }
     componentDidMount(){
         this.setProducts();
     }
     setProducts=()=>{
         let products=[]
         storeProducts.forEach(item=>{
           const singleItem={...item}  ;
           products=[...products,singleItem];
         })
         this.setState(()=>{
             return {product:products}
         })
     }
     getItem=(id)=>{
      const item=this.state.product.find(item=>item.id===id);
      return item

     }
     handlDetail=(id)=>{
         const product=this.getItem(id);
         this.setState(()=>{return{detailProduct:product}})
     }
     addToCart=(id)=>{
        let tempProduct=[...this.state.product];
        const index =tempProduct.indexOf(this.getItem(id));
        const product=tempProduct[index]
        product.inCart=true;
        product.count=1;
        const price=product.price;
        product.total=price;
        this.setState(()=>{
            return{
                product:tempProduct,
                cart:[...this.state.cart,product]
            }
        },()=>{this.addTotal()})

    }
    openModal=(id)=>{
    const product =this.getItem(id);
    this.setState(()=>{
        return{modalProduct:product,
        modalOpen:true}
    })}
    closeModal= ()=>{
        this.setState(()=>{
            return{
                modalOpen:false
            }
        })
     }
     increment=(id)=>{
        let tempCart=[...this.state.cart];
        const product=tempCart.find(item=>item.id===id);
        const index = tempCart.indexOf(product);
        const item = tempCart[index];
        item.count=item.count+1;
        item.total= item.price * item.count;
        this.setState(()=>{
            return{
                cart:[...tempCart]
            }
        },()=>{this.addTotal()})
     }
     decrement=(id)=>{
        let tempCart=[...this.state.cart];
        const product=tempCart.find(item=>item.id===id);
        const index = tempCart.indexOf(product);
        const item = tempCart[index];
        item.count=item.count-1;
        if(item.count==0){
            this.removeItem(id)
        }else{
        item.total= item.count * item.price;
        this.setState(()=>{
            return{
                cart:[...tempCart]
            }
        },()=>{this.addTotal()})
    }
    }
    removeItem=(id)=>{
        let tempProduct=[...this.state.product];
        let tempCart=[...this.state.cart];
        tempCart=tempCart.filter(item=>item.id !==id);
        const index =tempProduct.indexOf(this.getItem(id))
        let removedProduct=tempProduct[index];
        removedProduct.inCart= false;
        removedProduct.count= 0;
        removedProduct.total= 0;
        this.setState(()=>{
            return{
                cart:[...tempCart],
                product:[...tempProduct]

            }
        },()=>{this.addTotal()})


    }
    clearCart=()=>{
        console.log("empty cart");
        this.setState(()=>{return{
            cart:[]
        }
        },()=>{
            this.setProducts();
            this.addTotal();
    })
    }
    addTotal=()=>{
        let subTotal=0;
        this.state.cart.map((item)=>{
            return subTotal+=item.total
        });
        let tempTax=subTotal*0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal+tax;
        this.setState(()=>
        {return{
            cartSubTotal:subTotal,
         cartTax:tax,
         cartTotal:total,
            
        }})
    }
    render() {
        return (  
        <ProductContext.Provider value={{
                ...this.state,
                handlDetail:this.handlDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart

        }} >
            {this.props.children}
        </ProductContext.Provider>
        );
    }
}
const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer}
