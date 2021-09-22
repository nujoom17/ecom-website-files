import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'Products',
    links: [
      { label: 'Electronics', icon: <FaCreditCard />, url: '/products' },
      { label: 'Medical & Fitness', icon: <FaCreditCard />, url: '/products' },
      { label: 'Fashion', icon: <FaCreditCard />, url: '/products' },
      { label: 'Food & Grocery', icon: <FaCreditCard />, url: '/products' },
      { label: 'Industrial Equipments', icon: <FaCreditCard />, url: '/products' },
       { label: 'Books', icon: <FaCreditCard />, url: '/products' },
       { label: 'Stationary', icon: <FaCreditCard />, url: '/products' },
       { label: 'Travel Accessories', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'Services',
    links: [
      { label: 'Digital Services', icon: <FaBook />, url: '/services' },
      { label: 'Join our newsgroup', icon: <FaBook />, url: '/services' },
      { label: 'Track your delivery', icon: <FaBook />, url: '/services' },
      { label: 'Report grievance', icon: <FaBook />, url: '/services' },
    ],
  },
  {
    page: 'About us',
    links: [
      { label: 'Contact Us', icon: <FaBriefcase />, url: '/about-us' },
      { label: 'Locate nearest store', icon: <FaBriefcase />, url: '/about-us' },
       { label: 'Our History', icon: <FaBriefcase />, url: '/about-us' },
      { label: 'Careers', icon: <FaBriefcase />, url: '/about-us' },
    ],
  },
];

export default sublinks;
