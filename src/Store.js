import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './StoreData';
import { useGlobalContext } from "./context";

const allCategories=["all",...new Set(items.map((item)=>item.category))];
const Store=()=>{
    const {openPurchaseDialog}=useGlobalContext();
const [menuItems,setMenuItems]=useState(items);
  const [categories,setCategories]=useState(allCategories);

  const filterItems=(category)=>{
    if(category==="all"){
    setMenuItems(items);
    return;
  }
    const newItems=items.filter((item)=>item.category===category)
    setMenuItems(newItems);

  }
  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Explore Our Products</h2>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </section>
    <button className="checkout" onClick={openPurchaseDialog}>Proceed to Checkout</button>
  </main>;
}
export default Store;
