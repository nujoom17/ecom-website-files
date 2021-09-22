import React,{useState} from 'react';
import { useGlobalContext } from "./context";
import { FaTimes } from 'react-icons/fa';
import Menu from './Menu';
import items from './StoreData';
import CartContainer from './CartContainer';


const CheckoutPage = () => {
    const [menuItems,setMenuItems]=useState(items);
    const {isPurchaseDialog,closePurchaseDialog}=useGlobalContext();
    
    return(
        
    <div
      className={`${
        isPurchaseDialog ? 'purchase-wrapper show' : 'purchase-wrapper'
      }`}>
      <aside className='purchase-pop-up'>
        <button className='close-btn' onClick={closePurchaseDialog}>
          Minimize <FaTimes />
        </button>
        <CartContainer items={menuItems}/>
        </aside>
  </div>
    )
      
}

export default CheckoutPage
