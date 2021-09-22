import React from 'react'
import { useGlobalContext } from './context'
import {FaTimes} from "react-icons/fa"
import sublinks from './data'


const Sidebar = () => {
    const {isSidebarOpen,closeSidebar}=useGlobalContext()
    return(<div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div>
          {sublinks.map((item,index)=>{
              const {page,links}=item;
              return (
              <div key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { url, icon, label } = link
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
                </div>
                  
              )
          })} 
        </div>
      </aside>
    </div>
    )
}

export default Sidebar
