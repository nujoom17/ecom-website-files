import React from 'react';
import { useGlobalContext } from './context';

const Menu = ({items}) => {
    const { openPurchaseDialog}=useGlobalContext();

  return <div className="section-center2">
    {items.map((menuItem)=>{
      const {id,name,img,category,available,price,vendor,amount}=menuItem;
      return (
        <div className="store-card" key={id}>
          <img className="menu-item-img" src={img} alt={name}/>
        <div style={{clear:"both"}}>
              <h4 style={{float:"left"}}>{name}</h4>
              
              <h3 style={{float:"right"}}>${price}</h3>
        </div>
        <h5 style={{textAlign:"center"}}>Category: {category}</h5>
        <h5 style={{textAlign:"center"}}>Vendor: {vendor}</h5>
        <h5 style={{textAlign:"center"}}>Availability: {available>0?`In Stock`:`Out of Stock`}</h5>
        
        <button className='amount-btn' onClick={openPurchaseDialog}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
   
        <p className='amount'>Add/Remove item in your Cart</p>
        
        <button className='amount-btn' onClick={openPurchaseDialog}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
          </div>
          
      )
    })}
    </div>;
};

export default Menu;
