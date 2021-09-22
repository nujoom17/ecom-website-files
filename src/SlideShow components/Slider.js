import React,{useState} from "react";
import pdata from "./slider-data";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useEffect } from "react";
import { useGlobalContext } from "../context";


const Slideshow=()=>{
    const {closeSubmenu}=useGlobalContext()
    const [people, setPeople] = useState(pdata);
    const [index, setIndex] = useState(0);
    const handleSubmenu=(e)=>{
      if(e.target.classList.contains("section-s")){
       closeSubmenu() 
      }
    }


    useEffect(()=>{
        const lastIndex=people.length-1;
        if(index<0){
            setIndex(lastIndex)
        }
        if(index>lastIndex){
            setIndex(0)
        }
    },[people,index])

    useEffect(()=>{
        let slider=setInterval(()=>{
            setIndex(index+1)
        },3500)
        return ()=>{
            clearInterval(slider)
        }
    },[index])
    return <section className="section-s" onMouseOver={handleSubmenu}>
        <div className="section-center">
            
            {people.map((person,personIndex)=>{
                const {id,image,name,title,quote}=person;

                let position = 'nextSlide';
                if (personIndex === index) {
                    position = 'activeSlide';
                }
                if (
                    personIndex === index - 1 
                ) {
                    position = 'lastSlide';
                }
                return(
                    <article key={id} className={position}>
                        <img src={image} alt="image" className="person-img"/>
                        <h3>{title}</h3>
                        <p>{quote}</p>
                    </article>
                )
            })}
            <button className="prev" onClick={()=>setIndex(index-1)}>
             <FiChevronLeft />
            </button>
            <button className="next" onClick={()=>setIndex(index+1)}>
             <FiChevronRight />
            </button>
        </div>
    </section>
}

export default Slideshow
