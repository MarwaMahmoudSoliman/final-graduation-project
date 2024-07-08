import React from 'react';
import './Courses.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import Navigation from "../../Navigation/Nav";
import Products from "../../Products/Products";
import products from "../../db/data";
import Recommended from "../../Recommended/Recommended";
import Sidebar from "../../Sidebar/Sidebar";
import Card from "../../components/Card";
import blogheader from '../../utils/images/blogheader.png';
import women from '../../utils/images/women.png';
import '../../i18n'
import { useTranslation } from 'react-i18next';
function Courses() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  const filteredItems = products.filter(
    (product) => product.type.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  function filteredData(products, selected, query) {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, title, company, newPrice, type }) =>
          category === selected ||
        title === selected ||
          company === selected ||
          newPrice === selected ||
          type === selected
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice ,type,id}) => (
        <Card
          id={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          type={type}
          course={{img,title,star,reviews,prevPrice,newPrice,type,id}}
         
        />
      )
    );
  }
  const result = filteredData(products, selectedCategory, query);

  return (

<div className='courses-page' style={{ minHeight: "150em" }}>
  <div className='blog-page'>
    <div className="about-us-container">
      <div className="about-us-content">
        <h1>Courses</h1>
        <p className="breadcrumb">Home {'>'} Post {'>'} Courses</p>
      </div>
      <div className="about-us-image">
        <img src={blogheader} alt="Books" className="img-fluid" />
      </div>
    </div>
  </div>

  <div className='d-flex flex-wrap'>
    <div className='side bg-white w-100 w-md-50 w-lg-25 p-3'>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} className='bg-white my-3' />
      <Recommended handleClick={handleClick} className='bg-white my-3' />
      <Products result={result} className='bg-white my-3' />
    </div>
    
    <section className='s1 back w-100'></section>
  </div>
  
  <div className='py-5' style={{ background: "#573ede", position: 'relative' }}>
    <div className="container">
      <div className='row d-flex align-items-center justify-content-between'>
        <div className='col-12 col-lg-6'>
          <img src={women} className='img-fluid' alt="Person" />
        </div>
        <div className='col-12 col-lg-6'>
          <h2 className='text-white'>Skills Certificate From the Studyhub</h2>
          <Link to="/courses">
            <button type='button' className='btn btn-light my-3' style={{background:"#543cdc"}}>View All Courses &rarr;</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}


export default Courses;
