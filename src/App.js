import React from 'react';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Slideshow from './SlideShow components/Slider';
import './App.css';
import Submenu from './Submenu';
import SearchForm from './Searchbar';
import Store from './Store';
import CheckoutPage from './CheckoutPage';
import Footer from './Footer';

function App() {
  return (
<>
    <Navbar/>
    <Sidebar/>
    <Submenu/>
    <Slideshow/>
    <SearchForm/>
    <Store/>
    <CheckoutPage/>
    <Footer/>
    
  </> 
  );
}

export default App;
