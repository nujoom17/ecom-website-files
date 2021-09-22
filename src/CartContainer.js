import React,{useState} from 'react';
import { useGlobalContext } from './context';

const CartContainer = ({items}) => {
    const { openPurchaseDialog}=useGlobalContext();

   
  return <div className="section-center3">
    {items.map((menuItem)=>{
      const {id,name,img,available,price,vendor,amount}=menuItem;
     
      return (
        <div className="store-card2" key={id}>
        <div style={{clear:"both"}}>
              <h4 style={{float:"left"}}>{name}</h4>
              <h3 style={{float:"right"}}>${price}</h3>
        </div>
        <br/>
        
        <h5 style={{textAlign:"left"}}>Vendor: {vendor}</h5>
        <p style={{textAlign:"center"}}>Availability: {available>0?`Item Available`:`Item cannot be purchased now`}</p>
        Quantity in your cart: <span style={{fontWeight:"bold"}}> {amount}</span>
        <br/>
        <br/>
        <div style={{clear:"both"}}>
        <button className='amount-btn' style={{float:"left"}}> Increase Quantity 
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>


            <button className='amount-btn' style={{float:"right"}}> Decrease Quantity
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
        </div>
        
        
          </div>
          
      )
    })}
    <p style={{fontWeight: "bold"}}>Total: $0</p>
    
    <button style={{padding:"12px"}}>Proceed to Payment Page</button>
    </div>;
};

export default CartContainer;
