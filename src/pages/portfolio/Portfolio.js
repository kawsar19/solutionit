import React, { useEffect, useState } from 'react';
import SinglePortfolio from './SinglePortfolio';

const portfolio = [
    {
      name: "course pormo for dirasa it and solution it",
      link: "https://www.youtube.com/embed/4HA9ibXvPMw",
      category: ["all", "course-promo"]
    },
    {
      name: " course promo for noto nicho",
      link:"https://www.youtube.com/embed/tksf3lqht_4",
      category: ["all", "course-promo"]
    },
    {
      name: "3d book promo for nishadin ",
      link:"https://www.youtube.com/embed/hvBvnjTbzNI",
      category: ["all", "book-promo"]
    },
    {
      name: "3d book promo for isalul karim  ",
      link:"https://www.youtube.com/embed/2gv-tHnyKwg",
      category: ["all", "book-promo"]
    },
    {
      name: "Product Promotion  ",
      link:"https://www.youtube.com/embed/Ol2taHZEP7g",
      category: ["all", "product-promo"]
    }
   
    
  ];



const Portfolio = () => {

    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(portfolio);
      }, []);
    
      useEffect(() => {
        setProjects([]);
    
        const filtered = portfolio.map(p => ({
          ...p,
          filtered: p.category.includes(filter)
        }));
        setProjects(filtered);
      }, [filter]);
    return (
        <div className='container py-5'>
        <div className="portfolio__labels">
          <button  active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </button>
          <button
           
            active={filter === "course-promo"}
            onClick={() => setFilter("course-promo")}
          >
            Course pormotion
          </button>
          <button
           
            active={filter === "book-promo"}
            onClick={() => setFilter("book-promo")}
          >
           Book Promotion
          </button>
          <button
        
            active={filter === "product-promo"}
            onClick={() => setFilter("product-promo")}
          >
            Product promotion
          </button>
        
        </div>
        <div className="portfolio__container">
         
          {projects.map(item =>
            item.filtered === true ? <SinglePortfolio key={item.name} item={item}></SinglePortfolio> : ""
          )}
          
        </div>
      </div>
    );
};

export default Portfolio;

