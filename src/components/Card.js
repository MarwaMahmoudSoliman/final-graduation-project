
import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillBagFill } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'; 

const Card = ({ course }) => {
  const { img, title, star, reviews, prevPrice, newPrice, type, id } = course;
  const { t } = useTranslation(); 

  return (
    <section className="card" style={{ width: "17.5em" }}>
      <img src={img} alt={title} className="card-img shadow-effect-hover" />
      <span style={{ color: "purple", padding: "10px" }} className="dev">{t(type)}</span>

      <div className="outer-div">
        <div className="inner-div1">
          <BsFillBagFill style={{ marginRight: "10px" }} />
          <span> {t('4 Lessons')}</span>
        </div>
        <div className="inner-div">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg>
          <span> {t('1 student')}</span>
        </div>
      </div>
      <div className="card-details">
        <Link to={`/course/${id}`} className="text-decoration-none">
          <h3 className="card-title">{title}</h3>
        </Link>
        <h6>{t('John Cena')}</h6>
        <section className="card-reviews">
          {star} {star} {star} 
          <FaRegStar style={{ color: "orange" }} />
          <span className="total-reviews">{reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>
          <Link to ='/credit'>
          <button style={{ backgroundColor: "purple", padding: "10px" }}>  Pay</button></Link>
          
        </section>
      </div>
    </section>
  );
};

export default Card;
