import React from 'react';

function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-md-block my-3">
            <div className="row ">

                <div className="col-10 mx-auto col-md-2 align-self-center ">
                  <p className="text-uppercase mb-0">products</p>
                </div>
                <div className="col-10 mx-auto col-md-2 align-self-center">
                  <p className="text-uppercase mb-0 ">product name</p>
                  </div>
                  <div className="col-10 mx-auto col-md-2 align-self-center">
                  <p className="text-uppercase mb-0">price</p>
                  </div>
                  <div className="col-10 mx-auto col-md-2 align-self-center">
                  <p className="text-uppercase mb-0">quantity</p>
                  </div>
                  <div className="col-10 mx-auto col-md-2 align-self-center">
                  <p className="text-uppercase mb-0">remove</p>
                  </div>
                  <div className="col-10 mx-auto col-md-2 align-self-center">
                  <p className="text-uppercase mb-0">total</p>
                  </div>
            </div>
        </div>
    );
}

export default CartColumns;