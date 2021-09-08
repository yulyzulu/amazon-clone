import React from 'react';
import star from '../../static/star-fill.svg';
import './Product.css';

const Product = ({ id, title, image, price, category, rating}) => {
  return (
    <div className="row">
      <div className="product col-12 col-md-6 col-lg-3 card" >
        <img className="product__img card-img-top" src={image} alt="Computer" />
        <div className="card-body pt-1">
          <h5 className="product__price card-title text-center">${price}</h5>
          <p className="card-text"><strong>{title}</strong></p>
          {/* <p className="card-text"><small className="text-muted">Shipping Free</small></p> */}
          {
            Array(rating).fill().map((_) =>(
              <img className="product__rating pe-1" src={star} alt="star" />
            ))
          }
          <div className="product__button">
            <button className="btn btn-warning product__cart">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="product col-12 col-md-6 col-lg-3 card" >
        <img className="product__img card-img-top" src={image} alt="Computer" />
        <div className="card-body pt-1">
          <h5 className="product__price card-title text-center">${price}</h5>
          <p className="card-text"><strong>{title}</strong></p>
          {/* <p className="card-text"><small className="text-muted">Shipping Free</small></p> */}
          {
            Array(rating).fill().map((_) =>(
              <img className="product__rating pe-1" src={star} alt="star" />
            ))
          }
          <div className="product__button">
            <button className="btn btn-warning product__cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Product };
